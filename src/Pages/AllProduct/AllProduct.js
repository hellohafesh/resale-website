import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllProduct = () => {

    const url = 'http://localhost:7000/products';
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }

        }
    })

    return (
        <div>
            <h3 className="text-primary font-bold text-3xl mb-5">All Product </h3>
            <div className=" mt-6">
                <h3 className="text-primary font-bold text-xl ml-5 mb-2">All Category </h3>
                <button className='btn btn-primary mx-5'>Male</button>
                <button className='btn btn-primary mx-5'>Female</button>
                <button className='btn btn-primary mx-5'>Baby</button>
            </div>
            <div className=" mt-10 grid gap-[34px] grid-cols-1  md:grid-cols-2 lg:grid-cols-2 ">
                {
                    products.map(product => <div className="card lg:card-side mb-8 bg-base-100  shadow-xl" key={product._id}>
                        <figure><img className='h-80 w-80' src={product.photo} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p><span className='font-bold'>Discription :</span> {product.message}</p>

                            <p className='font-bold'>Price : <span className='text-xl text-primary '>${product.price}</span> </p>

                            <div className="flex justify-between border-solid border-2 border-secondery rounded-xl">
                                <div className="p-2">
                                    <p className='text-[12px]'>Buying Year : {product.year}</p>
                                    <p className='text-[12px]'>Location : {product.location}</p>
                                </div>
                                <div className="p-2">
                                    <p className='text-[12px]'>Condition : {product.condition}</p>
                                    <p className='text-[12px]'>Category : {product.category}</p>
                                </div>
                            </div>
                            <div className=" flex justify-between border-solid border-2 border-secondery rounded-xl ">
                                <div className="avatar p-3">
                                    <div className="w-12 rounded-full">
                                        <img src={product.sellerPhoto} alt='' />
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <p className='text-[12px]'>Phone : {product.phone}</p>
                                    <p className='text-[12px]'>Email : {product.email}</p>
                                    <p className='text-[12px]'>Post Date : {product.date}</p>
                                </div>
                            </div>
                            <div className="card-actions mx-auto">
                                <button className="btn btn-primary w-32 mt-2">Buy This</button>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default AllProduct;