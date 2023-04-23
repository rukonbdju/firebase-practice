import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const AuthLayout = () => {
    return (
        <>
           <Outlet></Outlet> 
           <Footer></Footer>
        </>
    );
};

export default AuthLayout;