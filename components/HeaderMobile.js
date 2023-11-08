// components/Header.js
import React, { useState , useRef, useEffect  } from 'react';
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
    IconButton, InputGroup, Input, InputRightElement, Icon, Collapse
} from '@chakra-ui/react';
import {
    AddIcon,
    ArrowUpDownIcon, DeleteIcon,
    EditIcon,
    ExternalLinkIcon,
    HamburgerIcon,
    RepeatIcon,
    SearchIcon
} from '@chakra-ui/icons';
import '../styles//global.css';
import AddVehicleModal from "./AddVehicleModal";

const HeaderMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    const closeNav = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                closeNav();
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    const [isDivOpen, setIsDivOpen] = useState(false);
    const divRef = useRef();
    const handleImageClick = () => {
        setIsDivOpen(!isDivOpen); // Toggle the state when the image is clicked
    };
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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onModalOpen = () => setIsModalOpen(true);
    const onModalClose = () => setIsModalOpen(false);
    return (
    <>

        <Box>
            <Flex className="mobile-header-top" >
                <Flex align="center">
                    <Link className="mobile-header-rightlinks" href="#">
                        Contact Us:
                    </Link>
                </Flex>
                <Flex align="center">
                    <Image src="/images/chat.png" alt="Image Alt Text" className="right-subheader-img" />
                    <Link className="mobile_sub-header-rightlinks" href="#">
                        Live Chat
                    </Link>
                </Flex>
                <Flex align="center">
                    <Link className="mobile_sub-header-rightlinks" ml={10} mr={10} color="grey" href="#">
                        or
                    </Link>
                </Flex>
                <Flex align="center">
                    <Image src="/images/phone.png" alt="Image Alt Text" className="right-subheader-img" />
                    <Link className="mobile_sub-header-rightlinks" href="#">
                        +1 434-123-6987
                    </Link>
                </Flex>
            </Flex>
        </Box>
        <Box className=" mobile-header-middle" >
            <Flex className="mobile-header-div">
                <Menu >
                    <Box className="search-by-category" ref={navRef}>
                        <IconButton
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                            border="none"
                            color="#808080"
                            fontSize="x-large"
                            mr={8}
                            onClick={toggleNav}
                        />
                        <Collapse in={isOpen} animateOpacity>
                            <Box
                                position="fixed"
                                top="0"
                                left={isOpen ? 0 : '-250px'}  // Adjust the width of the navigation bar as needed
                                width="250px"  // Set the desired width
                                height="100%"
                                backgroundColor="gray.900"  // Customize the background color
                                zIndex="99"  // Ensure it's on top of other content
                                transition="left 0.3s"
                            >
                                <nav className="main-nav">
                                    <ul className="main-nav-ul-top">
                                        <Text onClick={closeNav}
                                              style={{float: 'right', color: 'black', cursor: 'pointer'}}>
                                            x
                                        </Text>
                                        <li>
                                            <Image src="/images/chat.png" alt="Image Alt Text"
                                                   className="right-subheader-img"/>
                                            Live Chat
                                        </li>
                                        <li>
                                            <Image src="/images/phone.png" alt="Image Alt Text"
                                                   className="right-subheader-img"/>
                                            1-888-905-9199
                                        </li>
                                    </ul>
                                    <ul className="main-nav-ul">
                                        <Link display="flex" color="black" ml={0} textDecoration="none"
                                              justifyContent="space-between" href="/" className="mob-main-nav-li">
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
                                        <li>Toyota Accessories</li>
                                        <li>Resources and Links</li>
                                    </ul>
                                    <ul className="main-nav-ul-last" style={{borderBottom: "none"}}>
                                        <Link display="flex" color="black" textDecoration="none" alignItems="center"
                                              href="/signUp" className="main-nav-li">
                                            <Image mr={15} src="/images/logout.svg" alt="Image Alt Text"
                                                   className="right-subheader-img"/>
                                            Login/Register
                                        </Link>
                                        <li href="#" className="main-nav-li">
                                            <Image mr={15} src="/images/profile.png " alt="Image Alt Text"
                                                   className="right-subheader-img"/>
                                            My Account
                                        </li>
                                        <Link display="flex" color="black" textDecoration="none" alignItems="center"
                                              href="/TrackOrder" className="main-nav-li">
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

                        <Link mt={3} href="/">
                            <Box as="img" className="logo-img" src="/images/logo.png" alt="Logo"/>
                        </Link>
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

                <Flex align="center">
                    <div>
                        <Image onClick={handleImageClick} src="/images/black-car.png" alt="Image Alt Text"
                               className="right-subheader-img_mobile"/>
                        {isDivOpen && (
                            <div
                                ref={divRef}
                                style={{
                                    position: 'absolute',
                                    top: '75px', // Adjust the positioning as needed
                                    right: '20px',
                                    width: '245', // Set the desired width
                                    background: 'white',
                                    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                                    zIndex: '9',
                                    // Add other styles as needed
                                }}
                                onMouseLeave={handleMouseLeave}
                            >
                                {/* Content of the div */}
                                <p className="vehicle-list">Vehicle List</p>

                                <ul style={{padding:'0px',overflowY: 'auto',maxHeight:'250px'}}>
                                    <li className="no-vehicles"
                                        style={{alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            <input type="radio" id="other" name="gender" value="other"/>
                                            <label htmlFor="other">86</label>
                                        </div>
                                        <div>
                                            <DeleteIcon mr={15} w={20} h={20} color="grey"/>
                                        </div>
                                    </li>
                                    <li className="no-vehicles"
                                        style={{alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            <input type="radio" id="other" name="gender" value="other"/>
                                            <label htmlFor="other">Avalon</label>
                                        </div>
                                        <div>
                                            <DeleteIcon mr={15} w={20} h={20} color="grey"/>
                                        </div>
                                    </li>
                                    <li className="no-vehicles"
                                        style={{alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            <input type="radio" id="other" name="gender" value="other"/>
                                            <label htmlFor="other">C-HR</label>
                                        </div>
                                        <div>
                                            <DeleteIcon mr={15} w={20} h={20} color="grey"/>
                                        </div>
                                    </li>
                                    <li className="no-vehicles"
                                        style={{alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            <input type="radio" id="other" name="gender" value="other"/>
                                            <label htmlFor="other">Camry</label>
                                        </div>
                                        <div>
                                            <DeleteIcon mr={15} w={20} h={20} color="grey"/>
                                        </div>
                                    </li>
                                    <li className="no-vehicles"
                                        style={{alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            <input type="radio" id="other" name="gender" value="other"/>
                                            <label htmlFor="other">Celixa</label>
                                        </div>
                                        <div>
                                            <DeleteIcon mr={15} w={20} h={20} color="grey"/>
                                        </div>
                                    </li>
                                    <li className="no-vehicles"
                                        style={{alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            <input type="radio" id="other" name="gender" value="other"/>
                                            <label htmlFor="other">Corolla</label>
                                        </div>
                                        <div>
                                            <DeleteIcon mr={15} w={20} h={20} color="grey"/>
                                        </div>
                                    </li>
                                    <li className="no-vehicles"
                                        style={{alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            <input type="radio" id="other" name="gender" value="other"/>
                                            <label htmlFor="other">Corolla Cross</label>
                                        </div>
                                        <div>
                                            <DeleteIcon mr={15} w={20} h={20} color="grey"/>
                                        </div>
                                    </li>
                                    <li className="no-vehicles"
                                        style={{alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            <input type="radio" id="other" name="gender" value="other"/>
                                            <label htmlFor="other">Corolla iM</label>
                                        </div>
                                        <div>
                                            <DeleteIcon mr={15} w={20} h={20} color="grey"/>
                                        </div>
                                    </li>
                                    <li className="no-vehicles"
                                        style={{alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            <input type="radio" id="other" name="gender" value="other"/>
                                            <label htmlFor="other">Corona</label>
                                        </div>
                                        <div>
                                            <DeleteIcon mr={15} w={20} h={20} color="grey"/>
                                        </div>
                                    </li>
                                    <li className="no-vehicles"
                                        style={{alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            <input type="radio" id="other" name="gender" value="other"/>
                                            <label htmlFor="other">Cressida</label>
                                        </div>
                                        <div>
                                            <DeleteIcon mr={15} w={20} h={20} color="grey"/>
                                        </div>
                                    </li>
                                    <li className="no-vehicles"
                                        style={{alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            <input type="radio" id="other" name="gender" value="other"/>
                                            <label htmlFor="other">Echo</label>
                                        </div>
                                        <div>
                                            <DeleteIcon mr={15} w={20} h={20} color="grey"/>
                                        </div>
                                    </li>
                                    <li className="no-vehicles"
                                        style={{alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            <input type="radio" id="other" name="gender" value="other"/>
                                            <label htmlFor="other">FJ Cruiser</label>
                                        </div>
                                        <div>
                                            <DeleteIcon mr={15} w={20} h={20} color="grey"/>
                                        </div>
                                    </li>
                                </ul>
                                <div className="vehicle-list-box">
                                    <p onClick={onModalOpen} className="add-new-vehicle">Add New Vehicle</p>

                                    <p className="clear-all">Clear All</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <AddVehicleModal isOpen={isModalOpen} onClose={onModalClose} />
                    <Image src="/images/chat.png" alt="Image Alt Text" className="right-subheader-img_mobile"/>

                    <Image src="/images/phone.png" alt="Image Alt Text" className="right-subheader-img_mobile"/>
                </Flex>
            </Flex>
        </Box>

        <Box className="search-bar-mobile">
            <input className="search-placeholder_mobile" type="text" placeholder="Search by Part Number, Part Name, Description" />
        </Box>

    </>

);
};

export default HeaderMobile;
