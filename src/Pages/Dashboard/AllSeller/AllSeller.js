import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Sheard/ConfirmationModal/ConfirmationModal';

const AllSeller = () => {

    const [deleteUser, setDeleteUser] = useState(null);

    const closeModal = () => {
        setDeleteUser(null);
    }
    const url = ' https://poridhan-com-server-soumik825.vercel.app/allseller';
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
        fetch(` https://poridhan-com-server-soumik825.vercel.app/userdelete/${seller._id}`, {
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
            <h3 className='text-3xl my-8 font-bold text-primary'>All Seller</h3>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers.map(seller => <tr key={seller._id}>

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