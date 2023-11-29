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
const ThankYouPage = () => {

    const router = useRouter();

    const handleHomeClick = () => {
        router.push('/');
    };
    return (
        <Box padding="60px 150px" textAlign="center">
                <Text className="thank-heading" as="h3" >
                    Order Placed Successfully
                </Text>
                <Box>
                    <Text  className="thank-message" >
                        Congratulations, your order has been placed.
                    </Text>

                    <Link href="/" >
                        <Box mt={20} as="img" className="logo-img" src="/images/logo.png" alt="Logo"  />
                    </Link>
                </Box>
        </Box>
    );
};



export default ThankYouPage;
