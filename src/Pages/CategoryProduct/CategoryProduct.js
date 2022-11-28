import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import PrivateRoutes from '../../Routes/PrivateRoutes/PrivateRoutes';
import BookingModal from '../Sheard/BookingModal/BookingModal';

const CategoryProduct = () => {
    const products = useLoaderData();
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState(null);
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const closeModal = () => {
        setBooking(null);
    }
    const handleBuyProduct = data => {
        console.log(data);
        bookingDB(booking.name, booking.photo, data.buyername, data.price, data.buyerLocation, data.buyerEmail, booking.uid, user.uid, booking._id);
    }

    const bookingDB = (productName, productPhoto, buyername, price, buyerLocation, buyerEmail, sellerUid, buyerUid, productid) => {

        const products = { productName, productPhoto, buyername, price, buyerLocation, buyerEmail, sellerUid, buyerUid, productid };
        fetch('  https://poridhan-com-server-soumik825.vercel.app/addbooking', {
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
                    toast.success('Product Booking Successfully.');
                    navigate('/dashboard');
                }

            })

    }
    return (
        <div>
            <div className=" mt-6">

                <h3 className="text-primary font-bold text-xl ml-5 mb-4">All Category </h3>
                {/* <button onClick={() => handlelCategory("all")} to='/allproducts/male' className='btn btn-primary mx-5'>All</button> */}
                <Link to='/allproducts/male' className='btn btn-primary mx-5'>Male</Link>
                <Link to='/allproducts/female' className='btn btn-primary mx-5'>Female</Link>
                <Link to='/allproducts/baby' className='btn btn-primary mx-5'>Baby</Link>
            </div>
            <h1 className='text-primary text-2xl  font-bold'>Total Product: {products.length}</h1>
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
                                <label htmlFor="modal" onClick={() => setBooking(product)} className="btn btn-primary w-32 mt-2">Buy This</label>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
            {
                booking && <PrivateRoutes>
                    <BookingModal
                        title={`Want To Buy This Product ?`}
                        booking={booking}
                        bookingDB={bookingDB}
                        user={user}
                        classs={`btn btn-primary`}
                        btnName="Booking"
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

export default CategoryProduct;