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
import Product from "./Product";

const SeventhProductBlock = ({title}) => {
    return (
        <Flex>
            <Box width="100%">
                <Heading ml={15} fontStyle="bold" color="black" as="h4" size="lg" mb={4}>
                    {title}
                </Heading>
                <Grid className="productblock-grid"  templateColumns='repeat(4, 1fr)' gap={6}>

                    <Product
                        image="/images/oil-filter.png"
                        description="Oil Filter"
                    >
                    </Product>
                    <Product
                        image="/images/air-filter.png"
                        description="Air Filter"
                    />
                    <Product
                        image="/images/radiator-cap.png"
                        description="Radiator Cap"
                    />
                    <Product
                        image="/images/wheels.png"
                        description="Wheels"
                    />
                    <Product
                        image="/images/key-finder.png"
                        description="Key Finder"
                    />
                    <Product
                        image="/images/armrest.png"
                        description="Armrest Cover"
                    />
                    <Product
                        image="/images/supercharger.png"
                        description="Supercharger"
                    />
                    <Product
                        image="/images/brake-pads.png"
                        description="Brake Pads"
                    />
                    <Product
                        image="/images/wheel-covers.png"
                        description="Wheel Covers"
                    />
                    <Product
                        image="/images/camper-shell.png"
                        description="Camper Shell"
                    />
                    <Product
                        image="/images/brakes.png"
                        description="Brakes"
                    />
                    <Product
                        image="/images/bed-extender.png"
                        description="Bed Extender"
                    />
                    <Product
                        image="/images/exhaust.png"
                        description="Exhaust"
                    />
                    <Product
                        image="/images/tonneau-cover.png"
                        description="Tonneau Cover"
                    />
                    <Product
                        image="/images/wheel-locks.png"
                        description="Wheel Locks"
                    />
                    <Product
                        image="/images/bike-rack.png"
                        description="Bike Racks"
                    />

                </Grid>
                <Center>
                    <Button className="red-btn" mt={15}>
                        VIEW MORE
                    </Button>
                </Center>
            </Box>

        </Flex>

    )
};

export default SeventhProductBlock;
