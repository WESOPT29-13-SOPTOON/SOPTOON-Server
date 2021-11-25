const express = require("express");
const router = express.Router();

router.get('/:comment', require('./comment'));

module.exports = router;