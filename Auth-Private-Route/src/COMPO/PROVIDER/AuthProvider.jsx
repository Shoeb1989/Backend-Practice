import PropTypes from 'prop-types';
import  { Children, createContext } from 'react';


export  const AuthContex = createContext(null);

const AuthProvider = ({children}) => {

    const Authinfo = { name: 'shoeb yo sikder pappu'}

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


