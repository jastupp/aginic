
const Query = {
    GET_TESTS: 'SELECT URL, state from ServerTasks order by id desc',
    ADD_TEST:  'INSERT INTO ServerTasks SET ?'
}

module.exports = Query;