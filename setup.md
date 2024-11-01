# Setup

```bashrc
# Start development environment
make setup

# Access phpMyAdmin
# Open http://localhost:8080 in your browser

# Set up production environment variables
cp .env.prod.example .env.prod
# Edit .env.prod with your secure passwords

# Build and start production containers
make prod-build
make prod-up

# Build and start containers

npm run docker:build
npm run docker:up

# Run migrations and seeds

npm run setup

# View logs

npm run docker:logs

# Access MySQL shell

npm run docker:mysql

# Access Strapi container shell

npm run docker:shell

# Stop containers

npm run docker:down

## Resetting the project
# Clean up Docker
docker compose down -v
docker system prune -af
docker volume prune -f

# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Install dependencies
npm install

# Start the setup
make setup
```
