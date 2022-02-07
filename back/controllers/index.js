const databaseController = require("./db");
const favoriteController = require("./favoriteList");
const videoController = require("./video");

const controllers = {
    db: databaseController,
    video: videoController,
    favorite: favoriteController,
};

module.exports = controllers;