const express = require('express');
const router = express.Router();

router.get('/recommend', require('./recommendGET'));

module.exports = router;