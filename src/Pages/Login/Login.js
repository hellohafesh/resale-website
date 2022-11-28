import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from '@react-icons/all-files/fa/FaGoogle';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { AuthContext } from '../../Context/AuthProvider';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const { googleProviderLogin, githubProviderLogin, facebookProviderLogin, signin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const [userlogEmail, setUserlogEmail] = useState('');
    const [token] = useToken(userlogEmail);
    const from = location.state?.from?.pathname || '/';
    const [loading, setLoading] = useState(false);

    if (token) {
        navigate(from, { replace: true });
    }

    // google sign in
    const googleSingIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    // Github signin
    const githubSingIn = () => {
        githubProviderLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    //facebook sign in
    const facebookSingIn = () => {
        facebookProviderLogin(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }



    //normal login
    const handleLogin = data => {
        // console.log(data);
        setLoading(true);
        setLoginError('');
        signin(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUserlogEmail(data.email);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoginError(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen ">

                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-8">Login now!</h1>
                        <div className=" rounded-full">
                            <Link to="/" >
                                <img className="w-34 h-24 mx-auto my-10" alt='' src="https://i.ibb.co/WgBX8rJ/2022-11-24-012738-removebg-preview.png" />
                            </Link>
                        </div>

                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(handleLogin)} className="card-body rounded-lg bg-accent p-8 text-white">
                            <input
                                {...register("email",
                                    { required: "Email Adress is required" })}
                                placeholder="Email" type="email" className="input input-bordered text-primary w-96 my-6 " />
                            {errors.email && <p role='alert' className='text-red-400 '>{errors.email?.message}</p>}
                            <input
                                {...register("password",
                                    { required: "Password is required", minLength: { value: 6, message: "Password must be 6 charecter " } })}
                                placeholder="Password" type="password" className="input input-bordered text-primary w-96 my-2" />
                            {errors.password && <p role='alert' className='text-red-400 '>{errors.password?.message}</p>}
                            {loginError && <p className='text-red-400 '>{loginError} </p>}




                            {loading ? <button className="btn btn-primary w-96 my-4 loading">Proccecing</button> : <input type="submit" value='Login' className="btn btn-primary w-96 my-4" />}

                            <label className="label">
                                <p>Are you new here, <Link to='/signup' className="link  link-hover text-primary font-bold">Signup</Link></p>

                            </label>
                            <div className="flex flex-col w-full border-opacity-50">

                                <div className="divider">OR Join With</div>
                                <div className="flex gap-3 mt-5 mx-auto">
                                    <button onClick={googleSingIn} className='btn btn-outline btn-primary'>
                                        <div>
                                            <FaGoogle className='h-10 w-10 ' />
                                            <p className='mt-3 text-white'>Google</p>
                                        </div>
                                    </button>
                                    <button onClick={githubSingIn} className='btn btn-outline btn-primary'>
                                        <div>
                                            <FaGithub className='h-10 w-10 ' />
                                            <p className='mt-3 text-white'>Github</p>
                                        </div></button>
                                    <button onClick={facebookSingIn} className='btn btn-outline btn-primary'>
                                        <div>
                                            <FaFacebook className='h-10 w-10 ' />
                                            <p className='mt-3 text-white'>Facebook</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </form>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;