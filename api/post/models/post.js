'use strict';

module.exports = {
    kind: 'collectionType',
    collectionName: 'posts',
    info: {
        name: 'post',
        description: ''
    },
    options: {
        draftAndPublish: true,
    },
    attributes: {
        title: {
            type: 'string',
            required: true
        },
        content: {
            type: 'text',
            required: true
        },
        tags: {
            type: 'json'
        },
        author: {
            model: 'user',
            via: 'posts'
        }
    }
};