const express = require("express");
const router = express.Router();

router.use('/comment', require('./comment'));
router.use('/webtoon', require('./webtoon'));

module.exports = router;