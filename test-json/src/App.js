//import { addTest } from './api/ServerTestAPI'
const express = require('express');
const cors = require('cors');
const {test} = require('./api/Test');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
    console.log('get /test called');
    res.send("Hello");
});

app.post('/test', (req, res) => {
    console.log('post /test called');
    test();
    //addTest(req.body);
    console.log('Body = ', req.body)
    res.send("Hello POST");
});


app.listen(3001, () => {
    console.log('Listening on port 3001');
});
