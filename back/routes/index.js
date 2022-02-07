const express = require("express");
const router = express.Router();
const videoRouter = require("./video");
const favoriteRouter = require("./favoriteList");
const otherRouter = require("./other");

router.use("/video", videoRouter);
router.use("/favorite", favoriteRouter);
router.use("/", otherRouter);

module.exports = router;