// pages/index.js
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import HeaderMobile from "../components/HeaderMobile";
import MobileFooter from "../components/MobileFooter";
import ShoppingProductPage from '../components/ShoppingProductPage';

const HomePage = () => {
    return (
        <div>
            <div className="main-header">
                <Header />
                <SubHeader />
            </div>
            <div className="mobile-header">
                <HeaderMobile />
            </div>

            <main>
                <ShoppingProductPage/>

            </main>
            <div className="main-footer">
                <Footer/>
            </div>
            <div className="mobile-footer">
                <MobileFooter />
            </div>
        </div>
    );
};

export default HomePage;
