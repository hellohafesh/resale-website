import { FaUserCircle } from '@react-icons/all-files/fa/FaUserCircle';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(result => {

                console.log(result);
            })
            .catch(error => console.log(error))
    }
    const menuItem = <React.Fragment>
        <li><Link className='rounded-box' to="/">Home</Link></li>
        <li><Link className='rounded-box' to="/allproducts">All Product </Link></li>
        <li><Link className='rounded-box' to="/dashboard">Dashbord</Link></li>
        <li><Link className='rounded-box' to="/blogs">Blogs</Link></li>
        {
            user?.uid ? <>

                <li><button onClick={handleLogOut}
                    className='rounded-box' to="/login">Logout</button></li>
            </>
                :
                <>
                    <li><Link className='rounded-box' to="/login">Login</Link></li>
                    <li><Link className='rounded-box' to="/signup">Signup</Link></li>
                </>
        }

    </React.Fragment>
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown  lg:hidden">
                    <label tabIndex={0} className="text-primary  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12  lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow   bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <div className=" rounded-full">
                    <Link to="/" ><img className="w-28 h-18" alt='' src="https://i.ibb.co/WgBX8rJ/2022-11-24-012738-removebg-preview.png" /></Link>
                </div>
            </div>

            <div className="navbar-end">
                <ul className="menu hidden lg:flex menu-horizontal p-0  ">
                    {menuItem}
                </ul>
                {user ? <div className=" rounded-full">
                    <img className="w-10 h-10 rounded-full" alt='' src={user.photoURL} />
                </div> : < div className=" rounded-full">
                    <FaUserCircle className='h-10 w-10 text-primary' />
                </div>}
            </div>
        </div >


    );
};

export default Nav;