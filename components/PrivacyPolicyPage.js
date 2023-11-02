// components/Header.js
import React, {useRef, useState} from 'react';
import { useRouter } from 'next/router';
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
const PrivacyPolicyPage = () => {

    const router = useRouter();

    const handleHomeClick = () => {
        router.push('/');
    };
    return (
        <Box >

            <Grid
                className="p-grid main-padding"
                mb={35}
                mt={0}
            >
                <Grid colSpan={1} className="policy-left-row"  gap={6}>

                    <GridItem rowSpan={1} colSpan={1} bg="white" p={4}>

                        <Box position="sticky" top="0px" mt={15} border="1px solid #b0b0b0" alignItems="center">
                            <Text  className="vm-leftside-heading" size="lg">
                                Categories
                            </Text>
                            <Box

                                className="vm-leftside-box" fontSize="small" >
                                Contact Us
                            </Box>
                            <Box
                                className="vm-leftside-box" fontSize="small" >
                                Help Center
                            </Box>
                            <Box
                                className="vm-leftside-box" fontSize="small" >
                                <Icon height="10px" as={FaPlus} mr={2} /> Policies
                            </Box>
                            <Box>
                                <Box
                                    className="vm-leftside-box" fontSize="small" >
                                    Sales Policy
                                </Box>
                                <Box
                                    className="vm-leftside-box" fontSize="small" >
                                    Return Policy
                                </Box>
                                <Box
                                    className="vm-leftside-box" fontSize="small" >
                                    Privacy Policy
                                </Box>
                                <Box
                                    className="vm-leftside-box" fontSize="small" >
                                    Remanufactured Parts/Core Policy
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                </Grid>

                <GridItem  colSpan={1} bg='#fff'>
                    <Breadcrumb className="policy-breadcrum"  separator=">">
                        <BreadcrumbItem fontSize="14px">
                            <BreadcrumbLink cursor="pointer" onClick={handleHomeClick}>Home</BreadcrumbLink>
                        </BreadcrumbItem >
                        <BreadcrumbItem fontSize="14px" isCurrentPage>
                            <BreadcrumbLink href="#">Privacy Policy</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Flex>
                        <Box width="100%">
                            <Grid className="policy-grid" >
                                <Box className="policy-box" >
                                    <Heading mt={10} mb={10} className="policy-heading"  as="h2">
                                        Privacy Policy
                                    </Heading>

                                    <Text className="policy-normal-text" margin={0} >
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        Toyotapartsdeal.com ("we", "us", "our", "site", or "Toyotapartsdeal.com") is the sole owner of information collected on this site. Toyotapartsdeal.com takes every precaution necessary to protect your privacy and personal information. Below is a description of how we collect information from you online when you visit Toyotapartsdeal.com.
                                    </Text>

                                    <Text  mt={10} mb={0} as="h4">
                                        Online Security
                                    </Text>

                                    <Text className="policy-normal-text"  margin={0}>
                                        Whenever you submit sensitive information (such as a credit card number) via our website, that information is collected, encrypted and protected by the best encryption technology available in the industry-SSL. Any time you send data to our web server, it will be encrypted and our server will encrypt any data sent back to your web browser.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Cookies and Information Collected
                                    </Text>
                                    <Text className="policy-normal-text"  margin={0}>
                                        Information collected by or submitted to our site may be used to help us customize web content and better serve you with pertinent information, such as order confirmations and order status updates. We will not sell, share, or rent this information to any outside parties, except as outlined in this policy. If you choose to turn off your cookies, your website experience may be limited and you may be unable to use some of the features of the site.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Email Collection
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        If you provide your email address to us, or register for an account, we may use it to respond or update you on parts inquiries. If you receive a marketing email from Toyotapartsdeal.com and would prefer not to receive these types of emails, click the "unsubscribe" link in the email footer to remove your name from our list.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Notice of Changes
                                    </Text>
                                    <Text className="policy-normal-text"  margin={0}>
                                        Toyotapartsdeal.com reserves the right, at its discretion, to change, modify, add, or remove portions of this Privacy Policy at any time. You should check this page periodically for changes. Your continued use of this Site following the posting of changes to this Privacy Policy will mean that you accept those changes.
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

export default PrivacyPolicyPage;
