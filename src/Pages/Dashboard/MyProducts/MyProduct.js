import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import ConfirmationModal from '../../Sheard/ConfirmationModal/ConfirmationModal';

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const [deleteUser, setDeleteUser] = useState(null);

    const closeModal = () => {
        setDeleteUser(null);
    }


    // load all users in clinte
    const url = `http://localhost:7000/products/${user.uid}`;
    const { data: products = [], refetch } = useQuery({
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

    const deleteUserDB = products => {
        fetch(`http://localhost:7000/products/${products._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('Successfull Delete ');
                    closeModal(null);
                    refetch();

                }
            })

    }

    return (
        <div>
            <h2 className='text-primary text-2xl font-bold'>My All Product : {products.length}</h2>
            <div>
                <h3 className='text-3xl my-8 font-bold text-primary'>All User</h3>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>

                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                {/* <th>Admin</th> */}
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                products.map(product => <tr key={product._id}>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-32 rounded">
                                                <img alt='' src={product.photo} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">

                                            <div>
                                                <div className="font-bold">{product.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {product.email ? product.email : user.uid}
                                    </td>
                                    <td>{product.date}</td>
                                    {/* <td>{user?.role !== 'admin' ? <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost btn-xs">Make Admin</button> : <>Admin</>}</td> */}
                                    <th>
                                        <label htmlFor="modal" onClick={() => setDeleteUser(product)} className="btn  btn-ghost btn-xs">Delete</label>

                                    </th>
                                </tr>)
                            }

                        </tbody>


                    </table>
                    {
                        deleteUser && <ConfirmationModal
                            title={`Want To Delete User ?`}
                            message={`If You Delete ${deleteUser.name} . It can not be restore.`}
                            classs={`btn btn-error`}
                            closeModal={closeModal}
                            deleteUserDB={deleteUserDB}
                            data={deleteUser}
                            btnName="Delete"
                        ></ConfirmationModal>
                    }
                </div>




            </div>
        </div>
    );
};

export default MyProduct;