module.exports = {
    attributes: {
        username: {
            type: 'string',
            required: true,
            unique: true,
        },
        email: {
            type: 'email',
            required: true,
            unique: true,
        },
        password: {
            type: 'password',
            required: true,
        },
        is_active: {
            type: 'boolean',
            default: true,
        },
        posts: {
            via: 'users',
            collection: 'post',
            through: 'user-posts',
        },
    },
};