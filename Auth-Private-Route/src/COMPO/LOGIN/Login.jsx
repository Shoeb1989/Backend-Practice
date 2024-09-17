import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

   const handleLogin = e => {
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.login(email, password)
   }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex"> 
                <div className=" lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                   
                </div> 
                <br />
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>New here ? Please <Link to="/register" ><button className="btn btn-link">Register</button></Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;