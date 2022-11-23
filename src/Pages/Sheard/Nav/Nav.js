import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const menuItem = <React.Fragment>
        <li><Link className='rounded-box' to="/">Home</Link></li>
        <li><Link className='rounded-box' to="/">All Category</Link></li>
        <li><Link className='rounded-box' to="/">My Card</Link></li>
        <li><Link className='rounded-box' to="/">Dashbord</Link></li>
        <li><Link className='rounded-box' to="/login">Login</Link></li>
        <li><Link className='rounded-box' to="/signup">Signup</Link></li>
    </React.Fragment>
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown  lg:hidden">
                    <label tabIndex={0} className="text-primary  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow   bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <div className=" rounded-full">
                    <Link to="/" ><img className="w-24 h-14" alt='' src="https://i.ibb.co/7QLwgVH/2022-11-24-012738.png" /></Link>
                </div>
            </div>

            <div className="navbar-end">
                <ul className="menu hidden lg:flex menu-horizontal p-0  ">
                    {menuItem}
                </ul>
                <div className=" rounded-full">
                    <img className="w-10 rounded-full" alt='' src="https://placeimg.com/80/80/people" />
                </div>
            </div>
        </div>


    );
};

export default Nav;