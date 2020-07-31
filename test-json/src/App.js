const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/getTests', (req, res) => {
    console.log('get /abc called');
    res.send("Hello");
});

app.listen(3001, () => {
    console.log('Listening on port 3001');
});
