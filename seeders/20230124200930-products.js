'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      sku: 'STR0001',
      name: 'Three-lobed fidget spinner',
      description: 'A fidget spinner is a toy that consists of a ball bearing in the center of a multi-lobed (typically two or three) flat structure made from metal or plastic designed to spin along its axis with pressure. Fidget spinners became trending toys in 2017, although similar devices had been invented as early as 1993.[1]',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Fidget_spinner_red%2C_cropped.jpg/1280px-Fidget_spinner_red%2C_cropped.jpg',
      isPublished: true,
      price: 12.95,
      weight: 0.1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      sku: 'STR0002',
      name: 'World-map stress ball',
      description: 'A stress ball or hand exercise ball is a malleable toy, usually not more than 7 cm in diameter, which is squeezed in the hand and manipulated by the fingers, ostensibly to relieve stress and muscle tension or to exercise the muscles of the hand. Patrick Hummel is widely understood to have created the stress ball in central Indiana in the mid-1980s.',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Earth_globe_stress_ball.jpg/220px-Earth_globe_stress_ball.jpg',
      isPublished: true,
      price: 4.99,
      weight: 0.05,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      sku: 'STR0003',
      name: 'Metallic slinky',
      description: 'The Slinky is a precompressed[clarification needed] helical spring toy invented by Richard James in the early 1940s. It can perform a number of tricks, including travelling down a flight of steps end-over-end as it stretches and re-forms itself with the aid of gravity and its own momentum, or appear to levitate for a period of time after it has been dropped. These interesting characteristics have contributed to its success as a toy in its home country of the United States, resulting in many popular toys with slinky components in a wide range of countries.',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/2006-02-04_Metal_spiral.jpg/200px-2006-02-04_Metal_spiral.jpg',
      isPublished: true,
      price: 15.45,
      weight: 0.2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});
  },

  async down(queryInterface, Sequelize) {
  }
};
