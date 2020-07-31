const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'aginic',
    password : 'JustTmp_Aginic1',
    database : 'aginic'
});

module.exports = {
    connection
}
