import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);


    // load all booked product in clinte
    const url = `  https://poridhan-com-server-soumik825.vercel.app/booked/${user.uid}`;
    const { data: booked = [], } = useQuery({
        queryKey: ['booked'],
        queryFn: async () => {
            try {
                const res = await fetch(url, {
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
    return (

        <div>
            <h2 className='text-primary text-2xl  font-bold'>My All Order : {booked.length}</h2>
            <div>

                <div className="overflow-x-auto w-full">

                    <table className="table w-full">
                        <thead>
                            <tr>
                                {/* productPhoto */}
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Location</th>
                                <th>Your Email</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                booked.map(book => <tr key={book._id}>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-32 rounded">
                                                <img alt='' src={book.productPhoto} />
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className="flex items-center space-x-3">

                                            <div>
                                                <div className="font-bold">{book.productName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">$ {book.price}</div>
                                    </td>
                                    <td>
                                        <div className="font-bold"> {book.buyerLocation}</div>
                                    </td>
                                    <th>
                                        <div className="font-bold"> {book.buyerEmail}</div>

                                    </th>
                                </tr>)
                            }

                        </tbody>


                    </table>

                </div>




            </div>
        </div>

    );
};

export default Dashboard;