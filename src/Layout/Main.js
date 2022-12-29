import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Topbar/Footer/Footer';
import Topbar from '../pages/Shared/Topbar/Topbar';

const Maim = () => {
    return (
        <div>
            <Topbar></Topbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Maim;