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
import { useRouter } from 'next/router';

const Product = ({ description, image , text }) => {

    return (
        <Flex>
            <Box width="100%">
                <Grid className="productblock-grid" >
                    {/* Your existing content */}
                    <GridItem  className="product-box">
                        <Box  className="pp-grid-product_box" >
                            <Image src={image} className="pp-images-product_box" alt="Image Alt Text"  />
                            <Text className="pp-title-product_block">{description}</Text>
                            <Text margin={0} >{text}</Text>
                        </Box>
                    </GridItem>

                </Grid>
            </Box>

        </Flex>
    )
};

export default Product;
