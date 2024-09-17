import React, { useContext } from 'react';
import { AuthContex } from '../PROVIDER/AuthProvider';

const Home = () => {

    const authinfo = useContext(AuthContex);
    console.log(authinfo)

    
    
    return (
        <div>
            <h2 className="text-3xl">This is home : {authinfo.name}</h2>
        </div>
    );
};

export default Home;