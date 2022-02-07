const Sequelize = require("sequelize");

const db = new Sequelize("examentwMC", "root", "",{
    dialect: "mysql",
    host:"localhost",
    define: {
        timestamps: true,
    },
});

module.exports = db;