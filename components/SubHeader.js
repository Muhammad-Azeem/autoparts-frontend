// components/Header.js
import React, { useState , useRef, useEffect  } from 'react';
import { useRouter } from 'next/router';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    IconButton,
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
    Collapse,
    Tooltip,
    CloseIcon,
} from '@chakra-ui/react';
import {
    AddIcon,
    ArrowUpDownIcon,
    EditIcon,
    ExternalLinkIcon,
    HamburgerIcon,
    RepeatIcon,
    TriangleDownIcon
} from '@chakra-ui/icons';
import '../styles//global.css';
import * as PropTypes from "prop-types";
import { DeleteIcon } from '@chakra-ui/icons';

import AddVehicleModal from "./AddVehicleModal";
import {
    clearAllGaragesFromCookie,
    getGarageFromCookie,
    removeGarageFromCookie,
    setGarageCookie
} from "./utility/cookies";
import {logout} from "./API/api";

function Backdrop(props) {
    return null;
}

Backdrop.propTypes = {
    onClick: PropTypes.func,
    in: PropTypes.bool,
    zIndex: PropTypes.string
};
const SubHeader = () => {
    const router = useRouter();
    const [isAbcVisible, setIsAbcVisible] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const toggleNav = () => {
        setIsOpen(!isOpen);
        setIsAbcVisible(!isAbcVisible);
        // setTimeout(() => {
        //     setIsAbcVisible(!isAbcVisible);
        // }, 315);
    };
    const closeNav = () => {
        setIsOpen(false);
        // document.body.style.opacity = "1";
        setIsAbcVisible(!isAbcVisible);
    };
    const [User, setUser] = useState();
    useEffect(() => {
        let temp= localStorage.getItem('user');

        temp = JSON.parse(temp);
        setUser(temp);

    }, []);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                closeNav();
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
            // document.body.style.opacity = "0.6";

        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);


//Div
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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onModalOpen = () => setIsModalOpen(true);
    const onModalClose = () => setIsModalOpen(false);

    //cookies


    const handleDeleteGarage = (id) => {
        removeGarageFromCookie(id);
        setGarage(getGarageFromCookie());
    };

    const [garage, setGarage] = useState(getGarageFromCookie());

    useEffect(() => {
        setGarage(getGarageFromCookie());
        console.log(garage, 'garata');
    }, [isDivOpen]); // Run only once on component mount

    const handleClearAllGarages = () => {
        clearAllGaragesFromCookie();
        setGarage([]); 
        window.location.reload();
        router.push('/');
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
    const handleRadioChange = (selectedIndex) => {
        const updatedGarageList = garage.map((garageEntry, index) => ({
            ...garageEntry,
            is_selected: index === selectedIndex,
        }));

        // Set is_selected to false for all other garages except the selected one
        updatedGarageList.forEach((garageEntry, index) => {
            if (index !== selectedIndex) {
                garageEntry.is_selected = false;
            }
        });

        // Sort the updated garage list to display the selected garage on top
        updatedGarageList.sort((a, b) => (a.is_selected ? -1 : b.is_selected ? 1 : 0));
        // Update the cookie with the updated garage list
        setGarageCookie(updatedGarageList);
        window.location.reload();
    };
    return (
        <Flex className="sub-header">
            <div className={`abc ${isAbcVisible ? 'visible' : 'hidden'}`}></div>
            <Menu>
                <Box className="search-by-category" ref={navRef}>
                    <IconButton
                        aria-label='Options'
                        icon={<HamburgerIcon/>}
                        variant='outline'
                        border="none"
                        color="red"
                        fontSize="x-large"
                        mr={8}
                        onClick={toggleNav}
                        className="HamburgerIcon"
                    />
                    <Collapse in={isOpen} animateOpacity>
                        <Box
                            className="zindex"
                            position="fixed"
                            top="0"
                            left={isOpen ? 0 : '-250px'}  // Adjust the width of the navigation bar as needed
                            width="310px"  // Set the desired width
                            height="100%"
                            backgroundColor="gray.900"  // Customize the background color
                            // zIndex="99"  // Ensure it's on top of other content
                            transition="left 0.3s"
                        >
                            <nav className="main-nav">
                                <ul className="main-nav-ul-top">
                                    <Text onClick={closeNav}  style={{float:'right',color:'black',cursor:'pointer'}}>
                                        x
                                    </Text>
                                    <li className="main-nav-li">
                                        <Image mr={15} src="/images/chat.png" alt="Image Alt Text"
                                               className="right-subheader-img"/>
                                        Live Chat
                                    </li>
                                    <li className="main-nav-li">
                                        <Image mr={15} src="/images/phone.png" alt="Image Alt Text"
                                               className="right-subheader-img"/>
                                        1-888-905-9199
                                    </li>
                                </ul>
                                <ul className="main-nav-ul-middle">
                                    <Link display="flex" color="black" textDecoration="none" justifyContent="space-between" href="/" className="main-nav-li">
                                        Toyota Parts
                                        <span className="chevron-icon">
                                            {/* Include your SVG chevron icon here */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-chevron-right"
                                                viewBox="0 0 16 16"
                                            >
                                              <path
                                                  fillRule="evenodd"
                                                  d="M5.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L8.586 8 5.293 4.707a1 1 0 010-1.414z"
                                              />
                                            </svg>
                                          </span>
                                    </Link>
                                    <li href="#" className="main-nav-li">Toyota Accessories</li>
                                    <li href="#" className="main-nav-li">Resources and Links</li>
                                </ul>
                                <ul className="main-nav-ul-last" style={{borderBottom: "none"}}>
                                    {
                                        User ? (
                                            <Link display="flex" color="black" textDecoration="none" alignItems="center" href="#"  onClick={handleLogout} className="main-nav-li">
                                                <Image mr={15} src="/images/logout.svg" alt="Image Alt Text"
                                                       className="right-subheader-img"/>
                                                Logout
                                            </Link>
                                        )          : (
                                            <Link display="flex" color="black" textDecoration="none" alignItems="center" href="/signUp" className="main-nav-li">
                                                <Image mr={15} src="/images/logout.svg" alt="Image Alt Text"
                                                       className="right-subheader-img"/>
                                                Login/Register
                                            </Link>

                                        )
                                    }
                                    <Link display="flex" color="black" textDecoration="none" alignItems="center" href="/AccountDashboard" className="main-nav-li">
                                        <Image mr={15} src="/images/profile.png " alt="Image Alt Text"
                                               className="right-subheader-img"/>
                                        My Account
                                    </Link>
                                    <Link display="flex" color="black" textDecoration="none" alignItems="center" href="/TrackOrder" className="main-nav-li">
                                        <Image mr={15} src="/images/track.jpg " alt="Image Alt Text"
                                               className="right-subheader-img"/>
                                        Track Order
                                    </Link>
                                    <li href="#" className="main-nav-li">
                                        <Image mr={15} src="/images/help.png " alt="Image Alt Text"
                                               className="right-subheader-img"/>
                                        Help Center
                                    </li>
                                    <li href="#" className="main-nav-li">
                                        <Image src="/images/email.jpg " alt="Image Alt Text"
                                               className="right-subheader-img"/>
                                        Contact Us
                                    </li>
                                </ul>
                            </nav>
                        </Box>
                    </Collapse>
                    <Text className="search-by-category-text">Shop by Category</Text>
                </Box>
                <MenuList>
                    <MenuItem icon={<AddIcon/>} command='⌘T'>
                        New Tab
                    </MenuItem>
                    <MenuItem icon={<ExternalLinkIcon/>} command='⌘N'>
                        New Window
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon/>} command='⌘⇧N'>
                        Open Closed Tab
                    </MenuItem>
                    <MenuItem icon={<EditIcon/>} command='⌘O'>
                        Open File...
                    </MenuItem>
                </MenuList>
            </Menu>
            <Box>
                <Link className="sub-header-links" href="/">
                    Toyota Parts
                </Link>
                <Link className="sub-header-links" href="#">
                    Toyota Accesories
                </Link>
                <Link className="sub-header-links" href="#">
                    Resource and Links
                </Link>
                <Link className="sub-header-links" href="#">
                    Location
                </Link>
            </Box>
            <div>
                <Flex align="center" onMouseEnter={() => setIsDivOpen(true)}>
                    <Image src="/images/black-car.png" alt="Image Alt Text" className="right-subheader-img"/>
                    <Link className="sub-header-rightlinks" href="#">
                        My Garage
                    </Link>
                </Flex>
                {isDivOpen && (
                    <div
                        ref={divRef}
                        style={{
                            position: 'absolute',
                            top: '140px', // Adjust the positioning as needed
                            right: '200px',
                            width: '400px', // Set the desired width
                            background: 'white',
                            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                            zIndex: '9',
                            // Add other styles as needed
                        }}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Content of the div */}
                        <p className="vehicle-list">Vehicle List</p>
                        <ul style={{ padding: '0px', overflowY: 'auto', maxHeight: '250px' }}>
                            {garage.length > 0 ? (
                                garage.map((garageEntry, index) => (
                                    <li
                                        key={garageEntry.id}
                                        className="no-vehicles"
                                        style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}
                                    >
                                        <div>
                                            <input type="radio" id={garageEntry.id} value={garageEntry.name} name='garage'   checked={garageEntry.is_selected}  onChange={() => handleRadioChange(index)} />
                                            <label htmlFor={garageEntry.id}>
                                                {garageEntry.company} {garageEntry.model} {garageEntry.year}
                                            </label>
                                        </div>
                                        <div>
                                            <DeleteIcon mr={15} w={20} h={20} color="grey" onClick={() => handleDeleteGarage(garageEntry.id)} />
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li className="no-vehicles" style={{ textAlign: 'center' }}>
                                    No vehicles in the garage
                                </li>
                            )}
                        </ul>
                        <div className="vehicle-list-box">
                            <p onClick={onModalOpen} className="add-new-vehicle">Add New Vehicle</p>

                            <p className="clear-all" onClick={handleClearAllGarages} >Clear All</p>
                        </div>
                    </div>
                )}
            </div>
            <AddVehicleModal isOpen={isModalOpen} onClose={onModalClose} />
            <Flex align="center">
                <Image src="/images/chat.png" alt="Image Alt Text" className="right-subheader-img"/>
                <Link className="sub-header-rightlinks" href="#">
                    Live Chat
                </Link>
            </Flex>
            <Flex align="center">
                <Image src="/images/phone.png" alt="Image Alt Text" className="right-subheader-img"/>
                <Link className="sub-header-rightlinks" href="#">
                    +1 434-123-6987
                </Link>
            </Flex>
        </Flex>

    );
};

export default SubHeader;
