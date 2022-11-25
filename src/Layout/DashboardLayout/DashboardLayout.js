import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/AdminHook/useAdmin';
import useSeller from '../../Hooks/SellerHook/useSeller';
import Footer from '../../Pages/Sheard/Footer/Footer';
import Nav from '../../Pages/Sheard/Nav/Nav';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

    const menuItem = <React.Fragment>


        <li><Link className='rounded-box' to="/dashboard">My orders</Link></li>

        {
            isSeller && <>
                <li><Link className='rounded-box' to="/dashboard/myproducts">My Products</Link></li>
                <li><Link className='rounded-box' to="/dashboard/addproduct">Add product </Link></li>
            </>
        }
        {
            isAdmin && <>
                <li><Link className='rounded-box' to="/dashboard/allseller">Sellers</Link></li>
                <li><Link className='rounded-box' to="/dashboard/allbuyer">Buyers</Link></li>
                <li><Link className='rounded-box' to="/dashboard/allusers">Users</Link></li>
                <li><Link className='rounded-box' to="/dashboard/report">Reported </Link></li>
            </>
        }

    </React.Fragment>
    return (
        <>
            <Nav></Nav>
            <div className="navbar bg-base-100">

                <div className="navbar-start">
                    <div className="dropdown  lg:hidden">
                        <h3 className='font-bold'>Dashboard Items</h3>
                        <label tabIndex={0} className="text-primary  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12  lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>

                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow   bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                </div>

                <div className="navbar-end">
                    <ul className="menu hidden lg:flex menu-horizontal p-0  ">
                        {menuItem}
                    </ul>
                </div>


            </div>

            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default DashboardLayout;