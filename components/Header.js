// components/Header.js
import React from 'react';
import {Box,Container, Image,Text, Flex, Link, Button, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import { ArrowUpDownIcon } from '@chakra-ui/icons';
import '../styles//global.css';

const Header = () => {
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
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
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
                            <Image src="/images/user.png" alt="Image" boxSize="24px" mr={10} />
                        </Box>
                        <Box display="flex" flexDir="column" textAlign="left">
                            <Text className="header-right-box-text" fontWeight="semibold">Hello, Log In <br/>
                                <span className="blue-text">My Account </span>
                                </Text>
                        </Box>
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
                            <Image src="/images/Cart.png" alt="Image" boxSize="24px" mr={10} />
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
