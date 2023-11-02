// components/Header.js
import React, {useRef, useState} from 'react';
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
    Center, Breadcrumb, BreadcrumbItem, BreadcrumbLink, ListItem, List, Icon, FormControl, FormLabel
} from '@chakra-ui/react';
import '../styles//global.css';

import {ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
import Product from "./Product";
import {FaMinus, FaPlus} from "react-icons/fa";
const AcctDash = () => {
    const [activeGridItem, setActiveGridItem] = useState(1);

    const [isEditBox1Visible, setIsEditBox1Visible] = useState(true);
    const [isEditBox2Visible, setIsEditBox2Visible] = useState(true);

    const toggleEditBoxVisibility = () => {
        setIsEditBox1Visible(!isEditBox1Visible);
    };
    const toggleEditBoxVisibility2 = () => {
        setIsEditBox2Visible(!isEditBox2Visible);
    };

    const router = useRouter();

    const handleHomeClick = () => {
        router.push('/');
    };
    return (
        <Box >
            <Grid
                className="success-grid success-padding"
                mb={35}
                mt={0}
            >
                <Grid colSpan={1} className="product-listing-left-row" mt={15} gap={6}>
                    <GridItem rowSpan={1} colSpan={1} bg="white" p={4}>
                        <Box border="1px solid #b0b0b0" alignItems="center">
                            <Text className="vm-leftside-heading" size="lg">
                                My Account
                            </Text>
                            <Box className="success-leftside-box">
                                <Link className="success-leftside-link"  href="/">
                                    Dashboard
                                </Link>
                            </Box>
                            <Box onClick={() => setActiveGridItem(1)} className="success-leftside-box">
                                Order History
                            </Box>
                            <Box onClick={() => setActiveGridItem(2)} className="success-leftside-box">
                                Account Setting
                            </Box>
                            <Box onClick={() => setActiveGridItem(3)} className="success-leftside-box">
                                Address Book
                            </Box>
                        </Box>

                        <Box position="sticky" top="0px" mt={15} border="1px solid #b0b0b0" alignItems="center">
                            <Text  className="vm-leftside-heading" size="lg">
                                Help Center
                            </Text>
                            <Box
                                className="vm-leftside-box" fontSize="small" color="grey">
                                Contact Us
                            </Box>
                            <Box
                                className="vm-leftside-box" fontSize="small" color="grey">
                                Help Center
                            </Box>
                            <Box
                                className="vm-leftside-box" fontSize="small" color="grey">
                                Policies
                            </Box>
                        </Box>
                    </GridItem>
                </Grid>
                {activeGridItem === 1 &&
                <GridItem  colSpan={1} bg='#fff'>
                    <Flex>
                        <Box width="100%">
                            <Grid className="list-grid" >
                                <Heading className="success-heading" as="h3" >
                                    Order History
                                </Heading>
                                <Box>
                                    <Text  className="success-message" >
                                        Congratulations, your autoparts.com account has been created,
                                        <Link href="/" className="bussiness-url">click here </Link>
                                        to go shopping.
                                    </Text>
                                    <Text  className="success-message" >
                                        An email will be sent to you shortly. If you do not receive an email, check your
                                        <span style={{fontWeight:"600"}}> &quot;Bulk/Junk Mail&quot; </span>
                                        folder to ensure that the email did not get flagged.
                                    </Text>
                                </Box>
                            </Grid>
                        </Box>
                    </Flex>
                </GridItem>
                }
                {activeGridItem === 2 &&
                <GridItem  colSpan={1} bg='#fff'>
                    <Flex>
                        <Box width="100%">
                            <Grid className="list-grid" >
                                <Heading className="account-setting-heading" as="h3" >
                                    Account Settings
                                </Heading>
                                <Box>
                                    <Text  className="account-subhead" >
                                        Change your Login Email, password, and default billing address.
                                    </Text>
                                    {isEditBox1Visible ? (
                                    <Box className="editBox1 account-sectionbox">
                                        <Heading mt={10} className="account-login" as="h3" >
                                            Login Email
                                        </Heading>
                                        <Box mt={10} className="account-inner-box" >
                                            <Text fontWeight="600">
                                                Current Email Address:
                                            </Text>
                                            <Text>
                                                xyz@gmail.com
                                            </Text>
                                            <Text onClick={toggleEditBoxVisibility} className="account-edit-btn">
                                                Edit
                                            </Text>
                                        </Box>
                                    </Box>
                                        ) : (
                                    <Box className="editBox2 account-sectionbox">
                                        <Heading mt={10} className="account-login" as="h3" >
                                            Change Login Email
                                        </Heading>
                                        <Box mt={10} borderBottom="1px solid #d0d0d0">
                                        </Box>
                                        <Text className="log-subhead">
                                            This Email Address will be used to login to your account.
                                        </Text>
                                        <Box className="form-box-width"  mt={10}>
                                            <form>
                                                <FormControl className="acctSet-inputbox">
                                                    <FormLabel className="account-label" flex={1} pr={4}>Current Email</FormLabel>
                                                    <Text margin="0"> xyz@gmail.com</Text>
                                                </FormControl>

                                                <FormControl className="acctSet-inputbox">
                                                    <FormLabel className="account-label" flex={1} pr={4}>New Email:</FormLabel>
                                                    <Input className="account-input" flex={2} type="text" />
                                                </FormControl>

                                                <FormControl className="acctSet-inputbox">
                                                    <FormLabel className="account-label" flex={1} pr={4}>Confirm New Email:</FormLabel>
                                                    <Input className="account-input" flex={2} type="text" />
                                                </FormControl>

                                                <FormControl className="acctSet-inputbox">
                                                    <FormLabel className="account-label" flex={1} pr={4}>Password:</FormLabel>
                                                    <Input className="account-input" flex={2} type="text" />
                                                </FormControl>
                                                <Box className="acctSet-butbox">
                                                    <Button onClick={toggleEditBoxVisibility} mr={10} className="discard-btn" >Discard Changes</Button>
                                                    <Button className="account-save-btn" type="submit">Save Changes</Button>
                                                </Box>
                                            </form>
                                        </Box>
                                    </Box>
                                        )}

                                    {isEditBox2Visible ? (
                                        <Box className="editBox1 account-sectionbox">
                                            <Heading mt={10} className="account-login" as="h3" >
                                                Password
                                            </Heading>
                                            <Box mt={10} className="account-inner-box" >
                                                <Text fontWeight="600">
                                                    Current Password:
                                                </Text>
                                                <Text>
                                                    *********
                                                </Text>
                                                <Text onClick={toggleEditBoxVisibility2} className="account-edit-btn">
                                                    Edit
                                                </Text>
                                            </Box>
                                        </Box>
                                    ) : (
                                        <Box className="editBox2 account-sectionbox">
                                            <Heading mt={10} className="account-login" as="h3" >
                                                Change Login Email
                                            </Heading>
                                            <Box mt={10} borderBottom="1px solid #d0d0d0">
                                            </Box>
                                            <Box className="form-box-width" mt={10}>
                                                <form>
                                                    <FormControl className="acctSet-inputbox">
                                                        <FormLabel className="account-label" flex={1} pr={4}>Email Address</FormLabel>
                                                        <Text margin="0"> xyz@gmail.com</Text>
                                                    </FormControl>

                                                    <FormControl className="acctSet-inputbox">
                                                        <FormLabel className="account-label" flex={1} pr={4}>Current Password:</FormLabel>
                                                        <Input className="account-input" flex={2} type="password" />
                                                    </FormControl>

                                                    <FormControl className="acctSet-inputbox">
                                                        <FormLabel className="account-label" flex={1} pr={4}>New Password:</FormLabel>
                                                        <Input className="account-input" flex={2} type="password" />
                                                    </FormControl>

                                                    <FormControl className="acctSet-inputbox">
                                                        <FormLabel className="account-label" flex={1} pr={4}>Confirm New Password:</FormLabel>
                                                        <Input className="account-input" flex={2} type="password" />
                                                    </FormControl>
                                                    <Box className="acctSet-butbox" >
                                                        <Button onClick={toggleEditBoxVisibility2} mr={10} className="discard-btn" >Discard Changes</Button>
                                                        <Button className="account-save-btn" type="submit">Save Changes</Button>
                                                    </Box>
                                                </form>
                                            </Box>
                                        </Box>
                                    )}
                                </Box>
                            </Grid>
                        </Box>
                    </Flex>
                </GridItem>
                }
                {activeGridItem === 3 &&
                    <GridItem colSpan={1} bg='#fff'>
                        <Flex>
                            <Box width="100%">
                                <Grid className="list-grid">
                                    <Heading className="success-heading" as="h3">
                                        Address Book
                                    </Heading>
                                    <Box>
                                        <Text className="success-message">
                                            Congratulations, your autoparts.com account has been created,
                                            <Link href="/" className="bussiness-url">click here </Link>
                                            to go shopping.
                                    </Text>
                                    <Text  className="success-message" >
                                        An email will be sent to you shortly. If you do not receive an email, check your
                                        <span style={{fontWeight:"600"}}> &quot;Bulk/Junk Mail&quot; </span>
                                        folder to ensure that the email did not get flagged.
                                    </Text>
                                </Box>
                            </Grid>
                        </Box>
                    </Flex>
                </GridItem>
                }
            </Grid>
        </Box>
    );
};

export default AcctDash;
