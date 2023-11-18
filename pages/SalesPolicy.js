// pages/index.js
import React, {useState, useEffect} from 'react';
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
import LoaderSpinner from "../components/LoaderSpinner";

const SalesPolicy = () => {
    const [loading, setLoading] = useState(true);
    // Simulating an asynchronous operation
  useEffect(() => {
    const fetchData = async () => {
      // Simulate an API call or any asynchronous task
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // After the task is done, set loading to false
      setLoading(false);
    };

    fetchData();
  }, []);
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
            {loading ? (
                <LoaderSpinner />
                ) : (
            <>
                <SalesPolicyPage />
                </>
                )}
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
