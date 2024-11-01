.PHONY: setup up down build logs shell mysql restart migrate seed backup restore clean

setup:
	docker compose down -v
	docker compose build --no-cache
	docker compose up -d
	@echo "Waiting for services to be ready..."
	@sleep 45
	@echo "Running migrations..."
	docker compose exec strapi npm run migrate
	@echo "Running seeds..."
	docker compose exec strapi npm run seed

up:
	docker compose up -d

down:
	docker compose down -v

build:
	docker compose build --no-cache

logs:
	docker compose logs -f

shell:
	docker compose exec strapi sh

mysql:
	docker compose exec mysql mysql -u strapi -pstrapi_password test_cog

restart:
	docker compose restart

migrate:
	docker compose exec strapi npm run migrate

seed:
	docker compose exec strapi npm run seed

backup:
	@mkdir -p backups
	docker compose exec mysql mysqldump -u root -proot_password test_cog > backups/backup-$(shell date +%Y%m%d-%H%M%S).sql

restore:
	@if [ -z "$(BACKUP)" ]; then \
		echo "Error: Please specify the backup file with BACKUP=filename"; \
		exit 1; \
	fi
	docker compose exec -T mysql mysql -u root -proot_password test_cog < $(BACKUP)

clean:
	docker compose down -v
	docker system prune -af
	docker volume prune -f
	rm -rf node_modules package-lock.json