const express = require('express');
const router  = express.Router();
const databaseController = require('../controllers').db;

router.get("reset", databaseController);

module.exports  = router;