const { pool } = require('../mysql/MySQLConnect');

const addTest = async (data) => {
    const QUERY = 'INSERT INTO ServerTasks SET ?';
    return await new Promise((resolve, reject) => {
        pool.query(QUERY, data, (error, data) => {
            error && reject(error);
            error || resolve(data)
        });
    });
}

const getTests = async () => {
    const QUERY = 'SELECT URL, state from ServerTasks order by id desc'
    return await new Promise((resolve, reject) => {
        pool.query(QUERY, (error, data) => {
            error && reject(error)
            error || resolve(JSON.parse(JSON.stringify(data)));
        });
    });
}

module.exports = {
    addTest,
    getTests
}