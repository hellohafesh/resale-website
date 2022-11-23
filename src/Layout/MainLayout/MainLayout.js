import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Sheard/Footer/Footer';
import Nav from '../../Pages/Sheard/Nav/Nav';

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;