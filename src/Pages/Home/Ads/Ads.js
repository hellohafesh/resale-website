import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import PrivateRoutes from '../../../Routes/PrivateRoutes/PrivateRoutes';
import BookingModal from '../../Sheard/BookingModal/BookingModal';

const Ads = () => {

    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState(null);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const closeModal = () => {
        setBooking(null);
    }

    const url = 'http://localhost:7000/adds';
    const { data: adds = [], refetch } = useQuery({
        queryKey: ['adds'],
        queryFn: async () => {
            try {
                const res = await fetch(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                // console.log(data);
                return data;
            }
            catch (error) {
                console.log(error);
            }

        }
    })


    const handleBuyProduct = data => {
        console.log(data);
        bookingDB(booking.name, booking.photo, data.buyername, data.price, data.buyerLocation, data.buyerEmail, booking.uid, user.uid, booking._id);
    }

    const bookingDB = (productName, productPhoto, buyername, price, buyerLocation, buyerEmail, sellerUid, buyerUid, productid) => {

        const products = { productName, productPhoto, buyername, price, buyerLocation, buyerEmail, sellerUid, buyerUid, productid };
        fetch('http://localhost:7000/addbooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {

                // console.log('save user', data);

                if (data.acknowledged === true) {
                    closeModal();
                    setBookingdb(productid);
                }

            })

    }


    const setBookingdb = id => {
        fetch(`http://localhost:7000/bookproducts/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Product Booking Successfully.');
                navigate('/dashboard');
                refetch();
            })
    }

    console.log(booking);
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
                                <label htmlFor="modal" onClick={() => setBooking(add)} className="btn btn-primary btn-xs">Buy </label>
                            </div>
                        </div>
                        <figure><img className='h-52 w-60' src={add.photo} alt="Shoes" /></figure>
                    </div>
                </div>
                )
            }


            {
                booking && <PrivateRoutes>
                    <BookingModal
                        title={`Want To Buy This Product ?`}
                        booking={booking}
                        bookingDB={bookingDB}
                        user={user}
                        classs={`btn btn-primary`}
                        btnName="Confrim"
                        data={booking}
                        handleBuyProduct={handleBuyProduct}
                        register={register}
                        handleSubmit={handleSubmit}

                    >

                    </BookingModal>
                </PrivateRoutes>
            }
        </div>






    );
};

export default Ads;