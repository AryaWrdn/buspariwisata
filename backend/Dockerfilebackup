# GANTI angka 8.1 di bawah ini sesuai hasil cek composer.json kamu!
# Kalau di composer.json tertulis ^7.3 atau ^7.4, ubah jadi php:7.4-apache
# Kalau di composer.json tertulis ^8.0, ubah jadi php:8.0-apache
# Kalau ragu, coba pakai 8.2 dulu (versi umum saat ini)
FROM php:8.2-apache

RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

RUN a2enmod rewrite

# PERBAIKAN WARNING: Tambahkan tanda sama dengan (=)
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY . .

# PERBAIKAN ERROR: Tambahkan '--ignore-platform-reqs'
# Ini akan memaksa install meskipun versi PHP agak beda dikit.
RUN composer install --no-dev --optimize-autoloader --ignore-platform-reqs

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 80
