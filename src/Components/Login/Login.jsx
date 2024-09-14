
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { useState } from "react";


const Login = () => {

    const [user, setUser] = useState(null);

    // google auto login

    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();


    const handleGoogleSignIN = () => {
        signInWithPopup(auth, GoogleProvider)

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

    // github signin

    const handleGithubSIgnin = () => {

        signInWithPopup(auth, GithubProvider)

            .then(result => {
                const Logginuser = result.user;
                console.log(Logginuser);
                setUser(Logginuser);
            })
            .catch(error => {
                console.log('error', error.message);
            })

    }

    return (
        <div>
             

             { user ? <button onClick={handlesignOut} >Sign Out</button>:
             
             <div>
                <button onClick={handleGoogleSignIN} >Google Login</button>
                <button onClick={handleGithubSIgnin} >Github Login</button>
             </div>

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