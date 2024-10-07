const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
 
// middleware 
app.use(cors());
app.use(express.json); // for post value


app.get('/', (req, res) => {
    res.send('Simple crud is running')
})

app.listen(port, () => {
    console.log(`Simple curd on port, ${port}`)
})