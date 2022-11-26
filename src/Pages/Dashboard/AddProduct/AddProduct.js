import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    // console.log(user)
    const imageHostingKey = process.env.REACT_APP_imagebb_key;


    const handleAddProduct = data => {
        console.log(data);

        const imagee = data.image[0];
        // console.log(image);
        const fromData = new FormData();
        fromData.append('image', imagee)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostingKey}`;
        fetch(url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const imgurl = imageData.data.url;
                    console.log(imgurl);
                }
            })


    }
    return (
        <div>
            <div className="hero min-h-screen ">

                <div className="hero-content flex-col ">
                    <div className="text-center ">

                        <div className=" rounded-full">
                            <Link to="/" >
                                <img className="w-34 h-24 mx-auto my-10" alt='' src="https://i.ibb.co/7QLwgVH/2022-11-24-012738.png" />
                            </Link>
                        </div>
                        <h1 className="text-5xl font-bold mb-8">Add New Product</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(handleAddProduct)} className="card-body rounded-lg bg-accent p-8 text-white">


                            <input {...register("name",
                                { required: "Product name is required" })}
                                placeholder="Product Name" type="text" className="input input-bordered text-primary w-96 my-2 " />
                            {errors.name && <p role='alert' className='text-red-400 '>{errors.name?.message}</p>}


                            <input {...register("price",
                                { required: "price  is required" })}
                                placeholder="Enter Price" type="number" className="input input-bordered text-primary w-96 my-2 " />
                            {errors.price && <p role='alert' className='text-red-400 '>{errors.price?.message}</p>}

                            <select {...register("condition",
                                { required: "Condition  is required" })} className="select select-bordered text-primary w-96 my-2 ">
                                <option disabled selected>Select Condition</option>
                                <option value='new'>New</option>
                                <option value='old'>Old</option>
                                <option value='good'>Good</option>
                                <option value='fair'>Fair</option>
                            </select>

                            <select {...register("category",
                                { required: "Category  is required" })} className="select select-bordered text-primary w-96 my-2 ">
                                <option disabled selected>Select Category</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='baby'>Baby</option>
                            </select>

                            <input {...register("email",
                                { required: "Email Adress is required" })}
                                placeholder="Enter Your Email" type="email" defaultValue={user?.email} className="input input-bordered text-primary w-96 my-2 " />
                            {errors.email && <p role='alert' className='text-red-400 '>{errors.email?.message}</p>}

                            <input {...register("phone",
                                { required: "Phone Number is required", minLength: { value: 10, message: "Phone No must be 10 charecter " } })}
                                placeholder="Enter Your Mobail No" type="phone" className="input input-bordered text-primary w-96 my-2 " />
                            {errors.phone && <p role='alert' className='text-red-400 '>{errors.phone?.message}</p>}

                            <input {...register("image")}
                                type="file" className="input input-bordered text-primary w-96 my-2 " />
                            {errors.image && <p role='alert' className='text-red-400 '>{errors.image?.message}</p>}

                            <input {...register("location",
                                { required: "location  is required", },)}
                                placeholder="Enter location" type="text" className="input input-bordered text-primary w-96 my-2" />
                            {errors.location && <p role='alert' className='text-red-400 '>{errors.location?.message}</p>}
                            {/* {signUpError && <p className='text-red-400 '>{signUpError} </p>} */}





                            <input type="submit" value='Upload Your Product' className="btn btn-primary w-96 my-4" />



                        </form>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;