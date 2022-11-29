FROM php:7.4-apache

LABEL maintainer="rizwan@celestialsys.com"

ARG PackageName
ARG PackageVersion
ARG NexusUser
ARG NexusPassword
ARG Cake3SDK
ARG Cake3Branch


WORKDIR /var/www/html/
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

RUN apt-get update \
    && apt-get install -y zip unzip wget zlib1g-dev libzip-dev \
    && apt-get -y autoremove \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN apt-get update && apt-get install -y libmagickwand-dev libicu-dev zlib1g-dev libicu-dev g++ --no-install-recommends && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install zip \
    && docker-php-ext-install pcntl \
    && docker-php-ext-install bcmath \
    && docker-php-ext-configure intl \
    && docker-php-ext-install intl \
    && docker-php-ext-install mysqli pdo pdo_mysql \
    && docker-php-ext-enable pdo_mysql

COPY . /var/www/html/
RUN composer install

WORKDIR /tmp
RUN wget --no-check-certificate --user ${NexusUser}  --password ${NexusPassword} https://nexus.tools.froala-infra.com/repository/Froala-raw-repo/${Cake3SDK}/${Cake3SDK}-${Cake3Branch}-${PackageVersion}.zip 
RUN     unzip ${Cake3SDK}-${Cake3Branch}-${PackageVersion}.zip -d cake3-sdk 
RUN     /bin/cp -fr cake3-sdk/*  /var/www/html/vendor/froala/wysiwyg-cake/

WORKDIR /var/www/html/
CMD ["bin/cake", "server", "--host", "0.0.0.0", "-p", "8765"]
