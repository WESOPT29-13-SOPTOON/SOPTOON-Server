const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const recommendComics = async(client) => {
    const{ rows } = await client.query(
        `SELECT *
         FROM "webtoon" 
        `,
    );
    return convertSnakeToCamel.keysToCamel(rows);
}
module.exports = {recommendComics};
