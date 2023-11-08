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

import ModelButton from "./ModelButton";
const ModelRows = () => {
    const buttons = [
        '4Runner',
        '86',
        'Avalon',
        'C-HR',
        'Camry',
        'Celica',
        'Corolia',
        'Corolla Cross',
        'Corolla iM',
        'Corona',
        'Cressida',
        'Echo',
        'FJ Cruiser',
        'GR Supra',
        'GR86',
        'Highlander',
        'Land Cruiser',
        'MR2',
        'MR2 Spyder',
        'Matrix',
        'Mirai',
        'Paseo',
        'Pickup',
        'Previa',
        'Prius',
        'Prius C',
        'Prius Prime',
        'Prius V',
        'RAV4',
        'RAV4 Prime',
        'Sequoia',
        'Sienna',
        'Solara',
        'Starlet',
        'Supra',
        'T100',
        'Tacoma',
        'Tercel',
        'Tundra',
        'Van',
        'Venza',
        'Yaris',
        'Yaris iA',
        'bZ4X',
    ];
    return (
        <Center>
            <Grid className="model-rows"  >
                {buttons.map((title, index) => (
                    <GridItem key={index}>
                        <ModelButton title={title} />
                    </GridItem>
                ))}
            </Grid>
        </Center>
    );
};

export default ModelRows;
