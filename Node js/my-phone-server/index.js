const express = require('express');
const phones = require('./phones.json');
const app = express();
const port = 5000;

app.get('/', (req, res) => {

    res.send('my phone ola ola olao a info commming soon')

})


app.get ('/phones', (req, res) => {
    res.send(phones);
})

app.listen(port,() => {
    console.log(`my phone server sunning on port: ${port}`);
})