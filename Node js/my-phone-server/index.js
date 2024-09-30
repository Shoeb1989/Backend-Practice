const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {

    res.send('my phone ola info commming soon')

})

app.listen(port,() => {
    console.log(`my phone server sunning on port: ${port}`);
})