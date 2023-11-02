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

const FifthProductBlock = ({title}) => {
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
                <Grid className="item  productblock-grid"   gap={6}>

                    <Product
                        image="/images/running-boards.png"
                        description="Running Boards"
                    >
                    </Product>
                    <Product
                        image="/images/license-plate-frame.png"
                        description="License Plate Frame"
                    />
                    <Product
                        image="/images/roof-rack.png"
                        description="Roof Rack"
                    />
                    <Product
                        image="/images/paint-protection-film.png"
                        description="Paint Protection Film"
                    />
                    <Product
                        image="/images/fog-lights.png"
                        description="Fog Lights"
                    />
                    <Product
                        image="/images/tow-hitch.png"
                        description="Tow Hitch"
                    />
                    <Product
                        image="/images/graphics.png"
                        description="Graphics"
                    />
                    <Product
                        image="/images/spare-tire-cover.png"
                        description="Spare Tyre Cover"
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

export default FifthProductBlock;
