const express = require('express');
const router = express.Router();
const DatabaseController = require('../controllers/database');

router.put('/', DatabaseController.Set);

module.exports = router;
