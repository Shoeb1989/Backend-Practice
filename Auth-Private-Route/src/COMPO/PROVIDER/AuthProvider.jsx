import PropTypes from 'prop-types';
import  { Children, createContext } from 'react';


export  const AuthContex = createContext(null);

const AuthProvider = ({Children}) => {

    const Authinfo = { name: 'shoeb yo sikder pappu'}

    return (
        <AuthContex.Provider value={Authinfo}>

            {Children}
            
        </AuthContex.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    Children: PropTypes.node
}


