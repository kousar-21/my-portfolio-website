import React from 'react';
import Navbar from '../component/Navber/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer/Footer';

const Layout = () => {
    return (
        <div>

            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;