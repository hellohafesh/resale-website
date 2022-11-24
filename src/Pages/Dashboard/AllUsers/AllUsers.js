import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {


    const url = 'http://localhost:7000/users';
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;

        }
    })



    const handleMakeAdmin = id => {
        fetch(`http://localhost:7000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfull Made Admin ');
                    refetch();
                }
            })
    }




    return (
        <div>
            <h3 className='text-3xl my-8 font-bold text-primary'>All User</h3>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => <tr key={user._id}>

                                <td>
                                    <div className="flex items-center space-x-3">

                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email ? user.email : user.uid}
                                </td>
                                <td>{user.seller ? <>Seller</> : <>User</>}</td>
                                <td>{user?.role !== 'admin' ? <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost btn-xs">Make Admin</button> : <>Admin</>}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>




        </div>
    );
};

export default AllUsers;