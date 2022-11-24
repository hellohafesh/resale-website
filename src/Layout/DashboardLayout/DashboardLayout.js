import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Footer from '../../Pages/Sheard/Footer/Footer';
import Nav from '../../Pages/Sheard/Nav/Nav';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);

    const menuItem = <React.Fragment>


        <li><Link className='rounded-box' to="/dashboard/myorder">My orders</Link></li>
        <li><Link className='rounded-box' to="/dashboard/myproducts">My Products</Link></li>
        <li><Link className='rounded-box' to="/dashboard/addproduct">Add product </Link></li>

        <li><Link className='rounded-box' to="/dashboard/allseller">Sellers</Link></li>
        <li><Link className='rounded-box' to="/dashboard/allbuyer">Buyers</Link></li>
        <li><Link className='rounded-box' to="/dashboard/report">Reported Items</Link></li>

    </React.Fragment>
    return (
        <>
            <Nav></Nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <ul className="menu hidden lg:flex menu-horizontal p-0  ">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown  lg:hidden">
                        <h3 className='font-bold'>Dashboard</h3>
                        <label tabIndex={0} className="text-primary  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12  lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow   bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                </div>


            </div>

            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default DashboardLayout;