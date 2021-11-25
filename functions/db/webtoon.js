const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getRecommendWebtoons = async (client) => {
    const { rows } = await client.query(
        `SELECT *
         FROM "webtoon"
         ORDER BY webtoon_id
        `,
    );
    return convertSnakeToCamel.keysToCamel(rows);
}
module.exports = { getRecommendWebtoons };