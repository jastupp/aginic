const mysql = require('mysql');

/**
 * Create the connection pool to the DB
 *
 * @type {Pool}
 */
const pool = mysql.createPool({
    connectionLimit : 5,
    host     : 'localhost',
    user     : 'aginic',
    password : 'JustTmp_Aginic1',
    database : 'aginic'
});

module.exports = {
    pool
}
