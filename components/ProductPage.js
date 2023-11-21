// components/Header.js
import React, {useEffect, useRef, useState} from 'react';
import { useRouter } from 'next/router';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
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
    Center, Breadcrumb, BreadcrumbItem, BreadcrumbLink, ListItem, List, Icon, UnorderedList
} from '@chakra-ui/react';
import '../styles//global.css';

import {ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {FaMinus, FaPlus} from "react-icons/fa";
import Product from "./Product";
import SmallProduct from "./SmallProduct";
import AddVehicleModal from "./AddVehicleModal";
import {getProductbyId} from "./API/api";
import {addToCartToCockie} from "./utility/cookies";
import {formatCurrency} from "./utility/constants";

const ProductPage = () => {
    const [isEstimateVisible, setIsEstimateVisible] = useState(false);

    const toggleEstimateVisibility = () => {
        setIsEstimateVisible(!isEstimateVisible);
    };
    const [product, setProduct] = useState({});

    const router = useRouter();
    const{productid} = router.query ;

    useEffect(() => {
        const fetchProducts = async (id) => {
            try {
                const data = await getProductbyId(id);
                setProduct(data);

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        if(productid){
            fetchProducts(productid);
        }
    }, [productid]);

    const handleHomeClick = () => {
        router.push('/');
    };


    const [showTable1, setShowTable1] = useState(true);
    const [showTable2, setShowTable2] = useState(false);
    const [orangeBarStyle, setOrangeBarStyle] = useState({
        width: '185px',
        left: '25px',
    });

    const showTableOne = () => {
        setShowTable1(true);
        setShowTable2(false);
        setOrangeBarStyle({ width: '185px', left: '25px' });
    };

    const showTableTwo = () => {
        setShowTable1(false);
        setShowTable2(true);
        setOrangeBarStyle({ width: '123px', left: '225px' });
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onModalOpen = () => setIsModalOpen(true);
    const onModalClose = () => setIsModalOpen(false);
    const [quantity, setQuantity] = useState()
    const handleAddToCart = () => {
        addToCartToCockie(product, quantity)
        router.push('/AddToCart/');

    };

    return (

    <Box >
        <Box className="pp-box">
            <Breadcrumb  spacing='5px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem className="breadcrum-ol" >
                    <BreadcrumbLink textDecoration="underline" cursor="pointer" onClick={handleHomeClick}>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem  className="breadcrum-ol" isCurrentPage>
                    <BreadcrumbLink fontWeight="600" href='#'>Toyota 9034112012</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            {/*<Box className="pp-innerbox">*/}
            {/*    <Image ml={15} className="pp-images" src="/images/caution.png" alt="Image 1"/>*/}
            {/*    <Text mr={15} className="pp-innerbox-text">*/}
            {/*        Make sure this part fits your vehicle*/}
            {/*    </Text>*/}
            {/*    <Text cursor="pointer" onClick={onModalOpen}  mr={35} className="pp-checkbtn">*/}
            {/*        Check Fit {'>'}*/}
            {/*    </Text>*/}
            {/*    <AddVehicleModal isOpen={isModalOpen} onClose={onModalClose} />*/}
            {/*</Box>*/}
        </Box>

        <Box className="pp-productDetail-main-box">
            <Flex className="pp-productDetail-innerbox" >
                <Box className="pp-box1" display="flex" flexDirection="column">
                    <Box mb={4}>
                        <Image className="pp-box1-img"  src={product.images} alt="Image 1" />
                    </Box>
                    <Box display="flex" mb={4}>
                        <Image className="pp-box1-simg" src="/images/toyota-plug.jpg" alt="Image 2" />
                        <Image className="pp-box1-simg" src="/images/toyota-plug.jpg" alt="Image 2" />
                        <Image className="pp-box1-simg" src="/images/toyota-plug.jpg" alt="Image 2" />
                    </Box>
                </Box>

                <Box className="pp-box2" flex="1">
                    <Flex className="productDetail-box2-flex" >
                        {/* Left Sub-Column */}
                        <Box className="productDetail-box2-heads">
                            <Text className="pp-box2-title" fontSize="xl">{product.manufacturer} {product.part_number} {product.name}</Text>
                            <Text  className="pp-box2-heading1" fontSize="md">Part Number:
                                <span className="detail-box2-partno">{product.part_number}</span>
                            </Text>
                            <Box mt={10}  display="flex">
                                <Text width="125px" className="pp-box2-heading2" margin={0}  fontSize="xl">
                                    Part Description</Text>
                                <Text  className="pp-box2-heading2" margin={0} fontSize="xl">
                                    {product.description}</Text>
                            </Box>
                            <Box mt={10} display="flex">
                                <Text width="125px" className="pp-box2-heading2" margin={0} fontSize="xl">
                                    Replaces</Text>
                                <Text  className="pp-box2-heading2" margin={0} fontSize="xl">
                                    {product.replaces}</Text>
                            </Box>
                            <Box mt={10} display="flex">
                                <Text width="125px" className="pp-box2-heading2" margin={0} fontSize="xl">
                                    Manufacturer</Text>
                                <Text className="pp-box2-heading2" margin={0} fontSize="xl">
                                    {product.manufacturer}</Text>
                            </Box>
                            {/*<Box mt={30} display="flex">*/}
                            {/*    <Text width="200px" cursor="pointer" className="pp-box2-heading2" margin={0} fontSize="xl">*/}
                            {/*        Customer Questions & Answers</Text>*/}
                            {/*</Box>*/}
                        </Box>

                        <Box className="pp-price-box">
                            <Text className="pp-price" fontSize="xl">{formatCurrency(product.price)}
                                {/*<span className="product-price-span" >*/}
                                {/*    MSRP:*/}
                                {/*    <span style={{textDecoration:'line-through'}}>*/}
                                {/*        {formatCurrency(product.discounted_price)}*/}
                                {/*    </span>*/}
                                {/*</span>*/}
                            </Text>
                            {/*<Text className="pp-save-price" >*/}
                            {/*    You Save: $1.86 (29%)*/}
                            {/*</Text>*/}
                            <Box display="flex">
                                <input value={quantity} className="pp-input-num" type="number" placeholder="1"  onChange={(e) => setQuantity(e.target.value)} />
                                <Button ml={15} mt={10} className="pp-cart-btn" colorScheme="teal" type={'button'} onClick={handleAddToCart}>Add to Cart</Button>
                            </Box>
                            <Text  size="lg">
                                {/*<Image className="pp-pay-later-image" src="/images/pay-later.svg" alt="Image 1"/>*/}
                                {/*<span style={{fontSize:'12px'}}>Pay in 4 interest-free payments of $35.18. </span>*/}
                                {/*<span style={{fontSize:'12px'}} className="bussiness-url">Learn More</span>*/}
                            </Text>
                            <Text borderTop="1px solid #b0b0b0" size="lg">
                                <span  style={{fontSize:'12px'}} >Ships in 1-3 Business Days</span>
                            </Text>
                        </Box>
                        <Box className="pp-price-box2">
                            <Box display="flex" alignItems="center">

                                <div>
                                    <Heading className="main-heading" as="h4" size="lg" mb={4}>
                                        Why Choose Car Parts Website?
                                    </Heading>
                                    <Heading as="h4" className="pp-leftside-heading" size="lg">
                                        <Image src="/images/SVG.png" alt="Image" className="leftside-image" />
                                        Dedicated Service
                                    </Heading>
                                    <Text className="pp-leftside-heading-text" >
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        Your complete satisfaction is our #1 goal
                                    </Text>
                                    <Heading as="h4" className="pp-leftside-heading" size="lg">
                                        <Image src="/images/SVG.png" alt="Image" className="leftside-image" />
                                        Lowest Prices
                                    </Heading>
                                    <Text className="pp-leftside-heading-text" >
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        Best deals on genuine OE parts from dealerships
                                    </Text>
                                    <Heading as="h4" className="pp-leftside-heading" size="lg">
                                        <Image src="/images/SVG.png" alt="Image" className="leftside-image" />
                                        Fast Delivery
                                    </Heading>
                                    <Text className="pp-leftside-heading-text" >
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        Orders are processed and delivered promptly
                                    </Text>
                                </div>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>

        <Grid
            templateColumns="repeat(4, 1fr)"
            className="list-grid main-padding"
            mb={35}
            mt={0}
        >
            <GridItem colSpan={4} bg="#fff">
                <Flex>
                    <Box width="60%">
                        <Grid className="detail-grid">
                            <Heading className="detail-heading" as="h3">
                                Related Parts
                                <Text margin={0} fontSize="12px" className="bussiness-url">
                                    Shop for related parts for your vehicle
                                </Text>
                            </Heading>
                        </Grid>
                        <Grid className="ppdetail-grid" gap={6}>
                            <SmallProduct
                                image="/images/pp1.png"
                                description="Block Sub-Assy, Cylinder"
                                text="11401-09210"
                            >
                            </SmallProduct>

                            <SmallProduct
                                image="/images/pp2.png"
                                description="Bolt"
                                text="11401-09210"
                            >
                            </SmallProduct>
                            <SmallProduct
                                image="/images/pp3.png"
                                description="Cylinder"
                                text="11401-09210"
                            >
                            </SmallProduct>
                            <SmallProduct
                                image="/images/pp1.png"
                                description="Block Sub-Assy, Cylinder"
                                text="11401-09210"
                            >
                            </SmallProduct>

                            <SmallProduct
                                image="/images/pp2.png"
                                description="Bolt"
                                text="11401-09210"
                            >
                            </SmallProduct>
                            <SmallProduct
                                image="/images/pp3.png"
                                description="Cylinder"
                                text="11401-09210"
                            >
                            </SmallProduct>
                            <SmallProduct
                                image="/images/pp1.png"
                                description="Block Sub-Assy, Cylinder"
                                text="11401-09210"
                            >
                            </SmallProduct>

                            <SmallProduct
                                image="/images/pp2.png"
                                description="Bolt"
                                text="11401-09210"
                            >
                            </SmallProduct>
                            <SmallProduct
                                image="/images/pp3.png"
                                description="Cylinder"
                                text="11401-09210"
                            >
                            </SmallProduct>
                        </Grid>
                    </Box>
                </Flex>
            </GridItem>
        </Grid>

        <Box className="pp-table-box" >
            <Grid className="list-grid" >
                <Box className="pp-horizontal-listbox">
                    <Text className="pp-horizontal-listmenu" mr={25} onClick={showTableOne}>Product Specifications</Text>
                    <Text className="pp-horizontal-listmenu"   onClick={showTableTwo}>Vehicle Fitment</Text>
                    <Box  style={{
                        width: orangeBarStyle.width,
                        left: orangeBarStyle.left,
                    }} className="pp-orange-bar">
                    </Box>


                </Box>
                <Box>
                    {showTable1 && (
                        <Table variant="simple" mt={5} className="pp-table" >
                            <Tbody>
                                <Tr className="pp-row">
                                    <Td className="pp-td1">Brand</Td>
                                    <Td className="pp-td2">{product.brand}</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td1">Part Name Code</Td>
                                    <Td className="pp-td2">{product.part_name_code}</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td1">Manufacturer Part Number</Td>
                                    <Td className="pp-td2">{product.manufacturer_part_number}</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td1">Part Description</Td>
                                    <Td className="pp-td2">{product.part_description}</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td1">Condition</Td>
                                    <Td className="pp-td2">{product.condition}</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td1">Fitment Type	</Td>
                                    <Td className="pp-td2">{product.fitment_type}</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td1">Replaces</Td>
                                    <Td className="pp-td2">{product.replaces}</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td1">Manufacturer</Td>
                                    <Td className="pp-td2">Toyota</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td1">SKU</Td>
                                    <Td className="pp-td2">90910-09095</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td1">Warranty</Td>
                                    {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                    <Td className="pp-td2">This genuine Toyota part is guaranteed by Toyota's factory warranty.</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td1">Shipping & Return	</Td>
                                    <Td className="pp-td2">	Shipping Policy Return Policy</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    )}

                    {showTable2 && (
                        <Table variant="simple" mt={5} className="pp-table2" >
                            <Tbody>
                                <Tr className="pp-row2">
                                    <Td className="pp-td3">Year Make Model</Td>
                                    <Td className="pp-td3">Trim & Engine</Td>
                                    <Td className="pp-td3">Important vehicle option details</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td4">2003-2009 Toyota 4Runner</Td>
                                    <Td className="pp-td4">Limited, SR5|8 Cyl 4.7L</Td>
                                    <Td className="pp-td4">2UZFE; 2UZFE; UZN210L-GKAGKA,</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td4">2003-2009 Toyota 4Runner</Td>
                                    <Td className="pp-td4">Limited, SR5|8 Cyl 4.7L</Td>
                                    <Td className="pp-td4">2UZFE; 2UZFE; UZN210L-GKAGKA,</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td4">2003-2009 Toyota 4Runner</Td>
                                    <Td className="pp-td4">Limited, SR5|8 Cyl 4.7L</Td>
                                    <Td className="pp-td4">2UZFE; 2UZFE; UZN210L-GKAGKA,</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td4">2003-2009 Toyota 4Runner</Td>
                                    <Td className="pp-td4">Limited, SR5|8 Cyl 4.7L</Td>
                                    <Td className="pp-td4">2UZFE; 2UZFE; UZN210L-GKAGKA,</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td4">2003-2009 Toyota 4Runner</Td>
                                    <Td className="pp-td4">Limited, SR5|8 Cyl 4.7L</Td>
                                    <Td className="pp-td4">2UZFE; 2UZFE; UZN210L-GKAGKA,</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td4">2003-2009 Toyota 4Runner</Td>
                                    <Td className="pp-td4">Limited, SR5|8 Cyl 4.7L</Td>
                                    <Td className="pp-td4">2UZFE; 2UZFE; UZN210L-GKAGKA,</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td4">2003-2009 Toyota 4Runner</Td>
                                    <Td className="pp-td4">Limited, SR5|8 Cyl 4.7L</Td>
                                    <Td className="pp-td4">2UZFE; 2UZFE; UZN210L-GKAGKA,</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td4">2003-2009 Toyota 4Runner</Td>
                                    <Td className="pp-td4">Limited, SR5|8 Cyl 4.7L</Td>
                                    <Td className="pp-td4">2UZFE; 2UZFE; UZN210L-GKAGKA,</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td4">2003-2009 Toyota 4Runner</Td>
                                    <Td className="pp-td4">Limited, SR5|8 Cyl 4.7L</Td>
                                    <Td className="pp-td4">2UZFE; 2UZFE; UZN210L-GKAGKA,</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td4">2003-2009 Toyota 4Runner</Td>
                                    <Td className="pp-td4">Limited, SR5|8 Cyl 4.7L</Td>
                                    <Td className="pp-td4">2UZFE; 2UZFE; UZN210L-GKAGKA,</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td4">2003-2009 Toyota 4Runner</Td>
                                    <Td className="pp-td4">Limited, SR5|8 Cyl 4.7L</Td>
                                    <Td className="pp-td4">2UZFE; 2UZFE; UZN210L-GKAGKA,</Td>
                                </Tr>
                                <Tr>
                                    <Td className="pp-td4">2003-2009 Toyota 4Runner</Td>
                                    <Td className="pp-td4">Limited, SR5|8 Cyl 4.7L</Td>
                                    <Td className="pp-td4">2UZFE; 2UZFE; UZN210L-GKAGKA,</Td>
                                </Tr>


                            </Tbody>
                        </Table>

                    )}
                </Box>
            </Grid>
        </Box>

        {/*<Box mt={25} className="pp-table-box2">*/}
        {/*    <Heading className="detail-heading" as="h3">*/}
        {/*        Customer Questions & Answers*/}
        {/*    </Heading>*/}
        {/*    <div style={{marginBottom:'15px'}}  className="grey-line"></div>*/}
        {/*    <Text className="pp-question">*/}
        {/*        Q: I would like to know availability and if it is direct fit replacement*/}
        {/*    </Text>*/}
        {/*    <Text pl={22} className="pp-answer">*/}
        {/*        Posted by ToyotaPartsDeal Specialist*/}
        {/*    </Text>*/}
        {/*    <Text pt={10} pl={35} className="pp-question2">*/}
        {/*        A: You can Select Your Vehicle to check if 90341-18057 fits your vehicle.*/}
        {/*    </Text>*/}
        {/*    <Text pl={35} className="pp-answer">*/}
        {/*        Posted by ToyotaPartsDeal Specialist*/}
        {/*    </Text>*/}
        {/*    <div style={{marginTop:'15px'}} className="grey-line"></div>*/}

        {/*    <Text className="some-text" mt={10}>*/}
        {/*        /!*eslint-disable-next-line react/no-unescaped-entities*!/*/}
        {/*        If you have any questions about this product, please don't hesitate to ask us. We will be happy to help you!*/}
        {/*    </Text>*/}
        {/*    <Text className="ask-btn">*/}
        {/*        Ask a Question*/}
        {/*    </Text>*/}

        {/*    <Text className="some-text"  mt={10}>*/}
        {/*        Genuine Toyota Part 90341-18057, the Right Choice*/}
        {/*    </Text>*/}
        {/*    <Text  className="some-text pp-lower-para" mt={10}>*/}
        {/*        /!*eslint-disable-next-line react/no-unescaped-entities*!/*/}
        {/*        Your vehicle deserves only genuine OEM Toyota parts and accessories. To ensure reliability, purchase Toyota part # 90341-18057 Plug Sub-Assembly, W/HEA. It is sometimes referred to as Toyota Drain Plug. Our Toyota parts and accessories are expedited directly from authorized Toyota dealers strategically located all across the U.S. and are backed by the manufacturer's 12 month, 12,000 mile warranty. OEM Toyota parts are the best for restoring your vehicle to factory condition performance. This part fits 1984-2022 Toyota 4Runner, 1983-1990 Toyota Camry, 2001-2019 Toyota Highlander, 1995-2022 Toyota Tacoma.*/}
        {/*    </Text>*/}

        {/*    <Text mb={25} className="some-text pp-lower-para" mt={10}>*/}
        {/*        /!*eslint-disable-next-line react/no-unescaped-entities*!/*/}
        {/*        Your vehicle deserves only genuine OEM Toyota parts and accessories. To ensure reliability, purchase Toyota part # 90341-18057 Plug Sub-Assembly, W/HEA. It is sometimes referred to as Toyota Drain Plug. Our Toyota parts and accessories are expedited directly from authorized Toyota dealers strategically located all across the U.S. and are backed by the manufacturer's 12 month, 12,000 mile warranty. OEM Toyota parts are the best for restoring your vehicle to factory condition performance. This part fits 1984-2022 Toyota 4Runner, 1983-1990 Toyota Camry, 2001-2019 Toyota Highlander, 1995-2022 Toyota Tacoma.*/}
        {/*    </Text>*/}
        {/*</Box>*/}
        <br/>
    </Box>
    );
};

export default ProductPage;
