import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState('');
    return (
        <div>
            <div className="hero min-h-screen ">

                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-8">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className="card-body rounded-lg bg-accent p-8 text-white">
                            <input {...register("firstName")} placeholder="First name" type="text" className="input input-bordered w-96 my-6 " />
                            <input {...register("firstName")} placeholder="Password" type="text" className="input input-bordered w-96 my-2" />
                            <label className="label">
                                <a href="#!" className="label-text-alt link link-hover text-white">Forgot password?</a>
                            </label>

                            <input type="submit" className="btn btn-primary w-96 my-4" />

                            <label className="label">
                                <p>Are you new here, <Link href="#!" className="link  link-hover text-primary font-bold">Signup</Link></p>
                            </label>
                        </form>



                        {/* <form className="card-body rounded-lg bg-accent text-white">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#!" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;