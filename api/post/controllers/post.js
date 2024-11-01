'use strict';

module.exports = {
    async find(ctx) {
        const posts = await strapi.services.post.find(ctx.query);
        return posts;
    },

    async findOne(ctx) {
        const { id } = ctx.params;
        const post = await strapi.services.post.findOne({ id });
        return post;
    },

    async create(ctx) {
        const post = await strapi.services.post.create(ctx.request.body);
        return post;
    },

    async update(ctx) {
        const { id } = ctx.params;
        const post = await strapi.services.post.update({ id }, ctx.request.body);
        return post;
    },

    async delete(ctx) {
        const { id } = ctx.params;
        const post = await strapi.services.post.delete({ id });
        return post;
    }
};