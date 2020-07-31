const mysql = require('mysql');

const Connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'aginic',
    password : 'JustTmp_Aginic1',
    database : 'aginic'
});

module.exports = {
    Connection
}
