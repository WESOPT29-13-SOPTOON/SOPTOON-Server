const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const writeComment = async(client,user_Id,nickname,comment) => {
    const{ rows } = await client.query(
        `INSERT INTO comment 
        (user_Id,nickname,comment)
        VALUES
        ($1,$2,$3)
        RETURNING *
        `,
        [user_Id,nickname,comment],
    );
    return convertSnakeToCamel.keysToCamel(rows);
}

module.exports= {writeComment};
