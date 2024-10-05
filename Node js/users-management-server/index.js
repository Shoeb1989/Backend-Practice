const express = require ('express')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const users = [
    {id:1, name:'shoeb', email: 'shoeb@gmail.com'},
    {id:2, name:'pappu', email: 'pappu@gmail.com'},
    {id:3, name:'pouneh', email: 'pouneh@gmail.com'},
]

app.get('/', (req, res) =>  {
    res.send('user management server is live')
})

// server site post or api make 

app.post('/users', (req, res) =>  {   
    console.log('post api hitting'); 
    console.log(req.body);
    const Newuser = req.body;
    Newuser.id = users.length + 1;
    users.push(Newuser);
    res.send(Newuser);
})

app.get('/users', (req, res) =>  {
    res.send(users);
})

  app.listen(port, () => {
    console.log(`server is running on Port: ${port}`);
  })