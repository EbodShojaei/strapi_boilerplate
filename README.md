# Test-Cog Strapi MySQL Project

A development setup for Strapi with MySQL, using Docker for containerization and including migration and seeding capabilities.

## Prerequisites

- Docker and Docker Compose
- Node.js
- npm or yarn
- Git

## Quick Start

1. Clone the repository:

```bash
cd test-cog
```

2. Install dependencies:

```bash
npm install
```

3. Start the development environment:

```bash
make setup
```

This will:

- Build and start all Docker containers
- Run database migrations
- Seed the database with test data

## Development Environment

### Available Commands

```bash
# Start the development environment
make setup

# Start containers
make up

# Stop containers
make down

# View logs
make logs

# Access Strapi container shell
make shell

# Access MySQL shell
make mysql

# Restart containers
make restart

# Run migrations
make migrate

# Run seeds
make seed
```

### Accessing Services

- Strapi Admin: <http://localhost:1337/admin>
- phpMyAdmin: <http://localhost:8080>
  - Server: mysql
  - Username: strapi
  - Password: strapi_password

## Database Migrations

Create a new migration:

```bash
npm run migrate:make migration_name
```

Run migrations:

```bash
make migrate
```

Rollback migrations:

```bash
npm run migrate:rollback
```

## Database Seeding

Create a new seed file:

```bash
npm run seed:make seed_name
```

Run seeds:

```bash
make seed
```

## Docker Configuration

### Development Environment

- Strapi: Node.js 14 Alpine
- MySQL: 8.0
- phpMyAdmin: Latest

Default ports:

- Strapi: 1337
- MySQL: 3306
- phpMyAdmin: 8080

## Environment Variables

Create a `.env` file in the root directory:

```env
HOST=0.0.0.0
PORT=1337
DATABASE_HOST=mysql
DATABASE_PORT=3306
DATABASE_NAME=test_cog
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi_password
```

## Common Issues and Solutions

1. MySQL connection issues:

```bash
# Check MySQL container status
docker compose ps

# View MySQL logs
docker compose logs mysql
```

2. Strapi startup issues:

```bash
# Check Strapi logs
docker compose logs strapi

# Access Strapi container
make shell
```

3. Migration/Seed failures:

```bash
# Reset database and run migrations again
make migrate
make seed
```

## Development Workflow

1. Make changes to your code
2. Test locally using the development environment
3. Create migrations for database changes
4. Update seeds if necessary
5. Commit your changes
6. Push to repository

## Testing

To run tests:

```bash
npm run test
```

## Useful Docker Commands

```bash
# View running containers
docker compose ps

# View container logs
docker compose logs -f [service_name]

# Rebuild containers
docker compose build --no-cache

# Remove all containers and volumes
docker compose down -v

# Clean up Docker system
docker system prune -af
```

## Database Backup and Restore

Backup database:

```bash
make backup
```

Restore database:

```bash
make restore
```

## Maintenance

Regular maintenance tasks:

1. Update dependencies
2. Backup database
3. Check logs for errors
4. Monitor disk space
5. Update Docker images

## Troubleshooting

1. Container won't start:
   - Check logs: `docker compose logs [service_name]`
   - Verify environment variables
   - Check port conflicts

2. Database connection issues:
   - Verify MySQL is running: `docker compose ps`
   - Check database credentials
   - Ensure migrations have run

3. Permission issues:
   - Check file ownership in containers
   - Verify volume permissions

## Additional Resources

- [Strapi Documentation](https://strapi.io/documentation)
- [Docker Documentation](https://docs.docker.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)

## Acknowledgements

AI used for reviewing and testing this project.
