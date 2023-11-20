// components/Header.js
import React, {useRef, useState} from 'react';
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

const ShoppingProductPage = () => {
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


    const [showTable1, setShowTable1] = useState(true);
    const [showTable2, setShowTable2] = useState(false);
    const [orangeBarStyle, setOrangeBarStyle] = useState({
        width: '185px',
        left: '25px',
    });

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

    //shipping
    // if (showShippingDiv) {
    //     // Move from Shipping to Payment
    //     setShowPaymentDiv(true);
    //     setShowReviewDiv(true);
    //   } else if (showReviewDiv) {
    //     // Move from Payment to Review
    //     setShowShippingDiv(true);
    //     setShowPaymentDiv(true);
    //   }

      const handleContinueToOrderReviewClick = () => {
        // Move from Payment to Review directly
        setShowPaymentDiv(false);
        setShowReviewDiv(true);
      };

      const handleContinueClick = () => {
        setShowShippingDiv(false);
        setShowPaymentDiv(true);
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
                                <Flex className="productDetail-box2-flex" >
                                    <Box>                           
                                        <Box className='shipping-div'>
                                            <Heading as="h5" fontWeight="200">
                                                If you already have an account, please LOGIN.
                                            </Heading>
                                            <Flex className="shipping-box" >
                                                <Box className=""  >                                
                                                    <form className="shipping-form">
                                                        <Heading className="returning-heading" as="h3">Shipping Address<span className='optional'>(English Only)</span></Heading>
                                                        <Box display='flex'>
                                                            <Box className='boxOne'>
                                                                <Box >
                                                                    <FormControl mt={20}>                                                   
                                                                        <Input mr={5} className="bussiness-input" type="text" placeholder="First Name" />
                                                                    </FormControl>
                                                                </Box>
                                                                <Box >
                                                                    <FormControl mt={5}>
                                                                        <Input mr={5} className="bussiness-input" type="text" placeholder="Last Name" />
                                                                    </FormControl>                                    
                                                                </Box>

                                                                <Box  >
                                                                    <FormControl mt={5}>
                                                                        <Input mr={5} className="bussiness-input"  type="text" placeholder="Company" />
                                                                    </FormControl>
                                                                </Box>
                                                                <Box  >
                                                                    <FormControl mt={5}>
                                                                        <Input mr={5} className="bussiness-input"  type="text" placeholder="Street Address" />
                                                                    </FormControl>
                                                                </Box>
                                                                <Box  >
                                                                    <FormControl mt={5}>
                                                                        <Input mr={5} className="bussiness-input"  type="text" placeholder="Appartment,suite, building etc" />
                                                                    </FormControl>
                                                                </Box>
                                                                <Box  >
                                                                    <FormControl mt={5}>
                                                                        <Input mr={5} className="bussiness-input"  type="text" placeholder="E-mail Address" />
                                                                    </FormControl>
                                                                </Box>
                                                                <Box  >
                                                                    <FormControl mt={5}>
                                                                        <Input mr={5} className="bussiness-input"  type="text" placeholder="Confirm E-mail Address" />
                                                                    </FormControl>
                                                                </Box>
                                                            </Box>
                                                            <Box className='boxTwo'>
                                                            <Heading as="h5" fontWeight="200">
                                                                We ship to all 50 states including P.O. Box, APO, FPO, and U.S. Territories.
                                                            </Heading>
                                                            </Box>
                                                        </Box>
                                                        <Heading mt={25} className="returning-heading" as="h3">Create an Account <span className='optional'>(Optional)</span></Heading>
                                                        <Box display='flex'>
                                                            <Box className='boxOne'>
                                                                <Box>
                                                                    <FormControl mt={5}>
                                                                        <Input mr={5} className="bussiness-input"  type="password" placeholder="Password" />
                                                                    </FormControl>
                                                                </Box>
                                                                <Box>
                                                                    <FormControl mt={5}>
                                                                        <Input mr={5} className="bussiness-input"  type="password" placeholder="Confirm Password" />
                                                                    </FormControl>
                                                                </Box>
                                                            </Box>
                                                            <Box className='boxTwo'>
                                                                <Heading as="h5" fontWeight="200">
                                                                You have the option of creating an account for future orders and faster checkouts.
                                                                </Heading>
                                                            </Box>
                                                        </Box>
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
                                        <Text  onClick={handleContinueClick} className='continue-btn'>
                                            Continue
                                        </Text>
                                    </Box>                
                                </Flex>
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
                                                                        Pakistan
                                                                    </Text>
                                                                    <Text>
                                                                        Pakistan
                                                                    </Text>
                                                                    <Text>
                                                                        Pakistan
                                                                    </Text>
                                                                    <Text>
                                                                        Pakistan
                                                                    </Text>
                                                                    <Text>
                                                                        Pakistan
                                                                    </Text>

                                                                </Box>
                                                                <Box className='boxTwo'>
                                                                    <Text>
                                                                        Pakistan
                                                                    </Text>
                                                                    <Text>
                                                                        Pakistan
                                                                    </Text>
                                                                </Box>
                                                            </Box>                                            
                                                        </form>
                                                        <form className="shipping-form">
                                                            <Heading className="returning-heading" as="h3" borderBottom='none'>Payment Method</Heading>
                                                            <Box display='flex'>
                                                                <Box>
                                                                        <Box display="flex" alignItems="center">
                                                                            <Text fontSize='14px' ml={2}>
                                                                            <Input mr={5}  type="radio" />
                                                                            <Image mr={10} height='15px' src="/images/paypal.png" alt="Image 1"/>
                                                                            Speed through checkout. PayPal is the safer, easier way to pay.</Text>
                                                                        </Box>

                                                                        <Box  alignItems="center">
                                                                            <Text fontWeight='600' fontSize='14px' ml={2}>
                                                                            <Input mr={5}  type="radio" />
                                                                                Wire Transfer
                                                                            </Text>
                                                                            <Text fontSize='14px' ml={2}>
                                                                                Your payment will be processed through Wire Transfer.
                                                                            </Text>
                                                                            <Text fontSize='14px' ml={2}>
                                                                                Once you submit the order, we will confirm the availability and price of the part(s) with the manufacture, typically within 1-2 business days.
                                                                            </Text>
                                                                            <Text fontSize='14px' ml={2}>
                                                                                You will receive a confirmation email with instructions for the wire transfer.
                                                                            </Text>
                                                                            <Text fontSize='14px' ml={2}>
                                                                                If you have any questions or concerns, please contact us.
                                                                            </Text>
                                                                        </Box>
                                                                    
                                                                </Box>
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
                                        
                                            <Text borderTop="1px solid #b0b0b0" size="lg">
                                                <Box mt={5}  display='flex' justifyContent='space-between'>
                                                    <Text margin='0px' fontSize='medium' fontWeight='600' >
                                                        Estimated Order Total
                                                    </Text>
                                                    <Text margin='0px' fontWeight='600' fontSize='small' color='#bc0000'>
                                                        $193.2 
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
                                                                    Pakistan
                                                                </Text>
                                                                <Text>
                                                                    Pakistan
                                                                </Text>
                                                                <Text>
                                                                    Pakistan
                                                                </Text>
                                                                <Text>
                                                                    Pakistan
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
                                                                
                                                                        <Tr mt={15} style={{ marginTop: '10px' }}>
                                                                            <Td>
                                                                                <Image className="cart-box-image" src=''  />
                                                                            </Td>
                                                                            <Td width="250px" textAlign="left">
                                                                                Part No.: 
                                                                                <br/>
                                                                                <b>abc</b>
                                                                                <br/>
                                                                                <br/>
                                                                                Replaced By: 123
                                                                                <br/>
                                                                                <span style={{ cursor: 'pointer', fontSize: '12px', color: '#E52222' }} onClick={() => handleRemoveFromCart(cartItem.id)}>
                                                                                    Remove
                                                                                </span>
                                                                            </Td>
                                                                            <Td width="150px" textAlign="center">
                                                                                123
                                                                            </Td>
                                                                            <Td width="150px" textAlign="center">
                                                                            1
                                                                            </Td>
                                                                            <Td width="150px" textAlign="right">
                                                                                568
                                                                            </Td>
                                                                        </Tr>
                                                                        <Tr mt={15} style={{ marginTop: '10px' }}>
                                                                            <Td>
                                                                                <Image className="cart-box-image" src=''  />
                                                                            </Td>
                                                                            <Td width="250px" textAlign="left">
                                                                                Part No.: 
                                                                                <br/>
                                                                                <b>abc</b>
                                                                                <br/>
                                                                                <br/>
                                                                                Replaced By: 123
                                                                                <br/>
                                                                                <span style={{ cursor: 'pointer', fontSize: '12px', color: '#E52222' }} onClick={() => handleRemoveFromCart(cartItem.id)}>
                                                                                    Remove
                                                                                </span>
                                                                            </Td>
                                                                            <Td width="150px" textAlign="center">
                                                                                123
                                                                            </Td>
                                                                            <Td width="150px" textAlign="center">
                                                                            1
                                                                            </Td>
                                                                            <Td width="150px" textAlign="right">
                                                                                568
                                                                            </Td>
                                                                        </Tr>
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
                                                $193.2 
                                            </Text>
                                        </Box>
                                        <Box mt={5} display='flex' justifyContent='space-between'>
                                            <Text margin='0px' fontSize='small' >
                                                Shipping & Handling
                                            </Text>
                                            <Text margin='0px' fontSize='small' >
                                                $193.2 
                                            </Text>
                                        </Box>
                                    
                                        <Text borderTop="1px solid #b0b0b0" fontSize='12px'>
                                            <Box mt={5} mb={5}  display='flex' justifyContent='space-between'>
                                                <Text margin='0px' fontSize='medium' fontWeight='600' >
                                                    Order Total
                                                </Text>
                                                <Text margin='0px' fontWeight='600' fontSize='small' color='#bc0000'>
                                                    $193.2 
                                                </Text>
                                            </Box>
                                            By placing an order, you agree with our Terms and Conditions
                                        </Text>
                                        <Text className='continue-btn'>
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
