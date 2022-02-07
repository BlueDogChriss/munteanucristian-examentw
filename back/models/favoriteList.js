const db = require('../config/db');
const sequelize = require('sequelize');
const video = require('./video');

const favoriteList = db.define('favorite_list',{
    description: {
        type: sequelize.STRING,
        allownull: false,
        validate:{
            len:  [3, 300],
        }
    },
});

favoriteList.hasMany(video);
video.belongsTo(favoriteList);

module.exports = favoriteList;