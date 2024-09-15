import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../Firebase/Firebase.config';
import { Link } from 'react-router-dom';

const Register = () => {

    const [Showpass, setShowpass] = useState(false);

    // error shows
    const [registererror, setRegistererror] = useState('');

    // succ message

    const [success, setSuccess] = useState('')

    const handleRegister = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password, accepted);

        if (password.length < 6) {
            setRegistererror('Need 6 characters');
            return;

        }

        else if (!/[A-Z]/.test(password)) {
            setRegistererror('Need 1 uppercase');
            return;
        }

        // checkbox

        else if (!accepted) {
            setRegistererror('please accept our terms and condition')
            return;
        }



        // pass type 6 length


        // reset error and success

        setRegistererror('');
        setSuccess('');

        // create user

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('Create Successfull')

            })
            .catch(error => {
                console.error(error);
                setRegistererror(error.message);
            })

    }


    return (
        <div className=' border' >
            <div className='mx-auto md:w-1/2 '  >
                <h2 className="text-3lx mb-8 ">Please Register</h2>
                <form onSubmit={handleRegister} >
                    <input className='mb-4 w-3/4 py-2 px-4 border-2 ' type="email" name="email" placeholder='Email Address' required />
                    <br />
                    <br />
                    <input
                        className='mb-4 w-3/4 py-2 px-4 border-2 '
                        type={Showpass ? "text" : "password"}
                        name="password"
                        placeholder='Password' />
                    <span onClick={() => setShowpass(!Showpass)} >Show</span>
                    <br />
                    <div className='mb-2' >
                        <input type="checkbox" name="terms" id="terms" />
                        <label className='ml-2'
                            htmlFor="terms"> Accept out condition</label>

                    </div>
                    <br />
                    <input className='mb-4 w-3/4 btn btn-secondary ' type="submit" value="Register" />
                </form>
                {
                    registererror && <p className='text-red-500' >{registererror}</p>
                }

                {
                    success && <p className='text-green-700' >{success}</p>
                }

                <p>Already Have an account <Link to='/login' >Please Login</Link></p>
            </div>





        </div>
    );
};

export default Register;