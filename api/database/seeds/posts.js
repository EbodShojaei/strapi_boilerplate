'use strict';

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('posts').del();

    const now = new Date();

    // Insert seed entries
    return knex('posts').insert([
        {
            title: 'First Post',
            content: 'This is the first post content',
            tags: JSON.stringify(['technology', 'programming']),
            published_at: now,
            created_by: 1,
            updated_by: 1
        },
        {
            title: 'Second Post',
            content: 'This is the second post content',
            tags: JSON.stringify(['design', 'ui/ux']),
            published_at: now,
            created_by: 1,
            updated_by: 1
        }
    ]);
};