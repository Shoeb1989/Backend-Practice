
import { useEffect, useState } from 'react'
import './App.css'

function App() {

   const [users, setUsers] = useState([]);


   useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
   },[])

   const handleuser = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const user = {name,email}

      console.log(user);

        
      // give data from server site 

       fetch('http://localhost:5000/users',{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(user)

       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
       })
   }
  
  return (
    <>
      <h1>User Management</h1>

    <form  onSubmit={handleuser}>
      <input type="text" name='name' id='' />
      <br />
      <input type="email" name='email' />
      <br />
      <input type="submit" value="Add User" />
    </form>
      
      <h3>Number Of users : {users.length}</h3>
      <div>
        {
          users.map(user => <p key={user.id} >{user.id} : {user.name} : {user.email}  </p> )
        }
      </div>
     
    </>
  )
}

export default App
