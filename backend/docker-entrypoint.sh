#!/bin/bash

chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache

if [ ! -f ".env" ]; then
  cp .env.example .env
  echo "Copied .env.example as .env"
fi

if [ ! -f vendor/autoload.php ]; then
  echo "Running composer install..."
  composer install --no-interaction --prefer-dist --optimize-autoloader
fi

php artisan key:generate --force

until php artisan migrate --no-interaction --force; do
  echo "Waiting for MySQL to be ready..."
  sleep 3
done

# Clear and run the migration and the seeders
php artisan migrate:fresh --force
php artisan db:seed --force

exec apache2-foreground
