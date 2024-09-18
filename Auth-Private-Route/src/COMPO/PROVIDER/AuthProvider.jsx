import PropTypes from 'prop-types';
import  { Children, createContext, useEffect, useState } from 'react';
import auth from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export  const AuthContex = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword (auth, email, password);
  }


  const SignInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
   


  const logOut = () => {
    setLoading(true)
    return signOut(auth);
}

  useEffect( () => {

    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false);
        console.log('observing current user inside effer', currentUser)
    });

    return () => {
        unSubscribe();
    } 

  }, [])




    const Authinfo =  {user, loading, createUser, SignInUser,  logOut}

   
    return (
        <AuthContex.Provider value={Authinfo}>

            {children}
            
        </AuthContex.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}


