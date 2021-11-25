const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getAllComments = async (client, webtoonId) => {
    const { rows } = await client.query(
        `
        SELECT comment_id, nickname, email, comment, created_at, like_count
        FROM "comment" c 
        JOIN "user" u ON c.user_id = u.user_id
        WHERE webtoon_id = $1
        ORDER BY created_at DESC
        `, [webtoonId]
    );
    return convertSnakeToCamel.keysToCamel(rows);
};

module.exports = {
    getAllComments
};