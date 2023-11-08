// components/Header.js
import React from 'react';
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
    Select,
    Center, FormControl, FormLabel
} from '@chakra-ui/react';

import '../styles//global.css';
import ProductBox from "./ProductBox";
import {ChevronDownIcon} from "@chakra-ui/icons";
import LeftSide from "./LeftSide";
import ProductBlock from "./ProductBlock";
import {useRouter} from "next/router";
const TrackingPage = () => {
    const router = useRouter();

    const handlePersonalClick = () => {
        // Use router.push to navigate to the product list page
        router.push('/signUp'); // Replace '/productlist' with the actual URL of your product list page
    };
    return (

        <Flex className="tracking-box" >
            <Box className="bussiness-box1"  >
                <form className="track-form">
                    <Heading className="track-heading" as="h3">Track Order</Heading>
                    <Text  className="policy-normal-text" mt={15} >
                        To see the status of a recent order, enter your email address and order number when the order was placed.<br/>
                        <br/>
                        If you have an account ,you may<span className="bussiness-url">LOGIN </span> to view your entire order history with more complete details.
                    </Text>
                    <Box className="track-forms-box" >
                        <FormControl mt={20}>
                            <FormLabel mr={5} className="returing-label">First Name:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} className="track-input" type="text" />
                        </FormControl>
                    </Box>
                    <Box className="track-forms-box" >
                        <FormControl mt={20}>
                            <FormLabel mr={10} className="returing-label">Email Address:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} className="track-input" type="email" />
                        </FormControl>
                    </Box>

                    <Flex className="returning-checkbox" mr={5} mt={20} >
                        <Button className="track-button" colorScheme="teal" type="submit">
                            Track My Order
                        </Button>
                    </Flex>

                </form>
            </Box>
        </Flex>

    );
};

export default TrackingPage;
