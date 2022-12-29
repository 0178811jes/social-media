import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import "./Register.css"

const Register = () => {
    const { createUser, googleLogin } = useContext(AuthContext)

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
    }

    const handleGooleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Jesmin Social</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around on Jesmin social.
                    </span>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Signup </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Signup" className="btn btn-primary" />
                            <Link to='/login'><p className='text-center mt-5 '>login</p></Link>
                        </div>
                    </form>
                    {
                        
                        <button onClick={handleGooleLogin} className="btn btn-outline btn-success">Google</button>
                        
                    }
                </div>

            </div>
        </div>
    );
};

export default Register;