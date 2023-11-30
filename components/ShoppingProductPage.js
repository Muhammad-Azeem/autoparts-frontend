// components/Header.js
import React, {useEffect, useRef, useState} from 'react';
import { useRouter } from 'next/router';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading,
    Input,
    Grid,
    GridItem,
    Box,
    Container,
    Image,
    Text,
    Flex,
    Link,
    FormControl, FormLabel
} from '@chakra-ui/react';
import '../styles//global.css';

import {getAddressesByUserId, orderPlace, updateShipping} from "./API/api";
import {getCartFromCookie} from "./utility/cookies";
import Cookies from "js-cookie";
import {formatCurrency} from "./utility/constants";
import Select from 'react-select';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getStripe } from '../utils/stripe';

import { countries } from 'countries-list';

const ShoppingProductPage = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const countryOptions = Object.keys(countries).map((countryCode) => ({
        value: countryCode,
        label: countries[countryCode].name,
    }));

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
    };

    const [user, setUser] = useState('');
    const [cart, setCart] = useState([]);
    const [addresses, setAddresses]  = useState([]);

    useEffect(() => {
        const data = getCartFromCookie();
        setCart(data);
        setSubTotal(localStorage.getItem('subTotal'));



        let temp= localStorage.getItem('user');
        temp = JSON.parse(temp);
        setUser(temp);

        const getAddress = async () => {
            const data = await getAddressesByUserId(temp.id)
            setAddresses(data);
        }

        if(user){
            getAddress();

            setFirstName(addresses[0] ? addresses[0]['first_name'] : '' );
            setLastName(addresses[0] ? addresses[0]['last_name'] : '' );
            setCompany(addresses[0] ? addresses[0]['company'] : '' );
            setStreetAddress(addresses[0] ? addresses[0]['address_1'] : '' );
            setAppartment(addresses[0] ? addresses[0]['address_2'] : '' );
            setZipCode(user.zip_code);
            setPhone(user.phone);
        }
        else {
            setFirstName(localStorage.getItem('firstName') !== null ? localStorage.getItem('firstName') : '');
            setLastName(localStorage.getItem('lastName') !== null ? localStorage.getItem('lastName') : '');
            setCompany(localStorage.getItem('company') !== null ? localStorage.getItem('company') : '');
            setStreetAddress(localStorage.getItem('streetAddress') !== null ? localStorage.getItem('streetAddress') : '');
            setAppartment(localStorage.getItem('appartment') !== null ? localStorage.getItem('appartment') : '');
            setZipCode(localStorage.getItem('zipCode') !== null ? localStorage.getItem('zipCode') : '');
            setPhone(localStorage.getItem('phone') !== null ? localStorage.getItem('phone') : '');
            setEmail(localStorage.getItem('email') !== null ? localStorage.getItem('email') : '');
            setCEmail(localStorage.getItem('cEmail') !== null ? localStorage.getItem('cEmail') : '');
        }
    }, []);


    const [isEstimateVisible, setIsEstimateVisible] = useState(false);

    const toggleEstimateVisibility = () => {
        setIsEstimateVisible(!isEstimateVisible);
    };

    const router = useRouter();

    const handleProductDetailClick = () => {
        router.push('/Product-Detail');
    };
    const handleHomeClick = () => {
        router.push('/');
    };

    const [subTotal, setSubTotal] = useState('');
    const [cardToken, setCardToken] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [appartment, setAppartment] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [cEmail, setCEmail] = useState('');
    const [addressAs, setAddressAs] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [error, setError] = useState('');
    const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
    const [error3, setError3] = useState('');
    const [error4, setError4] = useState('');
    const [error5, setError5] = useState('');
    const [error6, setError6] = useState('');
    const [error7, setError7] = useState('');
    const [paymentError, setPaymentError] = useState(null);
    const [error8, setError8] = useState('');


    const [showTable1, setShowTable1] = useState(true);
    const [showTable2, setShowTable2] = useState(false);
    const [orangeBarStyle, setOrangeBarStyle] = useState({
        width: '185px',
        left: '25px',
    });

    const displayErrorAndHide = () => {
        setTimeout(() => {
            setError('');
            setError1('');
            setError2('');
            setError3('');
            setError4('');
            setError5('');
            setError6('');
            setError7('');
            setPaymentError(null);
            setError8('');
        }, 10000);
    };


    const handleOrder = async () => {
        try {
            const data = { firstName, lastName,company,streetAddress,appartment,zipCode,phone,subTotal,user,cart, cardToken };
           const response = await orderPlace(data);

            localStorage.removeItem('firstName');
            localStorage.removeItem('lastName');
            localStorage.removeItem('company');
            localStorage.removeItem('streetAddress');
            localStorage.removeItem('appartment');
            localStorage.removeItem('zipCode');
            localStorage.removeItem('phone');
            localStorage.removeItem('email');
            localStorage.removeItem('cEmail');
            localStorage.removeItem('subTotal');
            Cookies.remove('cart');
            Cookies.remove('total');


            if (response.success === true) {
                await router.push('/ThankYou');
            } else {
                console.error('Payment failed.');
            }

        } catch (error) {
            console.error('checkout failed:', error);
        }
    };
    const handleShippingForm = async () => {
        if (firstName == '') {
            setError1("First Name is required");
            displayErrorAndHide();
            return;
        }
        if (lastName == '') {
            setError2("Last Name is required");
            displayErrorAndHide();
            return;
        }
        if (company == '') {
            setError3("Company is required");
            displayErrorAndHide();
            return;
        }
        if (streetAddress == '') {
            setError4("Street Address is required");
            displayErrorAndHide();
            return;
        }
        if (appartment == '') {
            setError5("Appartment is required");
            displayErrorAndHide();
            return;
        }
        if (zipCode == '') {
            setError6("Zip Code is required");
            displayErrorAndHide();
            return;
        }
        if (phone == '') {
            setError7("Phone is required");
            displayErrorAndHide();
            return;
        }
        if (email == '') {
            setError8("Email is required");
            displayErrorAndHide();
            return;
        }
        if(!user) {
            if (email !== cEmail) {
                setError("Emails don't match");
                displayErrorAndHide();
                return;
            }
        }
        try {
            if(user){
                const userData = { firstName, lastName,company,streetAddress,appartment,zipCode,phone,addressAs };
                let response = await updateShipping(userData);
            }
            else{
                localStorage.setItem('firstName', firstName);
                localStorage.setItem('lastName', lastName);
                localStorage.setItem('company', company);
                localStorage.setItem('streetAddress', streetAddress);
                localStorage.setItem('appartment', appartment);
                localStorage.setItem('zipCode', zipCode);
                localStorage.setItem('phone', phone);
                localStorage.setItem('email', email);
                localStorage.setItem('cEmail', cEmail);
            }
            setShowShippingDiv(false);
            setShowPaymentDiv(true);

        } catch (error) {
            console.error('Registration failed:', error);
        }
    };


    const showTableOne = () => {
        setShowTable1(true);
        setShowTable2(false);
        setOrangeBarStyle({ width: '185px', left: '25px' });
    };

    const showTableTwo = () => {
        setShowTable1(false);
        setShowTable2(true);
        setOrangeBarStyle({ width: '123px', left: '225px' });
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onModalOpen = () => setIsModalOpen(true);
    const onModalClose = () => setIsModalOpen(false);

    const [showShippingDiv, setShowShippingDiv] = useState(true);
    const [showPaymentDiv, setShowPaymentDiv] = useState(false);
    const [showReviewDiv, setShowReviewDiv] = useState(false);

      const handleContinueToOrderReviewClick = () => {
        // Move from Payment to Review directly
          if(cardToken){
              setShowPaymentDiv(false);
              setShowReviewDiv(true);
          }
          else{
              setPaymentError('Please Add Card First');
          }

      };

      const handleContinueClick = () => {
        setShowShippingDiv(false);
        setShowPaymentDiv(true);
      };
    const handleFirstNameChange = (e) => {
        const inputValue = e.target.value;
        setFirstName(inputValue);

        // Regular expression to allow only alphabets
        const alphabetRegex = /^[a-zA-Z]+$/;

        if (!alphabetRegex.test(inputValue)) {
            setError1('Please enter only alphabets');
        } else {
            setError1('');
        }
    };
    const handleLastNameChange = (e) => {
        const inputValue = e.target.value;
        setLastName(inputValue);

        // Regular expression to allow only alphabets
        const alphabetRegex = /^[a-zA-Z]+$/;

        if (!alphabetRegex.test(inputValue)) {
            setError2('Please enter only alphabets');
        } else {
            setError2('');
        }
    };
    const handleCompanyChange = (e) => {
        const inputValue = e.target.value;
        setCompany(inputValue);

        // Regular expression to allow only alphabets
        const alphabetRegex = /^[a-zA-Z]+$/;

        if (!alphabetRegex.test(inputValue)) {
            setError3('Please enter only alphabets');
        } else {
            setError3('');
        }
    };
    const handleStreetAddressChange = (e) => {
        const inputValue = e.target.value;
        setStreetAddress(inputValue);

        // Regular expression to allow only alphabets
        const alphabetRegex = /^[a-zA-Z]+$/;

        if (!alphabetRegex.test(inputValue)) {
            setError4('Please enter only alphabets');
        } else {
            setError4('');
        }
    };
    const handleAppartmentChange = (e) => {
        const inputValue = e.target.value;
        setAppartment(inputValue);

        // Regular expression to allow only alphabets
        const alphabetRegex = /^[a-zA-Z]+$/;

        if (!alphabetRegex.test(inputValue)) {
            setError5('Please enter only alphabets');
        } else {
            setError5('');
        }
    };
    const handleZipCodeChange = (e) => {
        const inputValue = e.target.value;
        setZipCode(inputValue);

        // Regular expression to allow only alphabets
        const numberRegex = /^[0-9]+$/;

        if (!numberRegex.test(inputValue)) {
            setError6('Please enter only numbers');
        } else {
            setError6('');
        }
    };
    const handlePhoneChange = (e) => {
        const inputValue = e.target.value;
        setPhone(inputValue);

        // Regular expression to allow only alphabets
        const numberRegex = /^[0-9]+$/;


        if (!numberRegex.test(inputValue)) {
            setError7('Please enter only number');
        } else {
            setError7('');
        }
    };
    const handleEmailChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);

        // Regular expression to allow only alphabets
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(inputValue)) {
            setError8('Please enter correct email!');
        } else {
            setError8('');
        }
    };


    const CheckoutForm = () => {
        const stripe = useStripe();
        const elements = useElements();

        const handleSubmit = async (event) => {
            event.preventDefault();

            if (!stripe || !elements) {
                return;
            }

            const cardElement = elements.getElement(CardElement);

            const { token, error } = await stripe.createToken(cardElement);

            if (error) {
                setPaymentError(error.message);
            } else {
                // Send the token to your server
                // await handlePayment(token);
                setCardToken(token);
            }
        };
        const handlePayment = async (token) => {
            try {
                const response = await fetch('/api/payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ token: token.id, amount : parseFloat(subTotal) }),
                });

                if (response.ok) {
                    // Payment successful, handle accordingly (e.g., show a success message)
                    console.log('Payment successful!');
                } else {
                    // Payment failed, handle accordingly (e.g., show an error message)
                    console.error('Payment failed.');
                }
            } catch (error) {
                console.error('Error processing payment:', error);
            }
        };

        return (
            <form style={{display:'flex', justifyContent:'space-between'}} onSubmit={handleSubmit} className="checkout-form">
                <div className="card-element">
                    <CardElement />
                </div>
                <button type="submit" disabled={!stripe} className="pay-button">
                    Add Card
                </button>
                {paymentError && <div className="error-message">{paymentError}</div>}

                <style jsx>{`
        .checkout-form {
          max-width: 500px;
          //margin: 0 auto;
        }

        .card-element {
          margin-bottom: 20px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          width: 350px;
          height: 6px;
        }

        .pay-button {
          background-color: #4caf50;
          color: white;
          padding: 3px 20px;
          font-size: 16px;
          cursor: pointer;
          border: none;
          border-radius: 4px;
          height: 30px;
        }

        .error-message {
          color: red;
          margin-top: 10px;
        }
      `}</style>
            </form>
        );
    };


    return (

    <Box >
        <Box className="pp-productDetail-main-box">
            <Flex className="pp-productDetail-innerbox" >

                <Box className="shipping-pp-box2" flex="1">
                <Box className='shipping-top-list'>
                                <Box className='shipping-top-list-li'>
                                    <Text className='shipping-top-list-text'>
                                        Shipping
                                    </Text>
                                </Box>
                                <Box className='shipping-top-list-li'>
                                    <Text className='shipping-top-list-text'>
                                        Payment & Billing
                                    </Text>
                                </Box>
                                <Box className='shipping-top-list-li'>
                                    <Text className='shipping-top-list-text'>
                                        Review & Complete
                                    </Text>
                                </Box>
                            </Box>
                            {showShippingDiv && (
                            <Box className='shipping-div'>
                                {!user && (
                                <Heading as="h5" fontWeight="200">
                                    If you already have an account, please <Link href='/signUp'> LOGIN </Link>.
                                </Heading>
                                    )}
                                <Flex mt={20} className="shipping-box" >
                                    <Box className=""  >
                                        <form className="shipping-form">
                                            <Heading className="returning-heading" as="h3">User Information</Heading>
                                            <Box display='flex'>
                                                <Box className='boxOne'>
                                                    <Box >
                                                    <FormControl  mt={20}>
                                                    <Select
                                                        className="bussiness-input-select"
                                                        placeholder='Select Country'
                                                        value={selectedCountry}
                                                        onChange={handleCountryChange}
                                                        options={countryOptions}
                                                    />
                                                    </FormControl>
                                                    </Box>
                                                    <Box >
                                                        <FormControl mt={10}>
                                                            <Input mr={5} className="bussiness-input" type="text" placeholder="First Name" value={firstName}   onChange={handleFirstNameChange} />
                                                            {error1 && (
                                                                <p style={{ color: 'red' }}>{error1}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                    <Box >
                                                        <FormControl mt={15}>
                                                            <Input mr={5} className="bussiness-input" type="text" placeholder="Last Name" value={lastName} onChange={handleLastNameChange}/>
                                                            {error2 && (
                                                                <p style={{ color: 'red' }}>{error2}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>

                                                    <Box  >
                                                        <FormControl mt={15}>
                                                            <Input mr={5} className="bussiness-input"  type="text" placeholder="Company" value={company} onChange={handleCompanyChange}/>
                                                            {error3 && (
                                                                <p style={{ color: 'red' }}>{error3}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                    <Box  >
                                                        <FormControl mt={15}>
                                                            <Input mr={5} className="bussiness-input"  type="text" placeholder="Street Address" value={streetAddress} onChange={handleStreetAddressChange} />
                                                            {error4 && (
                                                                <p style={{ color: 'red' }}>{error4}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                    <Box  >
                                                        <FormControl mt={15}>
                                                            <Input mr={5} className="bussiness-input"  type="text" placeholder="Appartment,suite, building etc" value={appartment} onChange={handleAppartmentChange}/>
                                                            {error5 && (
                                                                <p style={{ color: 'red' }}>{error5}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                    <Box  >
                                                        <FormControl mt={15}>
                                                            <Input mr={5} className="bussiness-input"  type="number" placeholder="Zip Code" value={zipCode} onChange={handleZipCodeChange} /><br/>
                                                            <span style={{fontSize:'11px', color:'gray'}}>Enter Zip Code for City and State</span>
                                                            {error6 && (
                                                                <p style={{ color: 'red' }}>{error6}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                    <Box  >
                                                        <FormControl mt={5}>
                                                            <Input mr={5} className="bussiness-input"  type="number" placeholder="phone" value={phone} onChange={handlePhoneChange} />
                                                            {error7 && (
                                                                <p style={{ color: 'red' }}>{error7}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                    {!user && (
                                                        <Box  >
                                                    <Box  >
                                                        <FormControl mt={15}>
                                                            <Input mr={5} className="bussiness-input"  type="text" placeholder="E-mail Address" value={email} onChange={handleEmailChange} />
                                                            {error8 && (
                                                                <p style={{ color: 'red' }}>{error8}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                    <Box  >
                                                        <FormControl mt={15}>
                                                            <Input mr={5} className="bussiness-input"  type="text" placeholder="Confirm E-mail Address" value={cEmail} onChange={(e) => setCEmail(e.target.value)}/>
                                                            {error && (
                                                                <p style={{ color: 'red' }}>{error}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                        </Box>
                                                        )}
                                                          {user ? ( <Box> <Heading margin='0'  fontWeight="200">

                                                            <span style={{fontSize:'14px', color:'gray'}}>Save Address As(Optional)</span>
                                                            </Heading>
                                                            <Box>
                                                                <FormControl mt={15}>
                                                                    <Input mr={5} className="bussiness-input"  type="text" placeholder="" value={addressAs} onChange={(e) => setAddressAs(e.target.value)}/>
                                                                </FormControl>
                                                            </Box>
                                                            <Box  >
                                                                <FormControl mt={15}>
                                                                <Input mr={5}   type="checkbox" />
                                                                Save this address for future orders

                                                                </FormControl>
                                                            </Box>
                                                                <Text className='continue-btn' onClick={handleShippingForm}>
                                                                    Ship to this address
                                                                </Text>
                                                            </Box>
                                                            ) : (<Box><Heading mt={25} className="returning-heading" as="h3">Create an Account <span className='optional'>(Optional)</span></Heading>
                                                            <Box display='flex'>
                                                                <Box className='boxOne'>
                                                                    <Box>
                                                                        <FormControl mt={5}>
                                                                            <Input mr={5} className="bussiness-input"  type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                                        </FormControl>
                                                                    </Box>
                                                                    <Box>
                                                                        <FormControl mt={5}>
                                                                            <Input mr={5} className="bussiness-input"  type="password" placeholder="Confirm Password" value={cPassword} onChange={(e) => setCPassword(e.target.value)} />
                                                                        </FormControl>
                                                                    </Box>
                                                                </Box>
                                                                <Box className='boxTwo'>
                                                                    <Heading as="h5" fontWeight="200">
                                                                        You have the option of creating an account for future orders and faster checkouts.
                                                                    </Heading>
                                                                </Box>
                                                            </Box>
                                                        </Box>)}
                                                </Box>
                                                <Box className='boxTwo'>
                                                    <Heading as="h5" fontWeight="200">
                                                        We ship to all 50 states including P.O. Box, APO, FPO, and U.S. Territories.
                                                    </Heading>
                                                </Box>
                                            </Box>


                                                    </form>
                                                </Box>
                                            </Flex>
                                    <Box className="shipping-price-box">
                                        <Text fontWeight='bold' fontSize="xl">
                                            Order Summary
                                        </Text>
                                        <Box display='flex' justifyContent='space-between'>
                                            <Text margin='0px' fontSize='small' >
                                                Subtotal
                                            </Text>
                                            <Text margin='0px' fontSize='small' >
                                                {formatCurrency(parseFloat(subTotal))}
                                            </Text>
                                        </Box>
                                        <Box mt={5} display='flex' justifyContent='space-between'>
                                            <Text margin='0px' fontSize='small' >
                                                Estimated Shipping & Handling
                                            </Text>
                                            <Text margin='0px' fontSize='small' >
                                                0
                                            </Text>
                                        </Box>
                                        <Box mt={5}  display='flex' justifyContent='space-between'>
                                            <Text margin='0px' fontSize='small' >
                                            Estimated Tax
                                            </Text>
                                            <Text margin='0px' fontSize='small' >
                                                $0
                                            </Text>
                                        </Box>
                                        <Text borderTop="1px solid #b0b0b0" size="lg">
                                            <Box mt={5}  display='flex' justifyContent='space-between'>
                                                <Text margin='0px' fontSize='medium' fontWeight='600' >
                                                    Estimated Order Total
                                                </Text>
                                                <Text margin='0px' fontWeight='600' fontSize='small' color='#bc0000'>
                                                    {formatCurrency(parseFloat(subTotal))}
                                                </Text>
                                            </Box>
                                        </Text>
                                        <Text  onClick={handleShippingForm} className='continue-btn'>
                                            Continue
                                        </Text>
                                    </Box>
                            </Box>
                             )}

                             {showPaymentDiv && (
                                <Box className='payment-div'>
                                    <Flex className="productDetail-box2-flex" >
                                        <Box>
                                            <Box mt={25} className='shipping-div'>

                                                <Flex className="shipping-box" >
                                                    <Box className=""  >
                                                        <form className="shipping-form">
                                                            <Heading className="returning-heading" as="h3">Shipping Address</Heading>
                                                            <Box display='flex'>
                                                                <Box className='boxOne'>
                                                                    <Text>
                                                                        {firstName}
                                                                    </Text>
                                                                    <Text>
                                                                        {lastName}
                                                                    </Text>
                                                                    <Text>
                                                                        {company}
                                                                    </Text>
                                                                    <Text>
                                                                        {streetAddress} {appartment} {zipCode}
                                                                    </Text>
                                                                    <Text>
                                                                        {phone}
                                                                    </Text>

                                                                </Box>
                                                                <Box className='boxTwo'>
                                                                    <Text>
                                                                        Pakistan
                                                                    </Text>
                                                                </Box>
                                                            </Box>
                                                        </form>

                                                        <form className="shipping-form">
                                                            <Heading className="returning-heading" as="h3" borderBottom='none'>Payment Method</Heading>
                                                            <Box>
                                                                {<Elements stripe={getStripe()}>
                                                                    <CheckoutForm />
                                                                </Elements>}
                                                            </Box>

                                                        </form>
                                                    </Box>
                                                </Flex>
                                            </Box>
                                        </Box>
                                        <Box className="payment-price-box">
                                            <Text fontWeight='bold' fontSize="xl">
                                                Order Summary
                                            </Text>
                                            <Box display='flex' justifyContent='space-between'>
                                                <Text margin='0px' fontSize='small' >
                                                    Subtotal
                                                </Text>
                                                <Text margin='0px' fontSize='small' >
                                                    {formatCurrency(parseFloat(subTotal))}
                                                </Text>
                                            </Box>
                                            <Box mt={5} display='flex' justifyContent='space-between'>
                                                <Text margin='0px' fontSize='small' >
                                                    Estimated Shipping & Handling
                                                </Text>
                                                <Text margin='0px' fontSize='small' >
                                                    0
                                                </Text>
                                            </Box>

                                            <Text borderTop="1px solid #b0b0b0" size="lg">
                                                <Box mt={5}  display='flex' justifyContent='space-between'>
                                                    <Text margin='0px' fontSize='medium' fontWeight='600' >
                                                        Estimated Order Total
                                                    </Text>
                                                    <Text margin='0px' fontWeight='600' fontSize='small' color='#bc0000'>
                                                        {formatCurrency(parseFloat(subTotal))}
                                                    </Text>
                                                </Box>
                                            </Text>
                                            <Text onClick={handleContinueToOrderReviewClick} className='continue-btn'>
                                                Continue to Order Review
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Box>
                             )}

                             {showReviewDiv && (
                            <Box className='payment-div'>
                                <Flex className="productDetail-box2-flex" >
                                    <Box>
                                        <Box mt={25} className='shipping-div'>

                                            <Flex className="shipping-box" >
                                                <Box className=""  >
                                                    <form className="shipping-form">
                                                        <Box display='flex'>
                                                            <Box className='boxOne'>
                                                                <Text fontWeight='600'>
                                                                    Shipping Addres
                                                                </Text>
                                                                <Text>
                                                                    {firstName}
                                                                </Text>
                                                                <Text>
                                                                    {lastName}
                                                                </Text>
                                                                <Text>
                                                                    {company}
                                                                </Text>
                                                                <Text>
                                                                    {streetAddress} {appartment} {zipCode}
                                                                </Text>
                                                                <Text>
                                                                    {phone}
                                                                </Text>

                                                            </Box>
                                                            <Box className='boxTwo'>
                                                                 <Text fontWeight='600'>
                                                                    Payment Method
                                                                </Text>
                                                                <Text>
                                                                    Wire Transfer
                                                                </Text>
                                                            </Box>
                                                        </Box>
                                                    </form>
                                                    <form className="shipping-form">
                                                            <Text fontWeight='600'>
                                                                    Shipping Details
                                                                </Text>
                                                      <Box >
                                                      <TableContainer>

                                                            <Table variant='simple'  borderBottom="2px solid #dfdfdf">
                                                                <Thead background="#dfdfdf" >
                                                                    <Tr>
                                                                        <Th width="150px"></Th>
                                                                        <Th width="250px" textAlign="left">Part Description</Th>
                                                                        <Th width="150px" textAlign="center">Price</Th>
                                                                        <Th width="150px" textAlign="center">Qty.</Th>
                                                                        <Th width="150px" textAlign="right">Subtotal</Th>
                                                                    </Tr>
                                                                </Thead>
                                                                <Tbody>
                                                                    {cart.map((cartItem, index) => (
                                                                        <Tr key={cartItem.id} mt={15} style={{ marginTop: '10px' }}>
                                                                            <Td>
                                                                                <Image className="cart-box-image"  src={cartItem.images} alt={`Image ${cartItem.id}`}  />
                                                                            </Td>
                                                                            <Td width="250px" textAlign="left">
                                                                                Part No.: {cartItem.part_number}
                                                                                <br/>
                                                                                <b>{cartItem.description}</b>
                                                                                <br/>
                                                                                <br/>
                                                                                Replaced By: {cartItem.replaces}
                                                                                <br/>

                                                                            </Td>
                                                                            <Td width="150px" textAlign="center">
                                                                                ${cartItem.price}
                                                                            </Td>
                                                                            <Td width="150px" textAlign="center">
                                                                                {cartItem.quantity}
                                                                            </Td>
                                                                            <Td width="150px" textAlign="right">
                                                                                ${(cartItem.price * cartItem.quantity)}
                                                                            </Td>
                                                                        </Tr>
                                                                    ))}
                                                                </Tbody>
                                                            </Table>
                                                        </TableContainer>
                                                        </Box>


                                                    </form>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Box>
                                    <Box>
                                    <Box className="payment-price-box">
                                        <Text fontWeight='bold' fontSize="xl">
                                            Order Summary
                                        </Text>
                                        <Box display='flex' justifyContent='space-between'>
                                            <Text margin='0px' fontSize='small' >
                                                Subtotal
                                            </Text>
                                            <Text margin='0px' fontSize='small' >
                                                {formatCurrency(parseFloat(subTotal))}
                                            </Text>
                                        </Box>
                                        <Box mt={5} display='flex' justifyContent='space-between'>
                                            <Text margin='0px' fontSize='small' >
                                                Shipping & Handling
                                            </Text>
                                            <Text margin='0px' fontSize='small' >
                                                0
                                            </Text>
                                        </Box>

                                        <Text borderTop="1px solid #b0b0b0" fontSize='12px'>
                                            <Box mt={5} mb={5}  display='flex' justifyContent='space-between'>
                                                <Text margin='0px' fontSize='medium' fontWeight='600' >
                                                    Order Total
                                                </Text>
                                                <Text margin='0px' fontWeight='600' fontSize='small' color='#bc0000'>
                                                    {formatCurrency(parseFloat(subTotal))}
                                                </Text>
                                            </Box>
                                            By placing an order, you agree with our Terms and Conditions
                                        </Text>
                                        <Text className='continue-btn' onClick={handleOrder}>
                                            Place To Order
                                        </Text>
                                    </Box>
                                    <Box className="payment-price-box2">
                                        <Text fontWeight='bold' fontSize='12px' color='#606060'>
                                            We ship most orders in 1-3 business days.
                                        </Text>
                                        <Text fontSize='12px' color='#606060'>
                                             Some parts may need to be ordered from one of Toyota Distribution Centers across the country if our local Toyota Distribution Center is out of stock. It will require additional time to obtain. If for any reason it takes longer than 3 business days, we will send a follow-up email to keep you updated on the status of your order.

                                        </Text>
                                        <Text fontWeight='bold' fontSize='12px' color='#606060'>
                                            For International Orders:
                                        </Text>
                                        <Text fontSize='12px' color='#606060'>
                                        Customers are responsible for any customs charges, duties, or taxes that may incur in destination country. This payment will be collected by FedEx upon delivery.

                                        </Text>
                                    </Box>
                                    </Box>
                                </Flex>
                            </Box>
                             )}
                </Box>
            </Flex>
        </Box>
    </Box>
    );
};

export default ShoppingProductPage;
