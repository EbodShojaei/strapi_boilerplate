'use strict';

exports.up = async function (knex) {
    const exists = await knex.schema.hasTable('users');
    if (!exists) {
        return knex.schema.createTable('users', function (table) {
            table.increments('id').primary();
            table.string('username').notNullable().unique();
            table.string('email').notNullable().unique();
            table.string('password').notNullable();
            table.integer('created_by');
            table.integer('updated_by');
            table.timestamps(true, true);
        });
    }
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};