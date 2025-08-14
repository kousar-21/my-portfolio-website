import React from 'react';
import Navbar from '../component/Navber/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;