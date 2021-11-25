const express = require('express');
const router = express.Router();

router.get('/:webtoonId', require('./commentGET'));
router.post('/:webtoonId', require('./commentPOST'));
router.get('/:webtoonId/best', require('./bestCommentGET'));

module.exports = router;