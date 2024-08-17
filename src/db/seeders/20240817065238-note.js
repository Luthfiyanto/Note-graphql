"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        id: "1",
        title: "Catatan Pertama",
        body: "Ini adalah catatan pertama saya",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        title: "Catatan Kedua",
        body: "Ini adalah catatan kedua saya",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "3",
        title: "Catatan Ketiga",
        body: "Ini adalah catatan ketiga saya",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "4",
        title: "Catatan Keempat",
        body: "Ini adalah catatan keempat saya",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "5",
        title: "Catatan Kelima",
        body: "Ini adalah catatan kelima saya",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Notes", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Notes", null, {});
  },
};
