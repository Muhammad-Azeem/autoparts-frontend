// components/Header.js
import React from 'react';
import {IconButton,Box,Container, Image,Text, Flex, Link, Button, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
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

const SubHeader = () => {
    return (
        <Flex className="sub-header" >
            <Menu>
                <Box className="search-by-category">
                    <IconButton
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                        border="none"
                        color="red"
                        fontSize="x-large"
                        mr={8}
                    />
                    <Text className="search-by-category-text"  >Shop by Category</Text>
                </Box>
                <MenuList>
                    <MenuItem icon={<AddIcon />} command='⌘T'>
                        New Tab
                    </MenuItem>
                    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                        New Window
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                        Open Closed Tab
                    </MenuItem>
                    <MenuItem icon={<EditIcon />} command='⌘O'>
                        Open File...
                    </MenuItem>
                </MenuList>
            </Menu>

            <Link className="sub-header-links"  href="https://example.com">
                Toyota Parts
            </Link>
            <Link className="sub-header-links" href="https://example.com">
                Toyota Accesories
            </Link>
            <Link className="sub-header-links" href="https://example.com">
                Resource and Links
            </Link>
            <Link className="sub-header-links" href="https://example.com">
                Location
            </Link>
            <Flex align="center">
                <Image src="/images/black-car.png" alt="Image Alt Text" className="right-subheader-img" />
                <Link className="sub-header-rightlinks" href="https://example.com">
                    My Garage
                </Link>
            </Flex>
            <Flex align="center">
                <Image src="/images/chat.png" alt="Image Alt Text" className="right-subheader-img" />
                <Link className="sub-header-rightlinks" href="https://example.com">
                    Live Chat
                </Link>
            </Flex>
            <Flex align="center">
                <Image src="/images/phone.png" alt="Image Alt Text" className="right-subheader-img" />
                <Link className="sub-header-rightlinks" href="https://example.com">
                    +1 434-123-6987
                </Link>
            </Flex>
        </Flex>

    );
};

export default SubHeader;
