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

const SixthProductBlock = ({title}) => {
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
                        image="/images/floor-mats.png"
                        description="Flooe Mats"
                    >
                    </Product>
                    <Product
                        image="/images/seat-cover.png"
                        description="Seat Cover"
                    />
                    <Product
                        image="/images/shift-nob.png"
                        description="Shift Nob"
                    />
                    <Product
                        image="/images/cargo-net.png"
                        description="Cargo Net"
                    />
                    <Product
                        image="/images/floor-liners.png"
                        description="Floor Liners"
                    />
                    <Product
                        image="/images/cargo-cover.png"
                        description="Cargo Cover"
                    />
                    <Product
                        image="/images/door-sill-protector.png"
                        description="Door Sill Protector"
                    />
                    <Product
                        image="/images/cargo-liner.png"
                        description="Cargo Liner"
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

export default SixthProductBlock;
