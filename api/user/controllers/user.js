'use strict';

module.exports = {
    async find(ctx) {
        const users = await strapi.services.user.find(ctx.query);
        return users;
    },

    async findOne(ctx) {
        const { id } = ctx.params;
        const user = await strapi.services.user.findOne({ id });
        return user;
    },

    async create(ctx) {
        const user = await strapi.services.user.create(ctx.request.body);
        return user;
    },

    async update(ctx) {
        const { id } = ctx.params;
        const user = await strapi.services.user.update({ id }, ctx.request.body);
        return user;
    },

    async delete(ctx) {
        const { id } = ctx.params;
        const user = await strapi.services.user.delete({ id });
        return user;
    }
};