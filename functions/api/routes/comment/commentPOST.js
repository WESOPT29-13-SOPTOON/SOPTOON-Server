const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { commentDB } = require('../../../db');

module.exports = async (req, res) => {
    const { webtoonId, email, comment } = req.body;
    if (!email || !comment || !webtoonId) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    let client;
    try {
        client = await db.connect(req);
        const write = await commentDB.writeComment(client, email, comment, webtoonId);
        // 성공적으로  가져왔다면, response를 보내줍니다. 
        res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.WRITE_COMMENT_SUCCESS, write));
    } catch (error) {
        functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    } finally {
        client.release();
    }
};