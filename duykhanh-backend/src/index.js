'use strict';
const { faker } = require('@faker-js/faker/locale/vi');
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    for (let i = 0; i < 10; i++) {
      await strapi.entityService.create('api::product.product', {
        data: {
          productName: faker.commerce.productName() +
            faker.word.noun(),
          description: faker.commerce.productDescription() +
            faker.word.noun(),
          price: faker.commerce.price(20000, 100000),
          detail: faker.lorem.paragraph(3),
        }
      });
    }
  },
};
