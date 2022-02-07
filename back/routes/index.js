const express = require('express');
const router = express.Router();
//fav and video router here

const databaseRouter = router("./db");

router.use("/", databaseRouter);

module.exports = router;