env:
	cp main/.env.example main/.env
setup:
	@make build
	@make up
	@make vendor
	@make config-cache
	@make optimize-clear
	@make key
	@make migrate
	@make seed
	@make storage-link
build:
	docker-compose build --no-cache --force-rm
up:
	docker-compose up -d
stop:
	docker-compose stop
vendor:
	docker-compose exec main bash -c "composer install"
config-cache:
	docker-compose exec main bash -c "php artisan config:cache"
optimize-clear:
	docker-compose exec main bash -c "php artisan optimize:clear"
key:
	docker-compose exec main bash -c "php artisan key:generate"
migrate:
	docker-compose exec main bash -c "php artisan migrate"
seed:
	docker-compose exec main bash -c "php artisan db:seed"
storage-link:
	docker-compose exec main bash -c "php artisan storage:link"
laracon:
	docker-compose exec main bash -c "$$args"
reacon:
	docker-compose exec node sh -c "$$args"
