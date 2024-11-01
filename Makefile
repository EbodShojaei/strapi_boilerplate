.PHONY: setup up down build logs shell mysql restart migrate seed

migrate:
	@echo "Rolling back migrations..."
	docker compose exec strapi npm run migrate:rollback
	@echo "Running migrations..."
	docker compose exec strapi npm run migrate

seed:
	@echo "Running seeds..."
	docker compose exec strapi npm run seed

setup:
	docker compose down -v
	docker compose build --no-cache
	docker compose up -d
	@echo "Waiting for services to be ready..."
	@sleep 45
	@echo "Installing mysql2..."
	docker compose exec strapi npm install mysql2@2.3.3 --save
	@echo "Setting up database..."
	docker compose exec -T mysql mysql -u strapi -pstrapi_password test_cog -e "SELECT 1"
	@$(MAKE) migrate
	@$(MAKE) seed

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

# Production commands
prod-setup:
	@if [ ! -f .env.prod ]; then \
		echo "Error: .env.prod file not found. Please create it first."; \
		exit 1; \
	fi
	docker compose -f docker-compose.prod.yml down -v
	docker compose -f docker-compose.prod.yml build --no-cache
	docker compose -f docker-compose.prod.yml up -d
	@echo "Waiting for services to be ready..."
	@sleep 45
	docker compose -f docker-compose.prod.yml exec strapi npm run migrate
	docker compose -f docker-compose.prod.yml exec strapi npm run seed

prod-up:
	docker compose -f docker-compose.prod.yml up -d

prod-down:
	docker compose -f docker-compose.prod.yml down

prod-logs:
	docker compose -f docker-compose.prod.yml logs -f

prod-shell:
	docker compose -f docker-compose.prod.yml exec strapi sh

prod-mysql:
	docker compose -f docker-compose.prod.yml exec mysql mysql -u strapi -p${PROD_DB_PASSWORD} test_cog

prod-backup:
	@mkdir -p backups
	docker compose -f docker-compose.prod.yml exec mysql mysqldump -u strapi -p${PROD_DB_PASSWORD} test_cog > backups/backup-$(shell date +%Y%m%d-%H%M%S).sql

prod-restore:
	@if [ -z "$(BACKUP)" ]; then \
		echo "Error: Please specify the backup file with BACKUP=filename"; \
		exit 1; \
	fi
	docker compose -f docker-compose.prod.yml exec -T mysql mysql -u strapi -p${PROD_DB_PASSWORD} test_cog < $(BACKUP)