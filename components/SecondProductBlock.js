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
import Product from "./Product";


const SecondProductBlock = ({title}) => {
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
                <Grid className="item productblock-grid"  gap={6}>

                    <Product
                        image="/images/toyota-emblem.png"
                        description="Emblem"
                    >
                    </Product>
                    <Product
                        image="/images/seat-belt.png"
                        description="Seat Belt"
                    />
                    <Product
                        image="/images/gas-cap.png"
                        description="Gas Cap"
                    />
                    <Product
                        image="/images/door-handle.png"
                        description="Door Handle"
                    />
                    <Product
                        image="/images/door-lock.png"
                        description="Door Lock"
                    />
                    <Product
                        image="/images/sun-visor.png"
                        description="Sun Visor"
                    />
                    <Product
                        image="/images/throttle-cable.png"
                        description="Throttle Cable"
                    />
                    <Product
                        image="/images/car-key.png"
                        description="Car Key"
                    />

                </Grid>
                <Center>
                    <Button onClick={handleViewMoreClick} className="red-btn" mt={15}>
                        VIEW MORE
                    </Button>
                </Center>
            </Box>

        </Flex>

    )
};

export default SecondProductBlock;
