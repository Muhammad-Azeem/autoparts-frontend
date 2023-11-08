// pages/index.js
import React from 'react';
import Header from '../components/Header';
import SubHeader from "../components/SubHeader";
import TopSection from "../components/TopSection";
import DetailSection from "../components/DetailSection";
import GeniunePartsSection from "../components/GeniunePartsSection";
import ModelSection from "../components/ModelSection";
import WholeSaleSection from "../components/WholeSaleSection";
import Footer from "../components/Footer";
import HeaderMobile from "../components/HeaderMobile";
import MobileFooter from "../components/MobileFooter";
import SalesPolicyPage from "../components/SalesPolicyPage";
const SalesPolicy = () => {
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
                <SalesPolicyPage />
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

export default SalesPolicy;
