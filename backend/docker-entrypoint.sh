#!/bin/bash

chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache

until php artisan migrate --no-interaction --force; do
  echo "Waiting for MySQL to be ready..."
  sleep 3
done

# Clear and run the migration and the seeders
php artisan migrate:fresh --force
php artisan db:seed --force

exec apache2-foreground
