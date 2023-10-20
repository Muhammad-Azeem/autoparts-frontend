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
import ProductBox from "./ProductBox";
import {ChevronDownIcon} from "@chakra-ui/icons";
import LeftSide from "./LeftSide";
import ProductBlock from "./ProductBlock";
const DetailSection = () => {
    return (

        <Grid
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
            mt={40}
            padding="0px 150px"
        >
            <LeftSide />

            <GridItem colSpan={4} bg='#F4F4F4'>
                <Heading ml={15} fontStyle="bold" color="black" as="h4" size="lg" mb={4}>
                    Popular Genuine Toyota Parts and Accessories
                </Heading>

                <ProductBox />


            </GridItem>
        </Grid>
    );
};

export default DetailSection;
