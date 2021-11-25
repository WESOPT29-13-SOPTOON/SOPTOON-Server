const express = require('express');
const router = express.Router();

router.get('/:recommendComics', require('./recommendGET'));

module.exports = router;