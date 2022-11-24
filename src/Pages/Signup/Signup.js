import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from '@react-icons/all-files/fa/FaGoogle';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { googleProviderLogin, githubProviderLogin, facebookProviderLogin, createUser, updateUser } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [signUpError, setSignUpError] = useState('');
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

    // Normal sign in
    const handleSignup = data => {
        // console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const userInfo = {
                    displayName: data.name,
                    photoURL: data.name
                }
                // console.log(userInfo);

                updateUser(userInfo)
                    .then(() => {
                        saveUserDB(data.name, data.email, data.seller);
                    })
                    .catch(error => {
                        console.log(error);
                        setSignUpError(error.message);
                    })
            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message);
            })
    }

    const saveUserDB = (name, email, seller) => {
        const dbUser = { name, email, seller };
        fetch('http://localhost:7000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dbUser)
        })
            .then(res => res.json())
            .then(data => {

                // console.log('save user', data);

                if (data.acknowledged === true) {
                    toast.success('User Create Successfully.');
                    getUserToken(email);
                }

            })
    }

    // get user for jwt token 
    const getUserToken = email => {
        fetch(`http://localhost:7000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {

                    localStorage.setItem('accessToken', data.accessToken)
                    navigate(from, { replace: true });
                }
            })
    }

    return (
        <div>
            <div className="hero min-h-screen ">

                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-8">Signup now!</h1>
                        <div className=" rounded-full">
                            <Link to="/" >
                                <img className="w-34 h-24 mx-auto my-10" alt='' src="https://i.ibb.co/7QLwgVH/2022-11-24-012738.png" />
                            </Link>
                        </div>

                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(handleSignup)} className="card-body rounded-lg bg-accent p-8 text-white">

                            <input {...register("name",
                                { required: "Name  is required" })}
                                placeholder="Enter Your Name" type="text" className="input input-bordered text-primary w-96 my-2 " />
                            {errors.name && <p role='alert' className='text-red-400 '>{errors.name?.message}</p>}

                            <input {...register("email",
                                { required: "Email Adress is required" })}
                                placeholder="Enter Your Email" type="email" className="input input-bordered text-primary w-96 my-2 " />
                            {errors.email && <p role='alert' className='text-red-400 '>{errors.email?.message}</p>}

                            <input {...register("phone",
                                { required: "Phone Number is required", minLength: { value: 10, message: "Phone No must be 10 charecter " } })}
                                placeholder="Enter Your Mobail No" type="phone" className="input input-bordered text-primary w-96 my-2 " />
                            {errors.phone && <p role='alert' className='text-red-400 '>{errors.phone?.message}</p>}

                            <input {...register("photo")}
                                type="file" className="input input-bordered text-primary w-96 my-2 " />
                            {errors.photo && <p role='alert' className='text-red-400 '>{errors.photo?.message}</p>}

                            <input {...register("password",
                                { required: "Password  is required", minLength: { value: 6, message: "Password must be 6 charecter " } },)}
                                placeholder="Enter Password" type="password" className="input input-bordered text-primary w-96 my-2" />
                            {errors.password && <p role='alert' className='text-red-400 '>{errors.password?.message}</p>}
                            {signUpError && <p className='text-red-400 '>{signUpError} </p>}

                            <div className="form-control">

                                <div className=" flex">
                                    <h4>Seller Account</h4>
                                    <input {...register("seller")} type="checkbox" className="checkbox mx-2 checkbox-primary" />
                                </div>
                            </div>
                            {errors.seller && <p role='alert' className='text-red-400 '>{errors.seller?.message}</p>}


                            <input type="submit" value='Sign Up' className="btn btn-primary w-96 my-4" />

                            <label className="label">
                                <p>Already Have Account, <Link to='/login' className="link  link-hover text-primary font-bold">Login</Link></p>

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

export default Signup;