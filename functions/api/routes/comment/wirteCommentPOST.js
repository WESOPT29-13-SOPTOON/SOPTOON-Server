const functions = require('firebase-functions');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { writecommentDB } = require('../../../db');

module.exports =async (req,res) => {
    const { user_id,nickname,comment } = req.body;
    // request body가 잘못됐을 때
  if (!user_id || !nickname || !comment) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }
   
     let client;

     try {
        //db/db.js 에 정의한 connect 함수를 통해 connection pool에서 connection을 빌려옵니다.
        client =await db.connect(req);
        // 빌려온 connection을 사용해 우리가 db/writecomment.js 에서 미리정의한 SQL 쿼리문을 날려줍니다.
        const write = await writecommentDB.writeComment(client,user_id,nickname,comment);
        // 성공적으로  가져왔다면, response를 보내줍니다. 
        res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.WRITE_COMMENT_SUCCESS,write));
    
    }
    catch(error){
        functions.logger.error(`[ERROR] [${req.method.toUpperCase()}] ${req.originalUrl}`, `[CONTENT] ${error}`);
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));

    }
    finally{
        client.release();
    }
}