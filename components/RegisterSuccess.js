// components/Header.js
import React, {useRef, useState,useEffect} from 'react';
import { useRouter } from 'next/router';
import {checkAuth, register} from '../components/API/api'
import {
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
    Center, Breadcrumb, BreadcrumbItem, BreadcrumbLink, ListItem, List, Icon
} from '@chakra-ui/react';
import '../styles//global.css';

import {ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
import Product from "./Product";
import {FaMinus, FaPlus} from "react-icons/fa";
const RegisterSuccess = () => {

    const router = useRouter();

    const handleHomeClick = () => {
        router.push('/');
    };
    return (
        <Box >
            <Grid
                className="success-grid success-padding"
                mb={35}
                mt={0}
            >
                <Grid colSpan={1} className="product-listing-left-row" mt={15} gap={6}>
                    <GridItem rowSpan={1} colSpan={1} bg="white" p={4}>
                        <Box border="1px solid #b0b0b0" alignItems="center">
                            <Text className="vm-leftside-heading" size="lg">
                                My Account
                            </Text>
                            <Box className="success-leftside-box">
                                <Link className="success-leftside-link"  href="/AccountDashboard">
                                    Dashboard
                                </Link>
                            </Box>
                            <Box className="success-leftside-box">
                                Order History
                            </Box>
                            <Box className="success-leftside-box">
                                Account Setting
                            </Box>
                            <Box className="success-leftside-box">
                                Address Book
                            </Box>
                        </Box>

                        <Box position="sticky" top="0px" mt={15} border="1px solid #b0b0b0" alignItems="center">
                            {/*<Text  className="vm-leftside-heading" size="lg">*/}
                            {/*    Help Center*/}
                            {/*</Text>*/}
                            <Box
                                className="vm-leftside-box" fontSize="small" color="grey">
                                Contact Us
                            </Box>
                            {/*<Box*/}
                            {/*    className="vm-leftside-box" fontSize="small" color="grey">*/}
                            {/*    Help Center*/}
                            {/*</Box>*/}
                            <Box
                                className="vm-leftside-box" fontSize="small" color="grey">
                                Policies
                            </Box>
                        </Box>
                    </GridItem>
                </Grid>

                <GridItem  colSpan={1} bg='#fff'>
                    <Flex>
                        <Box width="100%">
                            <Grid className="list-grid" >
                                <Heading className="success-heading" as="h3" >
                                    Registered Successfully
                                </Heading>
                                <Box>
                                    <Text  className="success-message" >
                                        Congratulations, your autoparts.com account has been created,
                                        <Link href="/" className="bussiness-url">click here </Link>
                                        to go shopping.
                                    </Text>
                                    <Text  className="success-message" >
                                        An email will be sent to you shortly. If you do not receive an email, check your
                                            <span style={{fontWeight:"600"}}> &quot;Bulk/Junk Mail&quot; </span>
                                        folder to ensure that the email did not get flagged.
                                    </Text>
                                </Box>
                            </Grid>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    );
};

const withAuth = (WrappedComponent) => {
    // eslint-disable-next-line react/display-name
    return (props) => {
        const router = useRouter();

        useEffect(() => {
            const checkAuthentication = async () => {
                try {
                    await checkAuth();
                } catch (error) {
                    router.push('/signUp'); // Redirect to the login page if not authenticated
                }
            };

            checkAuthentication();
        }, []);

        return <WrappedComponent {...props} />;
    };
};

export default withAuth(RegisterSuccess);
