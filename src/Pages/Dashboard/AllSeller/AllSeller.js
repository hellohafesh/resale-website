import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Sheard/ConfirmationModal/ConfirmationModal';

const AllSeller = () => {

    const [deleteUser, setDeleteUser] = useState(null);

    const closeModal = () => {
        setDeleteUser(null);
    }
    const url = '  https://poridhan-com-server-soumik825.vercel.app/allseller';
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['users'],
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



    //delete user
    const deleteUserDB = seller => {
        fetch(`  https://poridhan-com-server-soumik825.vercel.app/userdelete/${seller._id}`, {
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


    //admin made api
    const handleMakeVerifie = id => {
        fetch(`  https://poridhan-com-server-soumik825.vercel.app/users/verifide/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    toast.success('Successfull Made Verifide ');
                    refetch();
                }
            })
    }

    return (
        <div>
            <h3 className='text-3xl my-8 font-bold text-primary'>All Seller</h3>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Do Verifide</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            sellers.map(seller => <tr key={seller._id}>
                                <td>
                                    {seller.verifide ?
                                        <div className="indicator">
                                            <span className="indicator-item badge badge-primary"></span>
                                            <img alt='' className='h-20 w-20 rounded-xl' src={seller.photo} />
                                        </div>
                                        :
                                        <img alt='' className='h-20 w-20 rounded-xl' src={seller.photo} />


                                    }
                                </td>

                                <td>
                                    <div className="flex items-center space-x-3">

                                        <div>
                                            <div className="font-bold">{seller.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {seller.email ? seller.email : seller.uid}
                                </td>
                                <td>{seller.seller ? <>Seller</> : <>No role</>}</td>
                                <td>{seller.verifide ? <p className='text-primary font-bold'>Verifide</p> : <button onClick={() => handleMakeVerifie(seller.email)} className='btn btn-xs btn-primary'>Do Verifide</button>}</td>

                                <th>
                                    <label htmlFor="modal" onClick={() => setDeleteUser(seller)} className="btn  btn-ghost btn-xs">Delete</label>

                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>

                {
                    deleteUser && <ConfirmationModal
                        title={`Want To Delete Seller ?`}
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
    );
};

export default AllSeller;