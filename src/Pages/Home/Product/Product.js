import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className='mt-24 mb-24'>
            <div className="">
                <h4 className='text-5xl text-center'>Products Categorys</h4>
                <div className='grid mt-16 gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
                    <Link to='/'>
                        <div className={`card md:card-side p-6 text-primary shadow-xl`}>
                            <figure>
                                <img className='h-20 w-20' src="https://i.ibb.co/H232mTJ/2022-11-24-042718-removebg-preview.png" alt="icon" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">See Male Products</h2>
                                <p></p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to='/'> <div className={`card md:card-side p-6 text-primary shadow-xl`}>
                        <figure>
                            <img className='h-20 w-20' src="https://i.ibb.co/GtWqJfx/2022-11-24-042838-removebg-preview.png" alt="icon" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">See Female Products</h2>
                            <p>{ }</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    </Link>

                    <Link to='/'><div className={`card md:card-side p-6 text-primary shadow-xl`}>
                        <figure>
                            <img className='h-20 w-20' src="https://i.ibb.co/HX7JgPp/2022-11-24-042938-removebg-preview.png" alt="icon" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title"> See Baby Products</h2>
                            <p>{ }</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    </Link>

                </div>

            </div>


            <h4 className='text-5xl text-center my-4'>Latest Products</h4>
            <div className=" grid mt-16  gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
                <div className="card w-96 mx-auto  bg-accent text-white shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>



                <div className="card w-96 mx-auto text-white bg-accent shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>




                <div className="card w-96 mx-auto text-white bg-accent shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Product;