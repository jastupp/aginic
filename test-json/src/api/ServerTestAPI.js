const { pool } = require('../mysql/MySQLConnect');
const Query = require('../mysql/Query');

/**
 * Add a test object into the database
 *
 * @param data
 * @returns {Promise<>}
 */
const addTest = async (data) => {
    return await new Promise((resolve, reject) => {
        pool.query(Query.ADD_TEST, data, (error, data) => {
            error && reject(error);
            error || resolve(data)
        });
    });
}

/**
 * Gets the tests from the database
 *
 * @returns {Promise<>}
 */
const getTests = async () => {
    return await new Promise((resolve, reject) => {
        pool.query(Query.GET_TESTS, (error, data) => {
            error && reject(error)
            error || resolve(JSON.parse(JSON.stringify(data)));
        });
    });
}

module.exports = {
    addTest,
    getTests
}