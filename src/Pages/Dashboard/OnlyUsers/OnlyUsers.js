import { useQuery } from '@tanstack/react-query';
import React from 'react';

const OnlyUsers = () => {

    const url = 'http://localhost:7000/onlyusers';
    const { data: users = [] } = useQuery({
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

    return (
        <div>
            <h3 className='text-3xl my-8 font-bold text-primary'>Only User</h3>

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

export default OnlyUsers;