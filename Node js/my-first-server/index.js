const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('hello world');


})

app.get('/data', (req, res) => {
    res.send('comming soon');


})

app.listen(port, () => {
    console.log(`my first server is runnning on port: ${port}`);
}
)