import React from 'react';

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
    }


    return (
        <div className=' border' >
            <div className='mx-auto md:w-1/2 '  >
            <h2 className="text-3lx mb-8 ">Please Register</h2>
            <form onSubmit={handleRegister} >
                <input className='mb-4 w-3/4 py-2 px-4 border-2 ' type="email" name="email" placeholder='Email Address'  />
                <br />
                <br />
                <input className='mb-4 w-3/4 py-2 px-4 border-2 ' type="password" name="password" placeholder='Password'  />
                <br />
                <br />
                <input className='mb-4 w-3/4 btn btn-secondary ' type="submit" value="Register" />
            </form>
            </div>

        </div>
    );
};

export default Register;