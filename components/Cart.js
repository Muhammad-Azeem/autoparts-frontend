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
    Center, Breadcrumb, BreadcrumbItem, BreadcrumbLink, ListItem, List, Icon, UnorderedList
} from '@chakra-ui/react';
import '../styles//global.css';

import {ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {FaMinus, FaPlus} from "react-icons/fa";
import Product from "./Product";
import {getCartFromCookie, removeCartFromCookie} from "./utility/cookies";
import {formatCurrency} from "./utility/constants";

const   Cart = () => {
    const [isEstimateVisible, setIsEstimateVisible] = useState(false);

    const toggleEstimateVisibility = () => {
        setIsEstimateVisible(!isEstimateVisible);
    };

    const router = useRouter();

    const handleProductDetailClick = () => {
        router.push('/ProductList');
    };
    const handleCheckout = () => {
        router.push('/ShoppingCart');
        localStorage.setItem('subTotal', subTotal);
    };
    const [cart, setCart] = useState([])
    const [subTotal, setSubTotal] = useState(0);
    const calculateSubtotal = (cart) => {
        return cart.reduce((total, item) => {
            const itemTotal = item.quantity * item.price; // Assuming each item has a 'price' property
            return total + itemTotal;
        }, 0);
    };
    const handleRemoveFromCart = (index) => {
        removeCartFromCookie(index)
        const data = getCartFromCookie();
        setCart(data);
        setSubTotal(calculateSubtotal(data))

    };
    useEffect(() => {
        const data = getCartFromCookie();
        setCart(data);
        setSubTotal(calculateSubtotal(data))
    }, [])
    return (
        <Box >

            <Heading className="Product-detail-heading"  margin="0" as="h2" mt={30}>
                Shopping Cart
            </Heading>

            <Grid  className="cart-main-padding" mb={30} mt={20} gap={4}>
                <GridItem colSpan={1}>
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
                                    <Tr key={cartItem.id} style={{ marginTop: '10px' }}>
                                        <Td>
                                            <Image className="cart-box-image" src={cartItem.images} alt={`Image ${cartItem.id}`} />
                                        </Td>
                                        <Td width="250px" textAlign="left">
                                            Part No.: {cartItem.part_number}
                                            <br/>
                                            <b>{cartItem.description}</b>
                                            <br/>
                                            <br/>
                                            Replaced By: {cartItem.replaces}
                                            <br/>
                                            <span style={{ cursor: 'pointer', fontSize: '12px', color: '#E52222' }} onClick={() => handleRemoveFromCart(index)}>
                                                Remove
                                            </span>
                                        </Td>
                                        <Td width="150px" textAlign="center">
                                            {formatCurrency(cartItem.price)}
                                        </Td>
                                        <Td width="150px" textAlign="center">
                                            {cartItem.quantity}
                                        </Td>
                                        <Td width="150px" textAlign="right">
                                            {formatCurrency(cartItem.price * cartItem.quantity)}
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>

                    <Heading margin="0" as="h4" mt={20}>
                        <a className="see-more" onClick={handleProductDetailClick}>
                            {'<'}{'<'} Continue Shopping
                        </a>
                    </Heading>

                    <Box mt={20} className="detail-cartbox-show" background="#f4f4f4" border="1px solid #b0b0b0" alignItems="center">
                        <Text  className="detail-rightside-heading" size="lg">
                            Subtotal: <span style={{color:'#bc0001'}}>{formatCurrency(subTotal)}</span>
                        </Text>
                        <Box className="detail-rightside-upperbox" fontSize="small" color="grey">
                            <Button mt={10} className="add-to-cart-btn" colorScheme="teal" onClick={handleCheckout}>SECURE CHECKOUT </Button>
                            {/*<Text className="center-or-text"  size="lg">*/}
                            {/*    - OR -*/}
                            {/*</Text>*/}
                            {/*<Button  className="paypal-btn" colorScheme="teal">*/}
                            {/*    <Image className="footer_images-bottom" src="/images/paypal-removebg.png" alt="Image 1"/>*/}
                            {/*</Button>*/}
                            {/*<Button mt={10} className="paypal-btn" colorScheme="teal">*/}
                            {/*    <Image className="pay-later-image" src="/images/pay-later.svg" alt="Image 1"/>*/}
                            {/*    Pay Later*/}
                            {/*</Button>*/}
                            {/*<Text  size="lg">*/}
                            {/*    <Image className="pay-later-image" src="/images/pay-later.svg" alt="Image 1"/>*/}
                            {/*    <span>Pay in 4 interest-free payments of $35.18. </span>*/}
                            {/*    <span className="bussiness-url">Learn More</span>*/}
                            {/*</Text>*/}
                        </Box>
                        <Box className="detail-rightside-lowerbox" fontSize="small" color="grey" onClick={toggleEstimateVisibility} >
                            <Button
                                mt={10}
                                className="estimate-btn"
                                colorScheme="teal"
                                rightIcon={<ChevronDownIcon />}
                                onClick={toggleEstimateVisibility}
                            >
                                Estimate your Shopping and Tax
                            </Button>
                            {isEstimateVisible && (
                                <Box className="estimate-div">
                                    <Input className="estimate-div-inbtn" type="text" placeholder="Enter ZIP Code" />
                                    <Button className="estimate-div-inbtn" ml={2} colorScheme="teal">
                                        Get Estimate
                                    </Button>
                                </Box>
                            )}
                        </Box>

                    </Box>

                    <Box mt={20}>
                        <Text className="detail-bottom-heading" as='b'>We ship most orders in 1-3 business days.</Text>
                    </Box>
                    <Box mt={10}>
                        <Text className="detail-bottom-para" as='b'>
                            Some parts may need to be ordered from one of Toyota Distribution Centers across the country if our local Toyota Distribution Center is out of stock. It will require additional time to obtain.If for any reason it takes longer than 3 business days, we will send a follow-up email to keep you updated on the status of your order.
                        </Text>
                    </Box>
                    <Box mt={20}>
                        <Text className="detail-bottom-heading" as='b'>For Expedited Orders:</Text>
                    </Box>
                    <Box mt={10}>
                        <Text className="detail-bottom-para" as='b'>
                            Part availability may affect the ship date of the order. Before placing your order, please send us a <span className="bussiness-url">parts availability</span>  email to make sure the part is in stock or to get an exact shipping time. If you want your order shipped to an alternate address other than your billing address, please use PayPal to avoid delays.                        </Text>
                    </Box>
                </GridItem>

                <GridItem colSpan={1}>
                    <Grid className="left-row" templateColumns="repeat(1, 1fr)" gap={6}>
                        <GridItem rowSpan={1} colSpan={1} bg="white" p={4}>
                            <Box background="#f4f4f4" border="1px solid #b0b0b0" alignItems="center">
                                <Text  className="detail-rightside-heading" size="lg">
                                    Subtotal: <span style={{color:'#bc0001'}}>{formatCurrency(subTotal)}</span>
                                </Text>
                                <Box className="detail-rightside-upperbox" fontSize="small" color="grey">
                                    <Button mt={10} className="add-to-cart-btn" colorScheme="teal" onClick={handleCheckout}>SECURE CHECKOUT </Button>
                                    {/*<Text className="center-or-text"  size="lg">*/}
                                    {/*    - OR -*/}
                                    {/*</Text>*/}
                                    {/*<Button  className="paypal-btn" colorScheme="teal">*/}
                                    {/*    <Image className="footer_images-bottom" src="/images/paypal-removebg.png" alt="Image 1"/>*/}
                                    {/*</Button>*/}
                                    {/*<Button mt={10} className="paypal-btn" colorScheme="teal">*/}
                                    {/*    <Image className="pay-later-image" src="/images/pay-later.svg" alt="Image 1"/>*/}
                                    {/*    Pay Later*/}
                                    {/*</Button>*/}
                                    {/*<Text  size="lg">*/}
                                    {/*    <Image className="pay-later-image" src="/images/pay-later.svg" alt="Image 1"/>*/}
                                    {/*    <span>Pay in 4 interest-free payments of $35.18. </span>*/}
                                    {/*    <span className="bussiness-url">Learn More</span>*/}
                                    {/*</Text>*/}

                                </Box>
                                <Box className="detail-rightside-lowerbox" fontSize="small" color="grey" onClick={toggleEstimateVisibility} >
                                    <Button
                                        mt={10}
                                        className="estimate-btn"
                                        colorScheme="teal"
                                        rightIcon={<ChevronDownIcon />}
                                        onClick={toggleEstimateVisibility}
                                    >
                                        Estimate your Shopping and Tax
                                    </Button>
                                    {isEstimateVisible && (
                                        <Box className="estimate-div">
                                            <Input className="estimate-div-inbtn" type="text" placeholder="Enter ZIP Code" />
                                            <Button className="estimate-div-inbtn" ml={2} colorScheme="teal">
                                                Get Estimate
                                            </Button>
                                        </Box>
                                    )}
                                </Box>

                            </Box>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Cart;
