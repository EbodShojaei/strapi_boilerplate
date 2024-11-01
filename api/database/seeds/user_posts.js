'use strict';

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('user_posts').del();

    // Insert seed entries
    return knex('user_posts').insert([
        {
            user_id: 1,
            post_id: 1
        },
        {
            user_id: 2,
            post_id: 2
        }
    ]);
};