import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from '@react-icons/all-files/fa/FaGoogle';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div>
            <div className="hero min-h-screen ">

                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-8">Login now!</h1>
                        <div className=" rounded-full">
                            <Link to="/" >
                                <img className="w-34 h-24 mx-auto my-10" alt='' src="https://i.ibb.co/7QLwgVH/2022-11-24-012738.png" />
                            </Link>
                        </div>

                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(handleLogin)} className="card-body rounded-lg bg-accent p-8 text-white">
                            <input {...register("email")} placeholder="Email" type="email" className="input input-bordered text-primary w-96 my-6 " />
                            <input {...register("password")} placeholder="Password" type="text" className="input input-bordered text-primary w-96 my-2" />


                            <input type="submit" value='Login' className="btn btn-primary w-96 my-4" />

                            <label className="label">
                                <p>Are you new here, <Link to='/signup' className="link  link-hover text-primary font-bold">Signup</Link></p>

                            </label>
                            <div className="flex flex-col w-full border-opacity-50">

                                <div className="divider">OR Join With</div>
                                <div className="flex gap-3 mt-5 mx-auto">
                                    <button className='btn btn-outline btn-primary'><FaGoogle className='h-10 w-10' /></button>
                                    <button className='btn btn-outline btn-primary'><FaGithub className='h-10 w-10' /></button>
                                    <button className='btn btn-outline btn-primary'><FaFacebook className='h-10 w-10' /></button>
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