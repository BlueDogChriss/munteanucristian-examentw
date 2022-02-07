const db = require('../config/db');
const sequelize = require('sequelize');

const video = db.define(
    "video",
    {
        description: {
            type: sequelize.STRING,
            validate:{len:[5, 300],},
        },
        title: {
            type: sequelize.STRING,
            validate: {len: [5, 200],},
          },
          url: {
            type: sequelize.STRING,
          },
    },
);

module.exports = video;