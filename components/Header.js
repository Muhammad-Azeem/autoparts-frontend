// components/Header.js
import React, {useEffect, useRef, useState} from 'react';
import {
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
    Icon
} from '@chakra-ui/react';
import { ArrowUpDownIcon } from '@chakra-ui/icons';
import '../styles//global.css';
import { useRouter } from 'next/router';
import { FaUser ,FaShoppingCart } from "react-icons/fa";
import { RiDashboardLine, RiSettingsLine, RiHistoryLine } from "react-icons/ri";
import {login, logout} from '../components/API/api'
import {getCartTotalPriceFromCookie} from "./utility/cookies";
import {formatCurrency} from "./utility/constants";
const Header = () => {
    const [isDivOpen, setIsDivOpen] = useState(false);
    const divRef = useRef();

    // Close the div when clicking outside
    const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setIsDivOpen(false);
        }
    };

    // Close the div when the cursor hovers out
    const handleMouseLeave = () => {
        if (
            divRef.current?.contains &&
            (!divRef.current.contains(event.relatedTarget) || event.relatedTarget.classList.contains("vehicle-list-box"))
        ) {
            setIsDivOpen(false);
        }
    };
    const [cartValue, setCartValue] = useState(0)
    // Add click outside event listener when the div is open
    useEffect(() => {
        const cartTotal = getCartTotalPriceFromCookie();
        setCartValue(cartTotal)

        if (isDivOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDivOpen]);

    const [User, setUser] = useState();
    useEffect(() => {
        // const token = localStorage.getItem('token');
        let temp= localStorage.getItem('user');

        temp = JSON.parse(temp);
        setUser(temp);

    }, []);

    const router = useRouter();

    const handleLoginClick = () => {
        router.push('/signUp');
    };

    const handleCartClick = () => {
        router.push('/AddToCart');
    };

    const handleDashClick = () => {
        router.push('/AccountDashboard');
    };

    const handleAcctSettingClick = () => {
        router.push('/AccountDashboard');
    };

    const handleLogout = async () => {
        try {
            await logout();
            // window.location.reload();
            await router.push('/signUp');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };
    const [searchValue, setSearchValue] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Redirect to a URL with the search value
            window.location.href = `/search-products/${encodeURIComponent(searchValue)}`;
        }
    };
    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };
    return (
        <Flex className="header" as="header" >
            {/* Left-aligned logo */}
            <Link href="/">
                <Box as="img" className="logo-img" src="/images/logo.png" alt="Logo"  />
            </Link>

            {/* Center section */}
            <Flex>
                <Menu>
                    <MenuButton as={Button}
                                leftIcon={
                                    <Box>
                                        <img className="car" src="/images/car.png" alt="Car"  />
                                    </Box>
                                }
                                // rightIcon={<ArrowUpDownIcon />}
                                className="select-vehicle-btn"
                    >
                        <Text mr={5} className="header-select-vehicle">
                        Select Vehicle
                        </Text>
                    </MenuButton>
                </Menu>
                <Box
                    background="#F1F1F1"
                    padding="5px"
                    border="none"
                    borderTopRightRadius="4px"
                    borderBottomRightRadius="4px"
                >
                    <input className="search-placeholder" type="text" value={searchValue}  onKeyPress={handleKeyPress} onChange={handleChange} placeholder="Search by Part Number, Part Name, Description" />
                </Box>
            </Flex>

            <Flex >
                <Container className="margin-between-boxes" maxW="container.sm">
                    <Button
                        variant="outline"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        border="none"
                        background="transparent"
                        onMouseEnter={() => setIsDivOpen(true)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Box display="flex" alignItems="center">
                            <Icon as={FaUser} boxSize="24px" mr={10} style={{ color: "#2E5BA5" }} />
                        </Box>
                        <div>
                            <Box display="flex" flexDir="column" textAlign="left" >

                                    { User ? (
                                        <Text className="header-right-box-text" fontWeight="semibold">

                                            {User.first_name} {User.last_name}
                                            <br/>
                                            <span className="blue-text">My Account </span>
                                        </Text>

                                        ) :
                                        (
                                        <Text className="header-right-box-text" fontWeight="semibold">

                                            Hello, Log In
                                            <br/>
                                            <span className="blue-text">My Account </span>
                                        </Text>
                                        )

                                    }
                                    <br/>
                            {isDivOpen && (
                            User ? (
                                <div
                                    ref={divRef}
                                    style={{
                                            position: 'absolute',
                                            top: '55px', // Adjust the positioning as needed
                                            right: '-25px',
                                            width: '170px', // Set the desired width
                                            // height: '75px',
                                            background: 'white',
                                            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                                            zIndex: '9',
                                            // textAlign: 'center'
                                        // Add other styles as needed
                                    }}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="container">
                                        <div onClick={handleDashClick}  className="dash-row">
                                            <div className="dash-icon"><Icon as={RiDashboardLine} boxSize={20}/></div>
                                            <div className="dash-text">Dashboard</div>
                                        </div>
                                        <div onClick={handleAcctSettingClick}  className="dash-row">
                                            <div className="dash-icon"><Icon as={RiSettingsLine} boxSize={20}/></div>
                                            <div className="dash-text">Account Settings</div>
                                        </div>
                                        <div onClick={handleAcctSettingClick} className="dash-row">
                                            <div className="dash-icon"><Icon as={RiHistoryLine} boxSize={20}/></div>
                                            <div className="dash-text">Order History</div>
                                        </div>
                                        <div onClick={handleLogout} className="dash-row" style={{justifyContent:'center'}}>
                                            <div className="logout-text">Logout</div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    ref={divRef}
                                    style={{
                                        position: 'absolute',
                                        top: '55px', // Adjust the positioning as needed
                                        right: '-25px',
                                        width: '225px', // Set the desired width
                                        height: '75px',
                                        background: 'white',
                                        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                                        zIndex: '9',
                                        textAlign :'center'
                                        // Add other styles as needed
                                    }}
                                    onMouseLeave={handleMouseLeave}
                                >

                                        <p onClick={handleLoginClick} className="logIn-button" >Login</p>
                                        <p className="new_customer-btn" >New Customer?
                                           <a style={{marginLeft:'15px', color:'black'}}>Start Here</a>
                                        </p>

                                </div>
                            )
                            )}
                        </Box>
                        </div>
                        </Button>
                </Container>
                <Container maxW="container.sm">
                    <Button
                        variant="outline"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        border="none"
                        background="transparent"

                    >
                        <Box onClick={handleCartClick} cursor="pointer" display="flex" alignItems="center">
                            <Icon as={FaShoppingCart} boxSize="24px" mr={10} style={{ color: "#2E5BA5" }} />
                        </Box>
                        <Box display="flex" flexDir="column" textAlign="left">
                            <Text className="header-right-box-text"  fontWeight="semibold">Cart<br/>
                                <span className="blue-text">{formatCurrency(cartValue)} </span>
                            </Text>
                        </Box>
                    </Button>
                </Container>
            </Flex>
        </Flex>

    );
};

export default Header;
