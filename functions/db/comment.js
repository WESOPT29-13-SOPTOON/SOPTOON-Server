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

const getBestComments = async (client, webtoonId) => {
    const { rows } = await client.query(
        `
        SELECT comment_id, nickname, email, comment, created_at, like_count
        FROM "comment" c 
        JOIN "user" u ON c.user_id = u.user_id
        WHERE webtoon_id = $1
        ORDER BY like_count DESC
        `, [webtoonId]
    );
    return convertSnakeToCamel.keysToCamel(rows);
}
const writeComment = async (client, email, comment, webtoonId) => {
    const result = await client.query(
        `
        SELECT user_id
        FROM "user" u
        WHERE email = $1
        `, [email]
    );
    const { rows } = await client.query(
        `INSERT INTO comment 
        (user_id, comment, webtoon_id, like_count)
        VALUES
        ($1,$2,$3,$4)
        RETURNING *
        `,
        [result.rows[0].user_id, comment, webtoonId, 0],
    );
    return convertSnakeToCamel.keysToCamel(rows);
};
module.exports = {
    getAllComments,
    getBestComments,
    writeComment
};