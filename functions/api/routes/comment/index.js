const express = require('express');
const router = express.Router();

router.get('/:webtoonId', require('./commentGET'));
router.post('/:comment',require('./wirteCommentPOST'));

module.exports = router;