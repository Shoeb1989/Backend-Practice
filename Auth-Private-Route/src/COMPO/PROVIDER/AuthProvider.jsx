import PropTypes from 'prop-types';
import  { Children, createContext, useState } from 'react';
import auth from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword } from "firebase/auth";

export  const AuthContex = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword (auth, email, password);
  }



    const Authinfo = {user, createUser}

   
    return (
        <AuthContex.Provider value={Authinfo}>

            {children}
            
        </AuthContex.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    Children: PropTypes.node
}


