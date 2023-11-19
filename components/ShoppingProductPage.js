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
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Center, Breadcrumb, BreadcrumbItem, BreadcrumbLink, ListItem, List, Icon, UnorderedList,
    FormControl, FormLabel,Select
} from '@chakra-ui/react';
import '../styles//global.css';

import {ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {FaMinus, FaPlus} from "react-icons/fa";
import Product from "./Product";
import SmallProduct from "./SmallProduct";
import AddVehicleModal from "./AddVehicleModal";
import {register, updateShipping} from "./API/api";

const ShoppingProductPage = () => {

    const [user, setUser] = useState('');

    useEffect(() => {
        let temp= localStorage.getItem('user');
        temp = JSON.parse(temp);
        setUser(temp);
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setCompany(localStorage.getItem('company'));
        setStreetAddress(localStorage.getItem('streetAddress'));
        setAppartment(localStorage.getItem('appartment'));
        setZipCode(localStorage.getItem('zipCode'));
        setPhone(localStorage.getItem('phone'));
        setEmail(localStorage.getItem('email'));
        setCEmail(localStorage.getItem('cEmail'));
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


    const [showTable1, setShowTable1] = useState(true);
    const [showTable2, setShowTable2] = useState(false);
    const [orangeBarStyle, setOrangeBarStyle] = useState({
        width: '185px',
        left: '25px',
    });

    const displayErrorAndHide = () => {
        setTimeout(() => {
            setError('');
        }, 10000);
    };

    const handleShippingForm = async () => {

        if (email !== cEmail) {
            setError("Emails don't match");
            displayErrorAndHide();
            return;
        }

        if (password !== cPassword) {
            setError("Passwords don't match");
            displayErrorAndHide();
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            displayErrorAndHide();
            return;
        }
        try {
            if(user){
                const userData = { firstName, lastName,company,streetAddress,appartment,zipCode,phone,addressAs };
                let response = await updateShipping(userData);
                console.log('rest', response)
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
    return (

    <Box >
        <Box className="pp-productDetail-main-box">
            <Flex className="pp-productDetail-innerbox" >

                <Box className="shipping-pp-box2" flex="1">
                    <Flex className="productDetail-box2-flex" >
                        {/* Left Sub-Column */}
                        <Box>
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
                            <Box className='shipping-div'>
                                {!user && (
                                <Heading as="h5" fontWeight="200">
                                    If you already have an account, please <Link href='/signUp'> LOGIN </Link>.
                                </Heading>
                                    )}
                                <Flex className="shipping-box" >
                                    <Box className=""  >
                                        <form className="shipping-form">
                                            <Heading className="returning-heading" as="h3">User Information</Heading>
                                            <Box display='flex'>
                                                <Box className='boxOne'>
                                                    <Box >
                                                        <FormControl mt={20}>
                                                            <Input mr={5} className="bussiness-input" type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                                            {error && (
                                                                <p style={{ color: 'red' }}>{error}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                    <Box >
                                                        <FormControl mt={5}>
                                                            <Input mr={5} className="bussiness-input" type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                                            {error && (
                                                                <p style={{ color: 'red' }}>{error}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>

                                                    <Box  >
                                                        <FormControl mt={5}>
                                                            <Input mr={5} className="bussiness-input"  type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)}/>
                                                            {error && (
                                                                <p style={{ color: 'red' }}>{error}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                    <Box  >
                                                        <FormControl mt={5}>
                                                            <Input mr={5} className="bussiness-input"  type="text" placeholder="Street Address" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)}/>
                                                            {error && (
                                                                <p style={{ color: 'red' }}>{error}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                    <Box  >
                                                        <FormControl mt={5}>
                                                            <Input mr={5} className="bussiness-input"  type="text" placeholder="Appartment,suite, building etc" value={appartment} onChange={(e) => setAppartment(e.target.value)}/>
                                                            {error && (
                                                                <p style={{ color: 'red' }}>{error}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                    <Box  >
                                                        <FormControl mt={2}>
                                                            <Input mr={5} className="bussiness-input"  type="number" placeholder="Zip Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>Enter Zip Code for City and State
                                                            {error && (
                                                                <p style={{ color: 'red' }}>{error}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                    <Box  >
                                                        <FormControl mt={5}>
                                                            <Input mr={5} className="bussiness-input"  type="number" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                                            {error && (
                                                                <p style={{ color: 'red' }}>{error}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                    {!user && (
                                                        <Box  >
                                                    <Box  >
                                                        <FormControl mt={5}>
                                                            <Input mr={5} className="bussiness-input"  type="text" placeholder="E-mail Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                                            {error && (
                                                                <p style={{ color: 'red' }}>{error}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                    <Box  >
                                                        <FormControl mt={5}>
                                                            <Input mr={5} className="bussiness-input"  type="text" placeholder="Confirm E-mail Address" value={cEmail} onChange={(e) => setCEmail(e.target.value)}/>
                                                            {error && (
                                                                <p style={{ color: 'red' }}>{error}</p>
                                                            )}
                                                        </FormControl>
                                                    </Box>
                                                        </Box>
                                                        )}
                                                </Box>
                                                <Box className='boxTwo'>
                                                <Heading as="h5" fontWeight="200">
                                                    We ship to all 50 states including P.O. Box, APO, FPO, and U.S. Territories.
                                                </Heading>
                                                </Box>
                                            </Box>
                                            {user ? ( <Box> <Heading  fontWeight="200">

                                                Save Address As(Optional)
                                                </Heading>
                                                <Box>
                                                    <FormControl mt={5}>
                                                        <Input mr={5} className="bussiness-input"  type="text" placeholder="" value={addressAs} onChange={(e) => setAddressAs(e.target.value)}/>
                                                    </FormControl>
                                                </Box>
                                                <Box  >
                                                <FormControl mt={5}>
                                                <Input mr={5} className="bussiness-input"  type="checkbox" />Save this address for future orders

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
                                            {/* <Flex className="bussiness-checkbox"  mt={30} >
                                                <Button className="bussiness-acct-button" colorScheme="teal" type="submit">
                                                    Create a Bussiness Account
                                                </Button>
                                            </Flex> */}

                                        </form>
                                    </Box>
                                </Flex>
                            </Box>
                            </Box>
                        <Box className="shipping-price-box">
                            <Text fontWeight='bold' fontSize="xl">
                                Order Summary
                            </Text>
                            <Box display='flex' justifyContent='space-between'>
                                <Text margin='0px' fontSize='small' >
                                    Subtotal
                                </Text>
                                <Text margin='0px' fontSize='small' >
                                    $193.2
                                </Text>
                            </Box>
                            <Box mt={5} display='flex' justifyContent='space-between'>
                                <Text margin='0px' fontSize='small' >
                                    Estimated Shipping & Handling
                                </Text>
                                <Text margin='0px' fontSize='small' >
                                    $193.2
                                </Text>
                            </Box>
                            <Box mt={5}  display='flex' justifyContent='space-between'>
                                <Text margin='0px' fontSize='small' >
                                 Estimated Tax
                                </Text>
                                <Text margin='0px' fontSize='small' >
                                    $193.2
                                </Text>
                            </Box>
                            <Text borderTop="1px solid #b0b0b0" size="lg">
                                <Box mt={5}  display='flex' justifyContent='space-between'>
                                    <Text margin='0px' fontSize='medium' fontWeight='600' >
                                        Estimated Tax
                                    </Text>
                                    <Text margin='0px' fontWeight='600' fontSize='small' color='#bc0000'>
                                        $193.2
                                    </Text>
                                </Box>
                            </Text>
                            <Text className='continue-btn' onClick={handleShippingForm}>
                                Continue
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    </Box>
    );
};

export default ShoppingProductPage;
