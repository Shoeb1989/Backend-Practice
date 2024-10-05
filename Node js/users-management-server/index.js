const express = require ('express')
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {id:1, name:'shoeb', email: 'shoeb@gmail.com'},
    {id:2, name:'pappu', email: 'pappu@gmail.com'},
    {id:3, name:'pouneh', email: 'pouneh@gmail.com'},
]

app.get('/', (req, res) =>  {
    res.send('user management server is live')
})

app.get('/users', (req, res) =>  {
    res.send(users);
})

  app.listen(port, () => {
    console.log(`server is running on Port: ${port}`);
  })