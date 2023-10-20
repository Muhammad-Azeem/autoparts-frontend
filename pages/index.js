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
const HomePage = () => {
    return (
        <div>
            <Header />
            <SubHeader />

            <main>
                {/* Your main content for the home page */}
                <TopSection />
                <DetailSection />
                <GeniunePartsSection />
                <ModelSection />
                <WholeSaleSection />
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;
