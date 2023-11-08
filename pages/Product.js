// pages/index.js
import React from 'react';
import Header from '../components/Header';
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import HeaderMobile from "../components/HeaderMobile";
import MobileFooter from "../components/MobileFooter";
import Cart from "../components/Cart";
import ProductPage from "../components/ProductPage";
const Product = () => {
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
                <ProductPage />
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

export default Product;
