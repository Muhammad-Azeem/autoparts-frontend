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

const ThirdProductBlock = ({title}) => {
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
                        image="/images/drain-plug-washer.png"
                        description="Drain Plug Washer"
                    >
                    </Product>
                    <Product
                        image="/images/spark-plug.png"
                        description="Spark Plug"
                    />
                    <Product
                        image="/images/oil-filter.png"
                        description="Oil Filter"
                    />
                    <Product
                        image="/images/air-filter.png"
                        description="Air Filter"
                    />
                    <Product
                        image="/images/drive-belt.png"
                        description="Drive Belt"
                    />
                    <Product
                        image="/images/ignition-coil.png"
                        description="Ignition Coil"
                    />
                    <Product
                        image="/images/alternator.png"
                        description="Alternator"
                    />
                    <Product
                        image="/images/radiator.png"
                        description="Radiator"
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

export default ThirdProductBlock;
