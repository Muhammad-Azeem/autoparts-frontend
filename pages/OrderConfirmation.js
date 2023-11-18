// pages/index.js
import React from 'react';
import Header from '../components/Header';
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import HeaderMobile from "../components/HeaderMobile";
import MobileFooter from "../components/MobileFooter";
import ShoppingProductPage from '../components/ShoppingProductPage';
import OrderConfirmation from '../components/OrderConfirmation'

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
                <OrderConfirmation/>
                
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
