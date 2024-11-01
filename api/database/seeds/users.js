'use strict';

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').del();

    // Insert seed entries
    return knex('users').insert([
        {
            username: 'john_doe',
            email: 'john@example.com',
            password: 'password123',
            created_by: 1,
            updated_by: 1
        },
        {
            username: 'jane_doe',
            email: 'jane@example.com',
            password: 'password123',
            created_by: 1,
            updated_by: 1
        }
    ]);
};