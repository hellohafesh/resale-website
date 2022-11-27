import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className='mt-24 mb-24'>
            <div className="">
                <h4 className='text-5xl text-center'>Products Categorys</h4>
                <div className='grid mt-16 gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
                    <Link to='/allproducts/male'>
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

                    <Link to='/allproducts/female'> <div className={`card md:card-side p-6 text-primary shadow-xl`}>
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

                    <Link to='/allproducts/baby'><div className={`card md:card-side p-6 text-primary shadow-xl`}>
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



        </div>
    );
};

export default Product;