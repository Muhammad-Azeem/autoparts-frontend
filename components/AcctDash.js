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
import {
    checkAuth,
    deleteAddressBook,
    getAddressesByUserId, getOrdersByUserId,
    register,
    storeAddressBook,
    updateAddressBook
} from '../components/API/api'
import {ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {changeEmail} from './API/api';

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
    const [addresses, setAddresses]  = useState([]);
    const getAddress = async (id) => {
        const data = await getAddressesByUserId(id)
        setAddresses(data);
    }
    const getOrders = async (id) => {
        const data = await getOrdersByUserId(id)
        setOrders(data);
    }
    const [orders, setOrders] = useState([]);

    useEffect(  () => {
        let temp= localStorage.getItem('user');

        temp = JSON.parse(temp);
        setUser(temp);
        setCurrentEmail(temp.email)
        getAddress(temp.id);
        getOrders(temp.id)
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

    const scrollToForm = () => {
        const formElement = document.getElementById('yourFormId'); // Replace 'yourFormId' with the actual ID of your form
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const [isBoxVisible, setBoxVisibility] = useState(false);

    const [formData, setFormData] = useState({
        country: '',
        first_name: '',
        last_name: '',
        company: '',
        city: '',
        address_1: '',
        address_2: '',
        is_default: false,
        user_id: null,
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        console.log(value,formData);
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
    const [activeAddressBookId, setActiveAddressBookId] = useState(0)

    const handleButtonClick = async (event) => {
        event.preventDefault();
        try {
            formData.user_id = user.id;
            if(activeAddressBookId){
                const data = await updateAddressBook(activeAddressBookId, formData);
                setActiveAddressBookId(0)
                setFormData({
                    country: '',
                    first_name: '',
                    last_name: '',
                    company: '',
                    city: '',
                    address_1: '',
                    address_2: '',
                    is_default: false,
                    user_id: null,
                })
            }
            else {
                const response = await storeAddressBook(formData);
            }
            getAddress(user.id);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleAddressDelete = async (id) => {
        const response = await deleteAddressBook(id);
        getAddress(user.id);
    }
    const handleAddressEdit = async (selectedAddress) => {
        setActiveAddressBookId(selectedAddress.id)
        setFormData(selectedAddress)
    }
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
                            <Box onClick={() => setActiveGridItem(1)} className="success-leftside-box">
                                    Dashboard
                            </Box>
                            <Box onClick={() => setActiveGridItem(2)} className="success-leftside-box">
                                Order History
                            </Box>
                            <Box onClick={() => setActiveGridItem(3)} className="success-leftside-box">
                                Account Setting
                            </Box>
                            <Box onClick={() => setActiveGridItem(4)} className="success-leftside-box">
                                Address Book
                            </Box>
                        </Box>


                        <Box position="sticky" top="0px" mt={15} border="1px solid #b0b0b0" alignItems="center">
                            {/*<Text  className="vm-leftside-heading" size="lg">*/}
                            {/*    Help Center*/}
                            {/*</Text>*/}
                            <Box
                                className="vm-leftside-box" fontSize="small" color="grey">
                                Contact Us
                            </Box>
                            {/*<Box*/}
                            {/*    className="vm-leftside-box" fontSize="small" color="grey">*/}
                            {/*    Help Center*/}
                            {/*</Box>*/}
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
                                    <Box className="horizontal-listbox">
                                        <Text className="horizontal-listmenu" fontSize='20px' fontWeight='bold' mr={5}>Account Info</Text>
                                    </Box>
                                    <Text fontWeight='bold' ml={25}>
                                        Login Email:
                                        <span style={{fontWeight:'normal', marginLeft:'15px'}}>
                                             {user.email}
                                        </span>
                                    </Text>
                                    <Text fontWeight='bold' ml={25}>
                                        Shipping Address
                                        <span style={{fontWeight:'normal', marginLeft:'15px'}}>
                                             {user.bussiness_address1},
                                             {user.bussiness_address2}
                                        </span>
                                    </Text>
                                    <Box className="horizontal-listbox" style={{borderTop: '1px solid #d0d0d0',borderBottom:'none'}}>
                                        <Text className="horizontal-listmenu" fontSize='20px' fontWeight='bold' mr={5}>
                                            Recent Orders
                                                <span className='view-more-orders'>
                                                    (view more)
                                                </span>
                                            </Text>
                                    </Box>
                                    <TableContainer>
                                        { orders.length ? (
                                            <Table variant='simple'  borderBottom="2px solid #dfdfdf">
                                                <Thead background="#dfdfdf" >
                                                    <Tr>
                                                        <Th width="150px">Sr.</Th>
                                                        <Th width="250px" textAlign="left">User</Th>
                                                        <Th width="150px" textAlign="center">Status</Th>
                                                        <Th width="150px" textAlign="center">Shipment Cost</Th>
                                                        <Th width="150px" textAlign="right">Subtotal</Th>
                                                        <Th width="150px" textAlign="right">Total</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    { orders.map((order, index) => (
                                                        <Tr  key={index} mt={15} style={{ marginTop: '10px' }}>
                                                            <Td textAlign="center">
                                                                {index+1}
                                                            </Td>
                                                            <Td width="250px" textAlign="left">
                                                                {order.user.first_name}
                                                                <br/>
                                                                <b>{order.user.email}</b>
                                                                <br/>

                                                            </Td>
                                                            <Td width="150px" textAlign="center">
                                                                {order.status}
                                                            </Td>
                                                            <Td width="150px" textAlign="center">
                                                                {order.shipment_cost}
                                                            </Td>
                                                            <Td width="150px" textAlign="right">
                                                                {order.sub_total}
                                                            </Td>
                                                            <Td width="150px" textAlign="right">
                                                                {order.total}
                                                            </Td>
                                                        </Tr>

                                                    ))
                                                    }
                                                </Tbody>
                                            </Table>
                                        ) :
                                            (
                                                <div>
                                                    <Text padding="0px 30px">
                                                        No available sales order!
                                                    </Text>
                                                </div>
                                            )
                                        }
                                    </TableContainer>
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
                                       <>
                                           <TableContainer>
                                               { orders.length ? (
                                                       <Table variant='simple'  borderBottom="2px solid #dfdfdf">
                                                           <Thead background="#dfdfdf" >
                                                               <Tr>
                                                                   <Th width="150px">Sr.</Th>
                                                                   <Th width="250px" textAlign="left">User</Th>
                                                                   <Th width="150px" textAlign="center">Status</Th>
                                                                   <Th width="150px" textAlign="center">Shipment Cost</Th>
                                                                   <Th width="150px" textAlign="right">Subtotal</Th>
                                                                   <Th width="150px" textAlign="right">Total</Th>
                                                               </Tr>
                                                           </Thead>
                                                           <Tbody>
                                                               { orders.map((order, index) => (
                                                                   <Tr  key={index} mt={15} style={{ marginTop: '10px' }}>
                                                                       <Td textAlign="center">
                                                                           {index+1}
                                                                       </Td>
                                                                       <Td width="250px" textAlign="left">
                                                                           {order.user.first_name}
                                                                           <br/>
                                                                           <b>{order.user.email}</b>
                                                                           <br/>

                                                                       </Td>
                                                                       <Td width="150px" textAlign="center">
                                                                           {order.status}
                                                                       </Td>
                                                                       <Td width="150px" textAlign="center">
                                                                           {order.shipment_cost}
                                                                       </Td>
                                                                       <Td width="150px" textAlign="right">
                                                                           {order.sub_total}
                                                                       </Td>
                                                                       <Td width="150px" textAlign="right">
                                                                           {order.total}
                                                                       </Td>
                                                                   </Tr>

                                                               ))
                                                               }
                                                           </Tbody>
                                                       </Table>
                                                   ) :
                                                   (
                                                       <div>
                                                       <Text padding="0px 30px">
                                                           Your order list is empty
                                                       </Text>
                                                   </div>
                                                   )
                                               }
                                           </TableContainer>

                                       </>
                                    )}

                                    {showTable2 && (
                                     <>
                                         <TableContainer>
                                             { orders.length ? (
                                                     <Table variant='simple'  borderBottom="2px solid #dfdfdf">
                                                         <Thead background="#dfdfdf" >
                                                             <Tr>
                                                                 <Th width="150px">Sr.</Th>
                                                                 <Th width="250px" textAlign="left">User</Th>
                                                                 <Th width="150px" textAlign="center">Status</Th>
                                                                 <Th width="150px" textAlign="center">Shipment Cost</Th>
                                                                 <Th width="150px" textAlign="right">Subtotal</Th>
                                                                 <Th width="150px" textAlign="right">Total</Th>
                                                             </Tr>
                                                         </Thead>
                                                         <Tbody>
                                                             { orders.map((order, index) => (
                                                                 <Tr  key={index} mt={15} style={{ marginTop: '10px' }}>
                                                                     <Td textAlign="center">
                                                                         {index + 1}
                                                                     </Td>
                                                                     <Td width="250px" textAlign="left">
                                                                         {order.user.first_name}
                                                                         <br/>
                                                                         <b>{order.user.email}</b>
                                                                         <br/>

                                                                     </Td>
                                                                     <Td width="150px" textAlign="center">
                                                                         {order.status}
                                                                     </Td>
                                                                     <Td width="150px" textAlign="center">
                                                                         {order.shipment_cost}
                                                                     </Td>
                                                                     <Td width="150px" textAlign="right">
                                                                         {order.sub_total}
                                                                     </Td>
                                                                     <Td width="150px" textAlign="right">
                                                                         {order.total}
                                                                     </Td>
                                                                 </Tr>

                                                             ))
                                                             }
                                                         </Tbody>
                                                     </Table>
                                                 ) :
                                                 (<div>
                                                     <Text padding="0px 30px">
                                                         Your canceled order list is empty
                                                     </Text>
                                                 </div>)
                                             }
                                         </TableContainer>
                                     </>
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
                                            {/*<Text onClick={toggleEditBoxVisibility} className="account-edit-btn">*/}
                                            {/*    Edit*/}
                                            {/*</Text>*/}
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
                                                Change Password
                                            </Heading>
                                            <Box mt={10} borderBottom="1px solid #d0d0d0">
                                            </Box>
                                            <Box className="form-box-width" mt={10}>
                                                <form>
                                                    <FormControl className="acctSet-inputbox">
                                                        <FormLabel className="account-label" flex={1} pr={4}>Email Address</FormLabel>
                                                        <Text margin="0">    {user.email}</Text>
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

                {activeGridItem === 4 &&
                    <GridItem  colSpan={1} bg='#fff'>
                        <Flex>
                            <Box width="100%">
                                <Grid className="list-grid" >
                                    <Heading className="account-setting-heading" as="h3" >
                                       Address Book
                                    </Heading>
                                    <Box>
                                        <Text  className="account-subhead" >
                                            Manage your shipping addresses.
                                            <span  onClick={scrollToForm} className="bussiness-url">
                                                Add a New Shipping Address
                                            </span>
                                        </Text>
                                        {(isBoxVisible || addresses) && (
                                        <Box className="editBox3 account-sectionbox">
                                                <Heading mt={10} className="account-login" as="h3" >
                                                    Shipping Address
                                                </Heading>
                                                <Box mt={10} borderBottom="1px solid #d0d0d0">
                                                </Box>
                                                <Box className="form-box-width" >
                                                    {
                                                        addresses.map((address, index) => (
                                                            <Box key={index} className='inner-shipAdrs-box'   mt={10}>
                                                                {address.country &&
                                                                    <Text className="account-label">
                                                                        {address.country}
                                                                    </Text>
                                                                }
                                                                {address.first_name &&
                                                                    <Text className="account-label">
                                                                        {address.first_name}
                                                                </Text>
                                                                }
                                                                {address.last_name &&
                                                                    <Text className="account-label">
                                                                        {address.last_name}
                                                                </Text>
                                                                }
                                                                {address.company &&
                                                                    <Text className="account-label">
                                                                        {address.company}
                                                                    </Text>
                                                                }
                                                                {address.city &&
                                                                    <Text className="account-label">
                                                                        {address.city}
                                                                    </Text>
                                                                }
                                                                {address.address_1 &&
                                                                    <Text className="account-label">
                                                                        {address.address_1}
                                                                    </Text>
                                                                }
                                                                {address.address_2 &&
                                                                    <Text className="account-label">
                                                                        {address.address_2}
                                                                    </Text>
                                                                }


                                                                <Box display='flex'>
                                                                    <Link className="account-link" onClick={() => handleAddressEdit(address)}>
                                                                        Edit
                                                                    </Link>
                                                                    <Link ml={10} className="account-link" onClick={() => handleAddressDelete(address.id)}>
                                                                        Delete
                                                                    </Link>
                                                                    { !address.is_default && (
                                                                        <Link ml={10} className="account-link">
                                                                            Make as default
                                                                        </Link>
                                                                    )
                                                                    }
                                                                </Box>
                                                            </Box>

                                                        ))
                                                    }
                                                </Box>
                                            </Box>
                                        )}

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
                                                    <form id="yourFormId">
                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1}
                                                                       pr={4}>Country/Territory:</FormLabel>
                                                            <Input name={'country'} className="account-input" flex={2} type="text" value={formData.country} onChange={handleChange} />
                                                        </FormControl>

                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1} pr={4}>First
                                                                Name:</FormLabel>
                                                            <Input name={'first_name'} className="account-input" flex={2} type="text" value={formData.first_name} onChange={handleChange} />
                                                        </FormControl>

                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1} pr={4}>Last
                                                                Name:</FormLabel>
                                                            <Input name={'last_name'} className="account-input" flex={2} type="text" value={formData.last_name} onChange={handleChange} />
                                                        </FormControl>

                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1}
                                                                       pr={4}>Company:</FormLabel>
                                                            <Input name={'company'} className="account-input" flex={2} type="text" value={formData.company} onChange={handleChange} />
                                                        </FormControl>

                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1}
                                                                       pr={4}>City:</FormLabel>
                                                            <Input name={'city'} className="account-input" flex={2} type="text"  value={formData.city} onChange={handleChange} />
                                                        </FormControl>



                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1} pr={4}>Address
                                                                line 1:</FormLabel>
                                                            <Input name={'address_1'} className="account-input" flex={2} type="text" value={formData.address_1} onChange={handleChange} />
                                                        </FormControl>

                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel className="account-label" flex={1} pr={4}>Address
                                                                line 2:</FormLabel>
                                                            <Input name={'address_2'} className="account-input" flex={2} type="text" value={formData.address_2} onChange={handleChange} />
                                                        </FormControl>

                                                        <FormControl className="acctSet-inputbox">
                                                            <FormLabel mt={10} mb={10} textAlign="center" className="shippingCheckbox-label" flex={1} pr={4}>
                                                                <Input name={'is_default'} className="shippingCheckbox-input" flex={2} type="checkbox" checked={formData.is_default} onChange={handleChange} />
                                                                <span>Set as my default address</span>
                                                            </FormLabel>


                                                        </FormControl>

                                                        <Box className="acctSet-butbox">
                                                            <Button onClick={toggleEditBoxVisibility} mr={10}
                                                                    className="discard-btn">Discard Changes</Button>
                                                            <Button onClick={handleButtonClick} className="account-save-btn" >
                                                                Save Changes
                                                            </Button>
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
    // eslint-disable-next-line react/display-name
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
