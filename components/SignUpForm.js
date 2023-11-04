// components/Header.js
import React from 'react';
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
    Center, FormControl, FormLabel
} from '@chakra-ui/react';
import '../styles//global.css';
import ProductBox from "./ProductBox";
import {ChevronDownIcon} from "@chakra-ui/icons";
import LeftSide from "./LeftSide";
import ProductBlock from "./ProductBlock";
const SignUpForm = () => {
    const router = useRouter();

    const handleBussinessAccountClick = () => {
        // Use router.push to navigate to the product list page
        router.push('/BussinessAcount'); // Replace '/productlist' with the actual URL of your product list page
    };
    return (
        <Flex className="signUp-box" >
            {/* First Form */}
            <Box className="box1"  >
                <Heading as="h3">Returning Customers</Heading>
                <form className="returning-form">
                    <Heading className="returning-heading" as="h3">Login</Heading>
                    <FormControl  mt={20}>
                        <FormLabel className="returing-label">Email:
                            <sup style={{color:'#E52222'}}>*</sup>
                        </FormLabel>
                        <Input className="returning-input" type="email" />
                    </FormControl>
                    <FormControl  mt={20}>
                        <FormLabel className="returing-label">Password:
                            <sup style={{color: '#E52222'}}>*</sup>
                        </FormLabel>
                        <Input className="returning-input" type="password" />
                    </FormControl>
                    <Flex className="returning-checkbox" mt={20}>
                        <label className="remember-me-checkbox">
                            <input type="checkbox"/>
                            <span></span>
                            Remember Me
                        </label>
                        <Button className="returning-button" colorScheme="teal" type="submit">
                            Login
                        </Button>
                    </Flex>
                </form>
            </Box>

            {/* Second Form */}
            <Box className="box2"  >
                <Heading as="h3">New Customers</Heading>
                <Heading mb={5} className="account-below_text" >
                    Shopping for your business?
                    <span className="bussiness-url" onClick={handleBussinessAccountClick}  >
                        Create a free business account.
                    </span>
                </Heading>
                <form className="returning-form2">
                    <Heading className="returning-heading" as="h3">Account Registration</Heading>

                    <FormControl  mt={20}>
                        <FormLabel className="returing-label">Email:
                            <sup style={{color:'#E52222'}}>*</sup>
                        </FormLabel>
                        <Input className="returning-input" type="email" />
                    </FormControl>
                    <FormControl  mt={20}>
                        <FormLabel className="returing-label">Confirm Email:
                            <sup style={{color:'#E52222'}}>*</sup>
                        </FormLabel>
                        <Input className="returning-input" type="email" />
                    </FormControl>
                    <FormControl  mt={20}>
                        <FormLabel placeholder="atleat 6 characters" className="returing-label">Password:
                            <sup style={{color: '#E52222'}}>*</sup>
                        </FormLabel>
                        <Input
                            className="returning-input"
                            type="password"
                            placeholder="(at least 6 characters)"
                        />
                    </FormControl>
                    <FormControl  mt={20}>
                        <FormLabel placeholder="atleat 6 characters" className="returing-label">Confirm Password:
                            <sup style={{color: '#E52222'}}>*</sup>
                        </FormLabel>
                        <Input
                            className="returning-input"
                            type="password"
                        />
                    </FormControl>
                    <Flex  mt={20}>

                        <Button className="account-button" colorScheme="teal" type="submit">
                            Register
                        </Button>
                    </Flex>
                </form>
            </Box>
        </Flex>

    );
};

export default SignUpForm;
