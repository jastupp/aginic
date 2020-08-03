const mysql = require('mysql');
const { MYSQL_HOST, MYSQL_USERNAME,
        MYSQL_PASSWORD, MYSQL_DATABASE } = require('../env');

const pool = mysql.createPool({
    connectionLimit : 5,
    host     : MYSQL_HOST(),
    user     : MYSQL_USERNAME(),
    password : MYSQL_PASSWORD(),
    database : MYSQL_DATABASE()
});

module.exports = {
    pool
}
