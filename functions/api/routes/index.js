const express = require("express");
const router = express.Router();

router.use('/comment', require('./comment'));

module.exports = router;