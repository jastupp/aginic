const express = require('express');
const cors = require('cors');
const app = express();
const { addTest, getTests } = require('./api/ServerTestAPI');
const { LISTEN_PORT } = require('./env');

app.use(cors());
app.use(express.json());

app.get('/test', async (req, res) => {
    const tests = await getTests();
    res.json(tests);
});

app.post('/test', async (req, res) => {
    const result = await addTest(req.body);
    res.sendStatus(result.insertId > 0 ? 201 : 403);
});

const PORT = LISTEN_PORT() || 3001;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
