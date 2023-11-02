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
import MainDetailModelRows from "./MainDetailModelRows";
const ModelSection = () => {
    return (
        <Center className="model-section_mainPadding" >
            <Box>
                <Heading as="h3" size="lg" mb={4}>
                    Featured Toyota Models
                </Heading>
                <MainDetailModelRows />
            </Box>

        </Center>
    );
};

export default ModelSection;
