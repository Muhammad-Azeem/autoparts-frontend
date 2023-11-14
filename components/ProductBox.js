// components/Header.js
import React, {useEffect,useState} from 'react';
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
import ProductBlock from "./ProductBlock";
import SecondProductBlock from "./SecondProductBlock";
import ThirdProductBlock from "./ThirdProductBlock";
import FourthProductBlock from "./FourthProductBlock";
import FifthProductBlock from "./FifthProductBlock";
import SixthProductBlock from "./SixthProductBlock";
import SeventhProductBlock from "./SeventhProductBlock";
import Product from './Product';
import {getAllProductsByCategory } from './API/api';
const ProductBox = () => {
    const router = useRouter();

    const handleViewMoreClick = () => {
        // Use router.push to navigate to the product list page
        router.push('/ViewMore'); // Replace '/productlist' with the actual URL of your product list page
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProductsByCategory();
                setProducts(data);
            
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Flex>
            <Box colSpan={4} bg='#F4F4F4'>
            {products.map((product, index) => (
                <Flex>
                    <Box width="100%">
                        <Heading ml={15} fontStyle="bold" color="black" as="h4" size="lg" mb={4}>
                            {product.name}
                        </Heading>
                        <Grid className="item productblock-grid"   gap={6}>
                        {product.products.map((product, productIndex) => (
                            <Product
                                image={product.images}
                                description={product.name}
                            >
                            </Product>
                            ))}
                        
                        </Grid>
                        <Center>
                            <Button onClick={handleViewMoreClick} className="product-red-btn" mt={15} >
                                VIEW MORE
                            </Button>
                        </Center>
                    </Box>
                </Flex>
                 ))}
            </Box>
        </Flex>
    )
};

export default ProductBox;
