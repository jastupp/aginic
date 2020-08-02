const { pool } = require('./mysql/MySQLConnect');
const State = require('./mysql/State');
const { pendingTo, waitingToPending, minWaiting } = require('./mysql/Queries');
const axios = require('axios');

const main = async () => {
    let row = await minWaiting();
    while (row) {
        runJob(row);
        row = await minWaiting();
    }
    setTimeout(main, 30000);
}

const checkURL = async (url) => {
    let tries = 3;
    let success = false;
    while (tries-- > 0 && !success) {
        try {
            const resp = await axios.get(`http://${url}`);
            success = success || resp.status === 200;
        } catch {}
    }
    console.log("Check URL = ", success);
    return success;
}

const runJob = async (row) => {

    pool.getConnection((error, connection) => {
        connection.beginTransaction(async (error) => {
            if (!error) {
                try {
                    //let row = await minWaiting();
                    if (row && await waitingToPending(connection, [row.id])) {
                        const state = await checkURL(row.URL) ? State.SUCCESS : State.FAILURE;
                        result = await pendingTo(connection, [row.id, state]);
                        result ? connection.commit() : connection.rollback();
                    } else {
                        connection.rollback();
                    }
                } catch (error) {
                    connection.rollback();
                }
            }
        });
        connection.release();
    });
};


main();
//console.log(async () => await checkURL("http://google.com"));