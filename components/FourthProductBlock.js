// components/Header.js
import React from 'react';
import { useRouter } from 'next/router';
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

const FourthProductBlock = ({title}) => {
    const router = useRouter();

    const handleViewMoreClick = () => {
        // Use router.push to navigate to the product list page
        router.push('/ViewMore'); // Replace '/productlist' with the actual URL of your product list page
    };
    return (
        <Flex>
            <Box width="100%">
                <Heading ml={15} fontStyle="bold" color="black" as="h4" size="lg" mb={4}>
                    {title}
                </Heading>
                <Grid className="item  productblock-grid"  gap={6}>

                    <Product
                        image="/images/wiper-blade.png"
                        description="Wiper Blade"
                    >
                    </Product>
                    <Product
                        image="/images/fog-light-bulb.png"
                        description="Fog Light Bulb"
                    />
                    <Product
                        image="/images/oxygen-sensor.png"
                        description="Oxygen Sensor"
                    />
                    <Product
                        image="/images/cabin-air-filter.png"
                        description="Cabin Air Filter"
                    />
                    <Product
                        image="/images/headlight-bulb.png"
                        description="Headlight Bulb"
                    />
                    <Product
                        image="/images/headlight.png"
                        description="Headlight"
                    />
                    <Product
                        image="/images/engine-control-module.png"
                        description="Engine Control Module"
                    />
                    <Product
                        image="/images/wiper-arm.png"
                        description="Wiper Arm"
                    />

                </Grid>
                <Center>
                    <Button onClick={handleViewMoreClick} className="product-red-btn" mt={15}>
                        VIEW MORE
                    </Button>
                </Center>
            </Box>

        </Flex>

    )
};

export default FourthProductBlock;
