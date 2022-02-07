const video = require("./video");
const favoriteList = require("./favoriteList");

favoriteList.hasMany(video);
video.belongsTo(favoriteList);

module.exports ={
    Video: video,
    FavoriteList: favoriteList,
};