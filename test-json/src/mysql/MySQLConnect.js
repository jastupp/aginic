const mysql = require('mysql');
//
// const pool = mysql.createPool({
//     connectionLimit : 5,
//     host     : 'localhost',
//     user     : 'aginic',
//     password : 'JustTmp_Aginic1',
//     database : 'aginic'
// });
//
const connection = mysql.createConnection({
    connectionLimit : 5,
    host     : 'localhost',
    user     : 'aginic',
    password : 'JustTmp_Aginic1',
    database : 'aginic'
});

module.exports = {
    connection
}
