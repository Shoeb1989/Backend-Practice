
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null);

    // google auto login

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const handleGoogleSignIN = () => {
        signInWithPopup(auth, provider)

            .then(result => {
                const loginUSer = result.user;
                console.log(loginUSer);
                setUser(loginUSer);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    // signout function

    const handlesignOut = () => {
  signOut(auth)
  .then (result => {
    console.log(result);
    setUser(null);
  })

  .catch (error => {
    console.log(error);
  })
    }
    return (
        <div>
             

             { user ? <button onClick={handlesignOut} >Sign Out</button>:
            <button onClick={handleGoogleSignIN} >Google Login</button>
    }
            { user && <div>
                <h3>User:{user.displayName}</h3>
                <p>Email:{user.email}</p>
                <img src={user.photoURL} alt="" />

            </div>
            }

        </div>
    );
};

export default Login;