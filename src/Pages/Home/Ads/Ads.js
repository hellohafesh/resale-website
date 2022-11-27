import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Ads = () => {



    const url = 'http://localhost:7000/advetice';
    const { data: adds = [] } = useQuery({
        queryKey: ['adds'],
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

        <div className='mt-24 grid gap-[34px] justify-items-center grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-4'>
            {
                adds.map(add => <div key={add._id} className="indicator">
                    <span className="indicator-item badge badge-primary">Adds</span>
                    <div className="card w-60  bg-sky-300 shadow-xl">

                        <div className="card-body">
                            <p>Best Sell</p>
                            <h2 className="card-title">{add.name}</h2>
                            <p><span className='font-bold'>Discription :</span> {add.message}</p>
                            <div className='flex justify-around '>
                                <p>Price : $ {add.price}</p>
                                <button className='btn btn-primary btn-xs'>Buy</button>
                            </div>
                        </div>
                        <figure><img className='h-52 w-60' src={add.photo} alt="Shoes" /></figure>
                    </div>
                </div>
                )
            }
        </div>






    );
};

export default Ads;