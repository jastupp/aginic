// const { pool } = require('../mysql/MySQLConnect');
const { connection } = require('../mysql/MySQLConnect');

const addTest = (data) => {
    //console.log('DATA = ', data);
    const QUERY = 'INSERT INTO ServerTasks SET ?';
    connection.query(QUERY, data, (error, result) => {
        error && console.log(error);
        //console.log(result);
    });
}

const getTests = async () => {
    //console.log('in getTests');
    const QUERY = 'SELECT URL, state from ServerTasks'
    return await new Promise((resolve, reject) => {
        connection.query(QUERY, (error, data ) => {
            error && reject(error)
            error || resolve(JSON.parse(JSON.stringify(data)));
        });
    });
}

module.exports = {
    addTest,
    getTests
}