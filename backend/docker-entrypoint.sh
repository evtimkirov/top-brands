#!/bin/bash

chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache

until php artisan migrate --no-interaction --force; do
  echo "Waiting for MySQL to be ready..."
  sleep 3
done

exec apache2-foreground
