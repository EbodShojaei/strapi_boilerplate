'use strict';

module.exports = {
    kind: 'collectionType',
    collectionName: 'users',
    info: {
        name: 'user',
        description: ''
    },
    options: {
        draftAndPublish: false,
        timestamps: true
    },
    attributes: {
        username: {
            type: 'string',
            required: true,
            unique: true
        },
        email: {
            type: 'email',
            required: true,
            unique: true
        },
        password: {
            type: 'password',
            required: true
        },
        posts: {
            collection: 'post',
            via: 'author'
        }
    }
};