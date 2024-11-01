CREATE DATABASE IF NOT EXISTS test_cog;
USE test_cog;

-- Grant privileges to strapi user
GRANT ALL PRIVILEGES ON test_cog.* TO 'strapi'@'%';
FLUSH PRIVILEGES;