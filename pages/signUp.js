// pages/index.js
import React, {useState, useEffect} from 'react';
import { register } from '../components/API/api';
import { useRouter } from 'next/router';

import Header from '../components/Header';
import SubHeader from "../components/SubHeader";

import Footer from "../components/Footer";
import HeaderMobile from "../components/HeaderMobile";
import MobileFooter from "../components/MobileFooter";
import SignUpForm from "../components/SignUpForm";
// import LoaderSpinner from "../components/LoaderSpinner";

const signUp = () => {
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

                <SignUpForm />

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

export default signUp;
