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
laracon:
	docker-compose exec main bash -c "$$args"
