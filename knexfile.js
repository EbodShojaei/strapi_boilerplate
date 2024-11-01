module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: process.env.DATABASE_HOST || 'mysql',
            port: parseInt(process.env.DATABASE_PORT) || 3306,
            database: process.env.DATABASE_NAME || 'test_cog',
            user: process.env.DATABASE_USERNAME || 'strapi',
            password: process.env.DATABASE_PASSWORD || 'strapi_password',
        },
        migrations: {
            directory: './api/database/migrations',
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: './api/database/seeds'
        }
    }
};