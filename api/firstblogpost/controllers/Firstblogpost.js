'use strict';

/**
 * Firstblogpost.js controller
 *
 * @description: A set of functions called "actions" for managing `Firstblogpost`.
 */

module.exports = {

  /**
   * Retrieve firstblogpost records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.firstblogpost.search(ctx.query);
    } else {
      return strapi.services.firstblogpost.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a firstblogpost record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.firstblogpost.fetch(ctx.params);
  },

  /**
   * Count firstblogpost records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.firstblogpost.count(ctx.query);
  },

  /**
   * Create a/an firstblogpost record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.firstblogpost.add(ctx.request.body);
  },

  /**
   * Update a/an firstblogpost record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.firstblogpost.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an firstblogpost record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.firstblogpost.remove(ctx.params);
  }
};
