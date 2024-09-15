import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../Firebase/Firebase.config';
import { Link } from 'react-router-dom';

const Login = () => {


    const [registererror, setRegistererror] = useState('');
    const [success, setSuccess] = useState('');





    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        setRegistererror('');
        setSuccess('');


        // add validation
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('Login Successfull');
            })
            .catch(error => {
                console.error(error);
                setRegistererror(error.message);
            })


    }


    const handleForgetPass = e => {
        console.log('send reset pass')

    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a onClick={handleForgetPass} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>



                    </form>
                    {
                        registererror && <p className='text-red-500' >{registererror}</p>
                    }

                    {
                        success && <p className='text-green-700' >{success}</p>
                    }

                    <p>New to this website please <Link className='btn btn-primary' to='/register' >Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;