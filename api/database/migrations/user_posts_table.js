'use strict';

exports.up = async function (knex) {
    const exists = await knex.schema.hasTable('user_posts');
    if (!exists) {
        return knex.schema.createTable('user_posts', function (table) {
            table.increments('id').primary();
            table.integer('user_id').unsigned().notNullable();
            table.integer('post_id').unsigned().notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());

            table.foreign('user_id').references('users.id').onDelete('CASCADE');
            table.foreign('post_id').references('posts.id').onDelete('CASCADE');
            table.unique(['user_id', 'post_id']);
        });
    }
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('user_posts');
};