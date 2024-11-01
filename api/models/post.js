module.exports = {
    attributes: {
        title: {
            type: 'string',
            required: true,
        },
        content: {
            type: 'text',
            required: true,
        },
        tags: {
            type: 'json',
        },
        is_published: {
            type: 'boolean',
            default: false,
        },
        users: {
            via: 'posts',
            collection: 'user',
            through: 'user-posts',
        },
    },
};