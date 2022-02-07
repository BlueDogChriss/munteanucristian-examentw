const express = require("express");
const router = express.Router();
const videoRouter = require("./video");
const favoriteRouter = require("./favoriteList");
const databaseRouter = router("./db");

router.use("/video", videoRouter);
router.use("/favorite", favoriteRouter);
router.use("/", databaseRouter);

module.exports = router;