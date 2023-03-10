import React, { useContext } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const { signIn } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
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
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-5xl font-bold text-center">Login </h1>
                        
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
                            <input name='password' type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" value="Login" className="btn btn-primary" />
                            <Link className='text-center mt-5 btn btn-primary' to='/register'><p>new account</p></Link>
                        </div>
                        
                    </form>
                </div>

            </div>
        </div>
    
    )
    };
    export default Login;