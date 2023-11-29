// pages/index.js
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import HeaderMobile from "../components/HeaderMobile";
import MobileFooter from "../components/MobileFooter";
import LoaderSpinner from "../components/LoaderSpinner";
import ThankYouPage from "../components/ThankYouPage";

const HomePage = () => {
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
                <ThankYouPage />
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

export default HomePage;
