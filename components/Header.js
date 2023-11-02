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
        setIsDivOpen(false);
    };

    // Add click outside event listener when the div is open
    useEffect(() => {
        if (isDivOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDivOpen]);

    const router = useRouter();

    const handleLoginClick = () => {
        // Use router.push to navigate to the product list page
        router.push('/signUp'); // Replace '/productlist' with the actual URL of your product list page
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
                                rightIcon={<ArrowUpDownIcon />}
                                className="select-vehicle-btn"
                    >
                        <Text className="header-select-vehicle">
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
                    <input className="search-placeholder" type="text" placeholder="Search by Part Number, Part Name, Description" />
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
                    >
                        <Box display="flex" alignItems="center">
                            <Icon as={FaUser} boxSize="24px" mr={10} style={{ color: "#2E5BA5" }} />
                        </Box>
                        <div>
                        <Box display="flex" flexDir="column" textAlign="left" onMouseEnter={() => setIsDivOpen(true)}>
                            <Text className="header-right-box-text" fontWeight="semibold">Hello, Log In <br/>
                                <span className="blue-text">My Account </span>
                                </Text>
                            {isDivOpen && (
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
                        <Box display="flex" alignItems="center">
                            <Icon as={FaShoppingCart} boxSize="24px" mr={10} style={{ color: "#2E5BA5" }} />
                        </Box>
                        <Box display="flex" flexDir="column" textAlign="left">
                            <Text className="header-right-box-text"  fontWeight="semibold">Cart<br/>
                                <span className="blue-text">$73.35 </span>
                            </Text>
                        </Box>
                    </Button>
                </Container>
            </Flex>
        </Flex>

    );
};

export default Header;
