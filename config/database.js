module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
            settings: {
                client: 'mysql',
                host: env('DATABASE_HOST', 'mysql'),
                port: env.int('DATABASE_PORT', 3306),
                database: env('DATABASE_NAME', 'test_cog'),
                username: env('DATABASE_USERNAME', 'strapi'),
                password: env('DATABASE_PASSWORD', 'strapi_password'),
                ssl: env.bool('DATABASE_SSL', false)
            },
            options: {
                useNullAsDefault: true,
                pool: {
                    min: 0,
                    max: 15,
                    idleTimeoutMillis: 30000,
                    createTimeoutMillis: 30000,
                    acquireTimeoutMillis: 30000
                }
            }
        }
    }
});