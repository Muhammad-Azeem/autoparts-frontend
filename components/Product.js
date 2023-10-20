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

const Product = ({ description, image }) => {
    return (
        <Flex>
            <Box width="100%">
                <Grid className="productblock-grid"  templateColumns='repeat(4, 1fr)' gap={6}>
                    {/* Your existing content */}
                    <GridItem className="product-box">
                        <Box className="grid-product_box" >
                            <Image src={image} className="images-product_box" alt="Image Alt Text"  />
                            <Text classname="title-product_block">{description}</Text>
                        </Box>
                    </GridItem>

                </Grid>
            </Box>

        </Flex>
    )
};

export default Product;
