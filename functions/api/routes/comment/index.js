const express = require('express');
const router = express.Router();

router.get('/:webtoonId', require('./commentGET'));

module.exports = router;