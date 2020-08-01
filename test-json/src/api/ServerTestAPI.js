const { pool } = require('../mysql/MySQLConnect');

const addTest = (data) => {
    const QUERY = 'INSERT INTO ServerTasks SET ?';
    pool.query(QUERY, data, (error, result) => {
        error && console.log(error);
        console.log(result);
    });
}

const getTests = async () => {
    console.log('in getTests');
    const QUERY = 'SELECT URL, state from ServerTasks'
    let results = await pool.query(QUERY);
    console.log("getTests = ", results);
}

module.exports = {
    addTest,
    getTests
}