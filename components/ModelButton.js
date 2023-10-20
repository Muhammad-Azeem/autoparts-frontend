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
    Center, Stack, Icon
} from '@chakra-ui/react';
import '../styles//global.css';
import {ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
import LeftSide from "./LeftSide";
import ProductBlock from "./ProductBlock";
const ModelRows = ({title}) => {
    return (
        <Button className="models-button" variant='solid'>
            {title}
            <Icon as={ChevronRightIcon} ml="auto" />
        </Button>
    );
};

export default ModelRows;
