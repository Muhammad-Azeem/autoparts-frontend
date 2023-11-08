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
import LeftSide from "./LeftSide";
import AccessoryProductBox from "./AccessoryProductBox";
const AccessoryDetailSection = () => {
    return (

        <Grid
            className="grid main-padding"
        >
            <GridItem colSpan={6} >
                <Heading ml={15} fontStyle="bold" color="black" as="h4" size="lg" mb={4}>
                    Popular Genuine Toyota Accessories
                </Heading>

                <AccessoryProductBox />


            </GridItem>
        </Grid>
    );
};

export default AccessoryDetailSection;
