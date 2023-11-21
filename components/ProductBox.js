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
import {getAllProductsByCategory } from './API/api';
import LoaderSpinner from "../components/LoaderSpinner"

const ProductBox = () => {
    const [loading, setLoading] = useState(true);

    const handleViewMoreClick = (id) => {
        // Use router.push to navigate to the product list page
        router.push('/ViewMore/'+id); // Replace '/productlist' with the actual URL of your product list page
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);

                const data = await getAllProductsByCategory();
                setProducts(data);
                
                setLoading(false);

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const router = useRouter();

    const handleProductDetailClick = (id) => {
        router.push('/ProductPage/'+id);
    };

    return (
        <Flex>
               {loading ? (
                <LoaderSpinner />
                ) : (
                    <>
            <Box colSpan={4} bg='#F4F4F4'>
            {products.map((product, index) => (
                <Flex>
                
                    <Box width="100%">
                        <Heading ml={15} fontStyle="bold" color="black" as="h4" size="lg" mb={4}>
                            {product.name}
                        </Heading>
                        <Grid className="item productblock-grid"   gap={6}>
                        {product.products.map((product, productIndex) => (
                            // <Product
                            //     image={product.images}
                            //     description={product.name}
                            // >
                            // </Product>
                            <Flex>
                            <Box width="100%">
                                <Grid className="productblock-grid" >
                                    {/* Your existing content */}
                                    <GridItem onClick={() => handleProductDetailClick(product.id)} className="product-box">
                                        <Box  className="grid-product_box" >
                                            <Image src={product.images} className="images-product_box" alt="Image Alt Text"  />
                                            <Text className="title-product_block">{product.name}</Text>
                                        </Box>
                                    </GridItem>

                                </Grid>
                            </Box>

                        </Flex>
                            ))}

                        </Grid>
                        <Center>
                            <Button onClick={() => handleViewMoreClick(product.id)} className="product-red-btn" mt={15} >
                                VIEW MORE
                            </Button>
                        </Center>
                    </Box>
                  
             
                </Flex>
                 ))}
            </Box>
            </>
                )}
        </Flex>
    )
};

export default ProductBox;
