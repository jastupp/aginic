const connection = require('../mysql/MySQLConnect');

const addTest = (data) => {
    const QUERY = 'INSERT INTO ServerTasks SET ?';
    connection.query(QUERY, data, (error, result) => {
        error && console.log(error);
        console.log(result);
    });
}

module.exports = {
    addTest
}