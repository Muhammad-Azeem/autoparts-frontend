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
const BussinessAccountForm = () => {
    const router = useRouter();

    const handlePersonalClick = () => {
        // Use router.push to navigate to the product list page
        router.push('/signUp'); // Replace '/productlist' with the actual URL of your product list page
    };
    return (

        <Flex className="bussiness-box" >
            <Box className="bussiness-box1"  >
                <Heading as="h1">Create a Bussiness Account</Heading>
                <Heading  as="h2" mb={5} className="bussines-second-heading" >
                    Shopping for yourself?
                    <span onClick={handlePersonalClick} className="bussiness-url"  >
                        Create a personal account.
                    </span>
                </Heading>
                <form className="bussiness-form">
                    <Heading className="returning-heading" as="h3">User Information</Heading>
                    <Box className="forms-box" >
                        <FormControl mt={20}>
                            <FormLabel mr={5} className="returing-label">First Name:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} className="bussiness-input" type="email" />
                        </FormControl>

                        <FormControl mt={20}>
                            <FormLabel mr={5} className="returing-label">Last Name:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} className="bussiness-input" type="email" />
                        </FormControl>
                        <FormControl mt={20}>
                            <FormLabel mr={5} className="returing-label">Job Title:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} className="bussiness-input" type="email" />
                        </FormControl>
                    </Box>
                    <Box className="forms-box" >
                        <FormControl mt={20}>
                            <FormLabel mr={10} className="returing-label">Email Address:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} className="bussiness-input2" type="email" />
                        </FormControl>

                        <FormControl mt={20}>
                            <FormLabel mr={5} className="returing-label">Confirm Email Address:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} className="bussiness-input2"  type="email" />
                        </FormControl>

                    </Box>

                    <Box className="forms-box" >
                        <FormControl mt={20}>
                            <FormLabel mr={10} className="returing-label">Password:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} className="bussiness-input2"  type="email" />
                        </FormControl>

                        <FormControl mt={20}>
                            <FormLabel mr={5} className="returing-label">Confirm Password:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} className="bussiness-input2"  type="email" />
                        </FormControl>

                    </Box>

                    <Heading mt={25} className="returning-heading" as="h3">Bussiness Information</Heading>

                    <Box className="forms-box" >
                        <FormControl  mt={20}>
                            <FormLabel mr={5} className="returing-label">Bussiness Type:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Select className="bussiness-select" placeholder='Select option'>
                                <option value='option1'>Auto Industry Reseller/Wholesaler</option>
                                <option value='option2'>Nonprofit</option>
                                <option value='option3'>Government-Federal</option>
                                <option value='option3'>Government-States and Local</option>
                                <option value='option3'>Other</option>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box className="forms-box" >
                        <FormControl mt={20}>
                            <FormLabel mr={10} className="returing-label">Bussniess Name:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} className="bussiness-input2"  type="email" />
                        </FormControl>

                        <FormControl mt={20}>
                            <FormLabel mr={5} className="returing-label"> Phone Number:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} className="bussiness-input2"  type="email" />
                        </FormControl>

                    </Box>
                    <Box className="forms-box" >
                        <FormControl mt={20}>
                            <FormLabel mr={10} className="returing-label">Billing Address Line 1:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} className="bussiness-input2"  type="email" />
                        </FormControl>

                        <FormControl mt={20}>
                            <FormLabel mr={5} className="returing-label">Billing Address Line 2:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} className="bussiness-input2"  type="email" />
                        </FormControl>

                    </Box>
                    <Box className="forms-box" >

                        <FormControl mt={20}>
                            <FormLabel mr={10} className="returing-label">Zip Code:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} className="bussiness-input2"  type="email" />
                        </FormControl>

                        <FormControl mt={20}>
                            <FormLabel mr={5} className="returing-label">City & State:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} className="bussiness-input2"  type="email" />
                        </FormControl>

                    </Box>

                    <Flex className="bussiness-checkbox"  mt={30} >
                        <Button className="bussiness-acct-button" colorScheme="teal" type="submit">
                            Create a Bussiness Account
                        </Button>
                    </Flex>

                </form>
            </Box>
        </Flex>

    );
};

export default BussinessAccountForm;
