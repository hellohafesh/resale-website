import React from 'react';

const BookingModal = ({ title, classs, btnName, booking, user, handleBuyProduct, handleSubmit, register }) => {



    return (
        <>

            <input type="checkbox" id="modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl pb-0">


                    <h3 className="text-lg font-bold">{title}</h3>
                    <form onSubmit={handleSubmit(handleBuyProduct)} className="card-body rounded-lg bg-base-100 pb-2 p-8 text-white">


                        <div className=' grid gap-[34px] grid-cols-1  md:grid-cols-2 lg:grid-cols-3 '>


                            <div>
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input {...register("productName")}
                                    placeholder="Your  Name" type="text" value={booking.name} readOnly className="input input-bordered text-primary w-auto  " />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Seller Location</span>
                                </label>
                                <input {...register("sellerLocation")}
                                    placeholder="Your  Name" type="text" value={booking.location} readOnly className="input input-bordered text-primary w-auto  " />
                            </div>




                            <div>
                                <label className="label">
                                    <span className="label-text">Selling Price</span>
                                </label>
                                <input {...register("price")}
                                    placeholder="Your  Name" type="text" value={booking.price} readOnly className="input input-bordered text-primary w-auto  " />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input {...register("buyername")} type="text" value={user?.displayName} readOnly className="input input-bordered text-primary w-auto  " />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("buyerEmail")}
                                    type="text" value={user?.email} readOnly className="input input-bordered text-primary w-auto  " />
                            </div>


                            <div>
                                <label className="label">
                                    <span className="label-text">Your meeting Location </span>
                                </label>
                                <input {...register("buyerLocation", { required: "Metting Adress is required" })} placeholder="Metting Location" type="text" className="input input-bordered text-primary w-auto  " />

                            </div>

                        </div>

                        <div className='grid gap-[34px] grid-cols-1 w-1/2  mx-auto mt-5 my-auto'>
                            <input type="submit" value={btnName} className={`${classs} w-auto `} />
                        </div>

                    </form>






                    <div className="modal-action">
                        <label htmlFor="modal" className="btn absolute btn-sm btn-circle right-2 top-2">✕</label>
                    </div>
                </div>
            </div>


        </>
    );
};

export default BookingModal;