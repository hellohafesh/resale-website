import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../Pages/Sheard/Nav/Nav';

const NavLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default NavLayout;