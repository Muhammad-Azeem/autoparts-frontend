// components/Header.js
import React, {useState} from 'react';
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
import {bussinesAcct} from "./API/api";
const BussinessAccountForm = () => {
    const router = useRouter();

    const handlePersonalClick = () => {
        // Use router.push to navigate to the product list page
        router.push('/signUp'); // Replace '/productlist' with the actual URL of your product list page
    };


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');    
    const [bussinessType, setBussinessType] = useState('');
    const [bussinessName, setBussinessName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [bussinessAddress1, setBussinessAddress1] = useState('');
    const [bussinessAddress2, setBussinessAddress2] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [cityState, setCityState] = useState('');
    const [error, setError] = useState('');

    const handleBussinessAcct = async () => {

        if (email !== confirmEmail) {
            setError("Emails don't match");
            displayErrorAndHide();
            return;
        }

        if (password !== confirmPassword) {
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
            const userData = { bussinessAddress1,bussinessAddress2,zipCode,cityState ,firstName,lastName, jobTitle,bussinessType,bussinessName,email, password,phoneNumber, };
            let response = await bussinesAcct(userData);
             console.log('rest', response)
            // const token  = response.token;
            // const user = JSON.stringify(response.user);
            // localStorage.setItem('token', token);
            // localStorage.setItem('user', user); 
            // router.push('/Register-Success'); 
        } catch (error) {
            console.error('Bussiness Account Registration failed:', error);
            setError('Bussiness Account Registration failed. Please try again.');
            displayErrorAndHide();
        }
    };

    const displayErrorAndHide = () => {
        setTimeout(() => {
            setError('');
        }, 10000);
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
                            <Input mr={5} value={firstName} onChange={(e) => setFirstName(e.target.value)} className="bussiness-input" type="text" />
                        </FormControl>

                        <FormControl mt={20}>
                            <FormLabel mr={5} className="returing-label">Last Name:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} value={lastName} onChange={(e) => setLastName(e.target.value)} className="bussiness-input" type="text" />
                        </FormControl>
                        <FormControl mt={20}>
                            <FormLabel mr={5} className="returing-label">Job Title:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="bussiness-input" type="text" />
                        </FormControl>
                    </Box>
                    <Box className="forms-box" >
                        <FormControl mt={20}>
                            <FormLabel mr={10} className="returing-label">Email Address:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} value={email} onChange={(e) => setEmail(e.target.value)} className="bussiness-input2" type="email" />
                        </FormControl>

                        <FormControl mt={20}>
                            <FormLabel mr={5} className="returing-label">Confirm Email Address:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} className="bussiness-input2"  type="email" />
                        </FormControl>

                    </Box>

                    <Box className="forms-box" >
                        <FormControl mt={20}>
                            <FormLabel mr={10} className="returing-label">Password:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} value={password} onChange={(e) => setPassword(e.target.value)} className="bussiness-input2"  type="password" />
                        </FormControl>

                        <FormControl mt={20}>
                            <FormLabel mr={5} className="returing-label">Confirm Password:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input mr={5} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="bussiness-input2"  type="password" />
                        </FormControl>

                    </Box>

                    <Heading mt={25} className="returning-heading" as="h3">Bussiness Information</Heading>

                    <Box className="forms-box" >
                        <FormControl  mt={20}>
                            <FormLabel mr={5} className="returing-label">Bussiness Type:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Select value={bussinessType} onChange={(e) => setBussinessType(e.target.value)} className="bussiness-select" placeholder='Select option'>
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
                            <Input value={bussinessName} onChange={(e) => setBussinessName(e.target.value)} mr={5} className="bussiness-input2"  type="text" />
                        </FormControl>

                        <FormControl mt={20}>
                            <FormLabel mr={5} className="returing-label"> Phone Number:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} mr={5} className="bussiness-input2"  type="text" />
                        </FormControl>

                    </Box>
                    <Box className="forms-box" >
                        <FormControl mt={20}>
                            <FormLabel mr={10} className="returing-label">Billing Address Line 1:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input value={bussinessAddress1} onChange={(e) => setBussinessAddress1(e.target.value)} mr={5} className="bussiness-input2"  type="text" />
                        </FormControl>

                        <FormControl mt={20}>
                            <FormLabel mr={5} className="returing-label">Billing Address Line 2:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input value={bussinessAddress2} onChange={(e) => setBussinessAddress2(e.target.value)} mr={5} className="bussiness-input2"  type="text" />
                        </FormControl>

                    </Box>
                    <Box className="forms-box" >

                        <FormControl mt={20}>
                            <FormLabel mr={10} className="returing-label">Zip Code:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input value={zipCode} onChange={(e) => setZipCode(e.target.value)} mr={5} className="bussiness-input2"  type="text" />
                        </FormControl>

                        <FormControl mt={20}>
                            <FormLabel mr={5} className="returing-label">City & State:
                                <sup style={{color:'#E52222'}}>*</sup>
                            </FormLabel>
                            <Input value={cityState} onChange={(e) => setCityState(e.target.value)} mr={5} className="bussiness-input2"  type="text" />
                        </FormControl>

                    </Box>

                    <Flex className="bussiness-checkbox"  mt={30} >
                        <Button className="bussiness-acct-button" colorScheme="teal" type="button" onClick={handleBussinessAcct}>
                            Create a Bussiness Account
                        </Button>
                    </Flex>

                </form>
            </Box>
        </Flex>

    );
};

export default BussinessAccountForm;
