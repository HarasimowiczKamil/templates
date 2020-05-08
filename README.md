## Client generator

### Start

```bash
docker-compose exec php composer install
docker-compose exec php yarn install
```

### Webpack

```bash
docker-compose exec php yarn dev # OR
docker-compose exec php yarn watch
```

### Endpoints

It is required to add the entry to `/etc/hosts` (windows: `%SystemRoot%\system32\drivers\etc\hosts`):

```text
127.0.0.1   symfony.local
```

* [http://symfony.local](http://symfony.local)
* [http://symfony.local/api](http://symfony.local/api)
* [local kibana](http://symfony.local:81)

### Generate schema

```bash
docker-compose exec php bin/console api:openapi:export --yaml > openapi-client.yaml
```

### Generate client

See more https://openapi-generator.tech/

```bash
docker run --rm -v PROJECT_PATH:/local openapitools/openapi-generator-cli generate -i /local/openapi-client.yaml -g php -o /local/client-php
docker run --rm -v PROJECT_PATH:/local openapitools/openapi-generator-cli generate -i /local/openapi-client.yaml -g php-symfony -o /local/client-php-symfony
```