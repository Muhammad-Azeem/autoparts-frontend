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
import LoaderSpinner from "../components/LoaderSpinner"
import {login, register} from "./API/api";
const SignUpForm = () => {
    const [loading, setLoading] = useState(true);



    const router = useRouter();

    const [email, setEmail] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [error1, setError1] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            // Simulate an API call or any asynchronous task
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // After the task is done, set loading to false
            setLoading(false);
        };

        fetchData();
    }, []);

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
            console.log('register call started')
            setLoading(true);
            let response = await register(userData);
            console.log(response)
            const token  = response.data.token;
            const user = JSON.stringify(response.data.user);
            localStorage.setItem('token', token);
            localStorage.setItem('user', user);
            router.push('/Register-Success');
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError1('Registration failed. Please try again.');
            displayErrorAndHide();
        }
    };
    const handleLogin = async () => {
        try {
            const credentials = { email: loginEmail, password: loginPassword };
            setLoading(true);
            await login(credentials);
            await router.push('/AccountDashboard'); // Redirect to a protected route after successful login
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError('Invalid Credentials');
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
                    {error && (
                        <p style={{ color: 'red' }}>{error}</p>
                    )}
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
                        {loading ? (
                            <LoaderSpinner />
                        ) : (
                        <Button className="returning-button" colorScheme="teal" type="button" onClick={handleLogin}>
                            Login
                        </Button>
                        )}
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
                    {error1 && (
                        <p style={{ color: 'red' }}>{error1}</p>
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
                        <FormLabel placeholder="atleat 8 characters" className="returing-label">Password:
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
                        {loading ? (
                            <LoaderSpinner />
                        ) : (
                        <Button className="account-button" colorScheme="teal" type="button" onClick={handleRegister} >
                            Register
                        </Button>
                        )}
                    </Flex>
                </form>
            </Box>
        </Flex>

    );
};

export default SignUpForm;
