FROM php:8.2-fpm-alpine

# Install ekstensi yang dibutuhkan Laravel
RUN docker-php-ext-install pdo pdo_mysql

WORKDIR /var/www/html
COPY . .

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-dev --optimize-autoloader

# PENTING: Berikan izin ke folder storage & cache agar tidak error
RUN chown -R www-data:www-data storage bootstrap/cache

# Menjalankan server internal PHP untuk akses browser langsung
# Port harus sesuai dengan yang ada di Kubernetes Service (8000)
# Kita hapus dulu cache manual, baru jalankan serve
CMD php artisan config:clear && php artisan cache:clear && php artisan serve --host=0.0.0.0 --port=8000
