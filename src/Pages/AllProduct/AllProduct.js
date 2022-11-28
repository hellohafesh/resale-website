import { MdReport } from '@react-icons/all-files/md/MdReport';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import PrivateRoutes from '../../Routes/PrivateRoutes/PrivateRoutes';
import BookingModal from '../Sheard/BookingModal/BookingModal';

const AllProduct = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState(null);
    const [reportItem, setReportItem] = useState(null)
    const [category, setCategory] = useState("all");
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const closeModal = () => {
        setBooking(null);
    }


    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`  https://poridhan-com-server-soumik825.vercel.app/totalproducts`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                console.log(data)
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
                    setBookingdb(productid);
                }

            })

    }

    const handleRreport = data => {
        fetch(`  https://poridhan-com-server-soumik825.vercel.app/report/${data._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Report Submit Successfully.');
                setReportItem(null);
                refetch();
            })
        // console.log(data);
    }

    const handlelCategory = (data) => {
        setCategory(data);
        console.log(data);
        refetch();
    }
    // console.log(products);

    const setBookingdb = id => {
        fetch(`  https://poridhan-com-server-soumik825.vercel.app/bookproducts/${id}`, {
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
    return (
        <div>
            <h3 className="text-primary font-bold text-3xl mb-5">All Product </h3>
            <div className=" mt-6">

                <h3 className="text-primary font-bold text-xl ml-5 mb-4">All Category </h3>
                {/* <button onClick={() => handlelCategory("all")} to='/allproducts/male' className='btn btn-primary mx-5'>All</button> */}
                <Link onClick={() => handlelCategory("male")} to='/allproducts/male' className='btn btn-primary mx-5'>Male</Link>
                <Link onClick={() => handlelCategory("female")} to='/allproducts/female' className='btn btn-primary mx-5'>Female</Link>
                <Link onClick={() => handlelCategory("baby")} to='/allproducts/baby' className='btn btn-primary mx-5'>Baby</Link>
            </div>
            <div className=" mt-10 grid gap-[34px] grid-cols-1  md:grid-cols-2 lg:grid-cols-2 ">
                {
                    products.map(product => <div className="card lg:card-side mb-8 bg-base-100  shadow-xl" key={product._id}>
                        <figure><img className='h-80 w-80' src={product.photo} alt="Album" /></figure>
                        <div className="card-body">
                            <div className=' flex justify-between'>
                                <h2 className="card-title">{product.name}</h2>

                                <label onClick={() => setReportItem(product)} htmlFor="report-modal" className=''>
                                    <MdReport className='h-5 w-5 text-primary mx-auto ' />
                                    <p className='text-[10px]'>Report this post</p>
                                </label>
                            </div>
                            <p><span className='font-bold'>Discription :</span> {product.message}</p>

                            <div className='flex justify-center items-center'>
                                <p className='font-bold'>Price : <span className=' text-primary '>${product.price}</span> </p>
                                <p className='font-bold text-[15px]'>Original Price : <span className='text-[15px] text-primary '>${product.originalprice}</span> </p>

                            </div>
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






            {reportItem && <PrivateRoutes>
                <input type="checkbox" id="report-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label onClick={() => setReportItem(null)} className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg">Are You Sure You Wnat TO Report This Item ?</h3>
                        <p className="py-4">Product Name : {reportItem.name} . Seller Email : {reportItem.email} .Seller Location : {reportItem.location}. Old price: ${reportItem.price} . Sell Price : ${reportItem.price}.</p>
                        <div className="modal-action">
                            <button onClick={() => handleRreport(reportItem)} htmlFor="report-modal" className="btn btn-error mx-auto">Submit Your Report!</button>
                        </div>
                    </div>
                </div>

            </PrivateRoutes>}












        </div >

    );
};

export default AllProduct;