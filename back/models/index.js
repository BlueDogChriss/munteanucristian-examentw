const video = require("./video");
const favoriteList = require("./favoriteList");

favoriteList.hasMany(video,{
    foreignKey: "favoriteListId",
    targetKey: "id",
});

video.belongsTo(favoriteList,{
    foreignKey: "favoriteListId",
    targetKey: "id",
});

module.exports ={
    video,
    favoriteList,
};