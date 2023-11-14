// components/Header.js
import React, {useRef, useState, useEffect} from 'react';
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
    Center,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    ListItem,
    List,
    Icon,
    FormControl,
    FormLabel,
    TableContainer,
    Table, TableCaption, Thead, Th, Tr, Tbody, Td
} from '@chakra-ui/react';
import '../styles//global.css';
import {checkAuth, register} from '../components/API/api'
import {ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {changeEmail} from './API/api'
const AcctDash = () => {
    const [currentEmail, setCurrentEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [error, setError] = useState('');

    const displayErrorAndHide = () => {
        setTimeout(() => {
            setError('');
        }, 10000);
    };

    useEffect(() => {
        let temp= localStorage.getItem('user');

        temp = JSON.parse(temp); 
        setUser(temp);
        setCurrentEmail(temp.email)
        // console.log(JSON.parse(temp));
    }, []);

    const handleChangeEmail = async (e) => {
        e.preventDefault();

        // Form validation
        if (newEmail !== confirmEmail) {
            setError("Emails don't match");
            displayErrorAndHide();
            return;
        }

    
        // Send the form data to your backend for validation and update
        try {
            const userData = { currentEmail, newEmail, password };
            let response = await changeEmail(userData);
            console.log('rest', response)
            // await router.push('/login'); // Redirect to the login page after successful registration
        } catch (error) {
            console.error('Email Updation failed:', error);
            setError('Email Updation failed. Please try again.');
            displayErrorAndHide();
        }
    };


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

    const [showTable1, setShowTable1] = useState(true);
    const [showTable2, setShowTable2] = useState(false);
    const [orangeBarStyle, setOrangeBarStyle] = useState({
        width: '60px',
        left: '25px',
    });

    const showTableOne = () => {
        setShowTable1(true);
        setShowTable2(false);
        setOrangeBarStyle({ width: '60px', left: '25px' });
    };

    const showTableTwo = () => {
        setShowTable1(false);
        setShowTable2(true);
        setOrangeBarStyle({ width: '123px', left: '85px' });
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

                <Menu className="menu-show" >
                    <MenuButton className="menu-show endbar-topsection-input2" as={Button} rightIcon={<ChevronDownIcon />}>
                        -- Select Category --
                    </MenuButton>
                    <MenuList zIndex={3} >
                        <MenuItem   className="menu-item">
                            <Link className="success-leftside-link"  href="/">
                                Dashboard
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={() => setActiveGridItem(1)} className="menu-item">Order History</MenuItem>
                        <MenuItem onClick={() => setActiveGridItem(2)} className="menu-item">Account Setting</MenuItem>
                        <MenuItem onClick={() => setActiveGridItem(3)}  className="menu-item">Address Book</MenuItem>
                    </MenuList>
                </Menu>


                {activeGridItem === 1 &&
                <GridItem  colSpan={1} bg='#fff'>
                    <Flex>
                        <Box width="100%">
                            <Grid className="list-grid" >
                                    <Heading className="success-heading" as="h3" >
                                        Order History
                                    </Heading>
                                    <Box className="horizontal-listbox">
                                        <Text className="horizontal-listmenu" mr={5} onClick={showTableOne}>Orders</Text>
                                        <Text className="horizontal-listmenu"   onClick={showTableTwo}>Canceled Orders</Text>
                                        <Box  style={{
                                            width: orangeBarStyle.width,
                                            left: orangeBarStyle.left,
                                        }} className="orange-bar">
                                    </Box>


                                </Box>
                                <Box>
                                    {showTable1 && (
                                        // <Table>
                                        //     <Thead>
                                        //         <Tr>
                                        //             <Th>Table 1 Header</Th>
                                        //         </Tr>
                                        //     </Thead>
                                        //     <Tbody>
                                        //         <Tr>
                                        //             <Td>Table 1 Data</Td>
                                        //         </Tr>
                                        //     </Tbody>
                                        // </Table>
                                        <Text padding="0px 30px">
                                            Your order list is empty
                                        </Text>
                                    )}

                                    {showTable2 && (
                                        // <Table>
                                        //     <Thead>
                                        //         <Tr>
                                        //             <Th>Table 2 Header</Th>
                                        //         </Tr>
                                        //     </Thead>
                                        //     <Tbody>
                                        //         <Tr>
                                        //             <Td>Table 2 Data</Td>
                                        //         </Tr>
                                        //     </Tbody>
                                        // </Table>
                                        <Text padding="0px 30px">
                                            Your canceled orders list is empty
                                        </Text>
                                    )}
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
                                            <Text >
                                               {user.email}
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
                                        {error && (
                                            <p style={{ color: 'red' }}>{error}</p>
                                        )}
                                        <Box mt={10} borderBottom="1px solid #d0d0d0">
                                        </Box>
                                        <Text className="log-subhead">
                                            This Email Address will be used to login to your account.
                                        </Text>
                                        <Box className="form-box-width"  mt={10}>
                                            <form>
                                                <FormControl className="acctSet-inputbox">
                                                    <FormLabel className="account-label" flex={1} pr={4}>Current Email</FormLabel>
                                                    <Text margin="0">
                                                        {user.email}
                                                    </Text>
                                                </FormControl>

                                                <FormControl className="acctSet-inputbox">
                                                    <FormLabel className="account-label" flex={1} pr={4}>New Email:</FormLabel>
                                                    <Input className="account-input" flex={2} type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                                                </FormControl>

                                                <FormControl className="acctSet-inputbox">
                                                    <FormLabel className="account-label" flex={1} pr={4}>Confirm New Email:</FormLabel>
                                                    <Input className="account-input" flex={2} type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
                                                </FormControl>

                                                <FormControl className="acctSet-inputbox">
                                                    <FormLabel className="account-label" flex={1} pr={4}>Password:</FormLabel>
                                                    <Input className="account-input" flex={2} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                </FormControl>
                                                <Box className="acctSet-butbox">
                                                    <Button onClick={toggleEditBoxVisibility} mr={10} className="discard-btn" >Discard Changes</Button>
                                                    <Button onClick={handleChangeEmail} className="account-save-btn" type="button">Save Changes</Button>
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
                    <GridItem  colSpan={1} bg='#fff'>
                        <Flex>
                            <Box width="100%">
                                <Grid className="list-grid" >
                                    <Heading className="account-setting-heading" as="h3" >
                                        Account Settings
                                    </Heading>
                                    <Box>
                                        <Text  className="account-subhead" >
                                            Manage your shipping addresses.
                                            <span className="bussiness-url">
                                                Add a Shipping New Address
                                            </span>
                                        </Text>

                                            <Box className="editBox2 account-sectionbox">
                                                <Heading mt={10} className="account-login" as="h3" >
                                                    Add a New Shipping Address
                                                    <span style={{color:'grey' , fontWeight:'200'}}>
                                                         (English Only)
                                                    </span>
                                                </Heading>
                                                <Box mt={10} borderBottom="1px solid #d0d0d0">
                                                </Box>
                                                <Box className="form-box-width"  mt={10}>
                                                    <form>
                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1}
                                                                       pr={4}>Country/Territory:</FormLabel>
                                                            <Input className="account-input" flex={2} type="text"/>
                                                        </FormControl>

                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1} pr={4}>First
                                                                Name:</FormLabel>
                                                            <Input className="account-input" flex={2} type="text"/>
                                                        </FormControl>

                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1} pr={4}>Last
                                                                Name:</FormLabel>
                                                            <Input className="account-input" flex={2} type="text"/>
                                                        </FormControl>

                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1}
                                                                       pr={4}>Company:</FormLabel>
                                                            <Input className="account-input" flex={2} type="text"/>
                                                        </FormControl>

                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1}
                                                                       pr={4}>City:</FormLabel>
                                                            <Input className="account-input" flex={2} type="text"/>
                                                        </FormControl>

                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1}
                                                                       pr={4}>State/Province:</FormLabel>
                                                            <Input className="account-input" flex={2} type="text"/>
                                                        </FormControl>

                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1}
                                                                       pr={4}>Zipcode/Postalcode:</FormLabel>
                                                            <Input className="account-input" flex={2} type="text"/>
                                                        </FormControl>

                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1} pr={4}>Address
                                                                line 1:</FormLabel>
                                                            <Input className="account-input" flex={2} type="text"/>
                                                        </FormControl>

                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1} pr={4}>Address
                                                                line 2:</FormLabel>
                                                            <Input className="account-input" flex={2} type="text"/>
                                                        </FormControl>

                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1}
                                                                       pr={4}>Phone:</FormLabel>
                                                            <Input className="account-input" flex={2} type="text"/>
                                                        </FormControl>
                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1} pr={4}>Save
                                                                Address As (Optional):</FormLabel>
                                                            <Input className="account-input" flex={2} type="text"/>
                                                        </FormControl>
                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel mt={10} mb={10} textAlign="center" className="shippingCheckbox-label" flex={1} pr={4}>
                                                                <Input className="shippingCheckbox-input" flex={2} type="checkbox"/>
                                                                <span>Set as my default address</span>
                                                            </FormLabel>


                                                        </FormControl>

                                                        <Box className="acctSet-butbox">
                                                            <Button onClick={toggleEditBoxVisibility} mr={10}
                                                                    className="discard-btn">Discard Changes</Button>
                                                            <Button className="account-save-btn" type="submit">Save
                                                                Changes</Button>
                                                        </Box>
                                                    </form>
                                                </Box>
                                            </Box>

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

const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();

        useEffect(() => {
            const checkAuthentication = async () => {
                try {
                    await checkAuth();
                } catch (error) {
                    router.push('/signUp'); // Redirect to the login page if not authenticated
                }
            };

            checkAuthentication();
        }, []);

        return <WrappedComponent {...props} />;
    };
};
export default withAuth(AcctDash);
