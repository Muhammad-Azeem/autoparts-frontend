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
    Center, Stack
} from '@chakra-ui/react';
import '../styles//global.css';
import ModelRows from "./ModelRows";
const ModelSection = () => {
    return (
        <Center padding="80px">
            <Box>
                <Heading as="h3" size="lg" mb={4}>
                    Select Vehcle by Model
                </Heading>
                <ModelRows />
            </Box>

        </Center>
    );
};

export default ModelSection;
