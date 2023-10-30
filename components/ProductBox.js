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

const ProductBox = () => {
    return (
        <Flex>
            <Box colSpan={4} bg='#F4F4F4'>

                <ProductBlock
                    title="Power Train/Chassis Parts"
                />
                <SecondProductBlock
                    title="Body Parts"
                />
                <ThirdProductBlock
                    title="Engine/Fuel/Tool Parts"
                />
                <FourthProductBlock
                    title="Electrical Parts"
                />
                <FifthProductBlock
                    title="Exterior Accessories"
                />
                <SixthProductBlock
                    title="Interior Accessories"
                />
                <SeventhProductBlock
                    title="Other Toyota Accessories"
                />
            </Box>

        </Flex>
    )
};

export default ProductBox;
