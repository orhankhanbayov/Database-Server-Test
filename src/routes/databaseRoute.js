const express = require('express');
const router = express.Router();
const DatabaseController = require('../controllers/database');

router.put('/set', DatabaseController.Set);
router.get('/get', DatabaseController.Get);

module.exports = router;
