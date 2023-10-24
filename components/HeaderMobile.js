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
    ArrowUpDownIcon,
    EditIcon,
    ExternalLinkIcon,
    HamburgerIcon,
    RepeatIcon,
    SearchIcon
} from '@chakra-ui/icons';
import '../styles//global.css';

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
    return (
    <>

        <Box>
            <Flex className="mobile-header-top" >
                <Flex align="center">
                    <Link className="mobile-header-rightlinks" href="https://example.com">
                        Contact Us:
                    </Link>
                </Flex>
                <Flex align="center">
                    <Image src="/images/chat.png" alt="Image Alt Text" className="right-subheader-img" />
                    <Link className="mobile_sub-header-rightlinks" href="https://example.com">
                        Live Chat
                    </Link>
                </Flex>
                <Flex align="center">
                    <Link className="mobile_sub-header-rightlinks" ml={10} mr={10} color="grey" href="https://example.com">
                        or
                    </Link>
                </Flex>
                <Flex align="center">
                    <Image src="/images/phone.png" alt="Image Alt Text" className="right-subheader-img" />
                    <Link className="mobile_sub-header-rightlinks" href="https://example.com">
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
                                        <li>Toyota Parts</li>
                                        <li>Toyota Accessories</li>
                                        <li>Resources and Links</li>
                                    </ul>
                                    <ul className="main-nav-ul" style={{borderBottom: "none"}}>
                                        <li>Login/Register</li>
                                        <li>My Account</li>
                                        <li>Track Order</li>
                                        <li>Help Center</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </nav>
                            </Box>
                        </Collapse>

                        <Text className="search-by-category-text">ToyotaPartsDeal.com</Text>
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
                    <Image src="/images/black-car.png" alt="Image Alt Text" className="right-subheader-img_mobile"/>

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
