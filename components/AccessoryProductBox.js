// components/Header.js
import React from 'react';
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
    Center
} from '@chakra-ui/react';
import '../styles//global.css';
import {ChevronDownIcon} from "@chakra-ui/icons";
import ProductBlock from "./ProductBlock";
import SecondProductBlock from "./SecondProductBlock";
import ThirdProductBlock from "./ThirdProductBlock";
import FourthProductBlock from "./FourthProductBlock";
import FifthProductBlock from "./FifthProductBlock";
import SixthProductBlock from "./SixthProductBlock";
import SeventhProductBlock from "./SeventhProductBlock";
import AccessoryProductBlock from "./AccessoryProductBlock";

const AccessoryProductBox = () => {
    return (
        <Flex>
            <Box colSpan={4} >

                <AccessoryProductBlock
                    title="Popular Exterior Accessories "
                />
                <AccessoryProductBlock
                    title="Popular Interior Accessories"
                />
                <AccessoryProductBlock
                    title="Popular TRD Performance"
                />
                <AccessoryProductBlock
                    title="Popular Driver Convenience & Vehicle Security"
                />
                <AccessoryProductBlock
                    title="Popular Wheels & Accessories"
                />
                <AccessoryProductBlock
                    title="Maintenance Parts"
                />
            </Box>

        </Flex>
    )
};

export default AccessoryProductBox;
