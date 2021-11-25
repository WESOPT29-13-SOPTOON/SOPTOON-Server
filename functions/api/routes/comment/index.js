const express = require('express');
const router = express.Router();

router.post('/', require('./commentPOST'));
router.get('/:webtoonId', require('./commentGET'));
router.get('/:webtoonId/best', require('./bestCommentGET'));

module.exports = router;