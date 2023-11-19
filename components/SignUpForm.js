// components/Header.js
import React, {useState,useEffect} from 'react';
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

import {login, register} from "./API/api";
const SignUpForm = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {

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
            const userData = { email, password };
            let response = await register(userData);
            console.log('rest', response)
            // await router.push('/login'); // Redirect to the login page after successful registration
        } catch (error) {
            console.error('Registration failed:', error);
            setError('Registration failed. Please try again.');
            displayErrorAndHide();
        }
    };
    const handleLogin = async () => {
        try {
            const credentials = { email: loginEmail, password: loginPassword };
            await login(credentials);
            await router.push('/Register-Success'); // Redirect to a protected route after successful login
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    const displayErrorAndHide = () => {
        setTimeout(() => {
            setError('');
        }, 10000);
    };

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
                        <Input className="returning-input" type="email"  value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                    </FormControl>
                    <FormControl  mt={20}>
                        <FormLabel className="returing-label">Password:
                            <sup style={{color: '#E52222'}}>*</sup>
                        </FormLabel>
                        <Input className="returning-input" type="password"  value={loginPassword}  onChange={(e) => setLoginPassword(e.target.value)} />
                    </FormControl>
                    <Flex className="returning-checkbox" mt={20}>
                        <label className="remember-me-checkbox">
                            <input type="checkbox"/>
                            <span></span>
                            Remember Me
                        </label>
                        <Button className="returning-button" colorScheme="teal" type="button" onClick={handleLogin}>
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
                    {error && (
                        <p style={{ color: 'red' }}>{error}</p>
                    )}
                </Heading>
                <form className="returning-form2">
                    <Heading className="returning-heading" as="h3">Account Registration</Heading>

                    <FormControl  mt={20}>
                        <FormLabel className="returing-label">Email:
                            <sup style={{color:'#E52222'}}>*</sup>
                        </FormLabel>
                        <Input className="returning-input" type="email"  placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                    <FormControl  mt={20}>
                        <FormLabel className="returing-label">Confirm Email:
                            <sup style={{color:'#E52222'}}>*</sup>
                        </FormLabel>
                        <Input className="returning-input" type="email" placeholder="Confirm Email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
                    </FormControl>
                    <FormControl  mt={20}>
                        <FormLabel placeholder="atleat 6 characters" className="returing-label">Password:
                            <sup style={{color: '#E52222'}}>*</sup>
                        </FormLabel>
                        <Input
                            className="returning-input"
                            type="password"
                            placeholder="(at least 6 characters)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <FormControl  mt={20}>
                        <FormLabel placeholder="atleat 6 characters" className="returing-label">Confirm Password:
                            <sup style={{color: '#E52222'}}>*</sup>
                        </FormLabel>
                        <Input
                            className="returning-input"
                            type="password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                        />
                    </FormControl>
                    <Flex  mt={20}>

                        <Button className="account-button" colorScheme="teal" type="button" onClick={handleRegister} >
                            Register
                        </Button>
                    </Flex>
                </form>
            </Box>
        </Flex>

    );
};

export default SignUpForm;
