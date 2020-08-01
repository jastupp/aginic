const { pool } = require('./mysql/MySQLConnect');
const State = require('./mysql/State');


const main = () => {
    //const available = check();
    //while()
}

const query = async (query, connection, params = []) =>
    await new Promise((resolve, reject) => {
        connection.query(query, params, (error, result) => {
            error && reject(error);
            error || resolve(JSON.parse(JSON.stringify(result)));
        });
    });

const checkURL = (url) => false;

const runJob = async () => {
    const connection = pool.getConnection((error, connection) => {
        connection.beginTransaction(async (error) => {
            try {
                const minQ = `select id, URL from ServerTasks
                                where id = (select min(id) from ServerTasks)`;
                const minRow = (await query(minQ, connection))[0];
                console.log(minRow);
                    //.catch(error => console.log("Error", error));
                //console.log("Min = ", min);

                const updateStateQ = 'update ServerTasks set state = ? where id = ?';
                let updateResult = await query(updateStateQ, connection, [State.PENDING, minRow.id]);
                console.log(updateResult);

                if(updateResult.affectedRows === 1) {
                    const state = checkURL(minRow.URL) ? State.SUCCESS : State.FAILURE;
                    updateResult = await query(updateStateQ, connection, [state, minRow.id]);
                    updateResult.affectedRows === 1 && connection.commit();
                }

            } catch(error) {
                console.log("Catch block error", error);
            }

        })
    });
};

runJob();
