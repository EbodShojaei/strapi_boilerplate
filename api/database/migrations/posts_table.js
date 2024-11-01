'use strict';

exports.up = async function (knex) {
    const exists = await knex.schema.hasTable('posts');
    if (!exists) {
        return knex.schema.createTable('posts', function (table) {
            table.increments('id').primary();
            table.string('title');
            table.text('content', 'longtext');
            table.text('tags', 'longtext');
            table.integer('author');
            table.datetime('published_at');
            table.integer('created_by');
            table.integer('updated_by');
            table.timestamps(true, true);
        });
    }
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('posts');
};