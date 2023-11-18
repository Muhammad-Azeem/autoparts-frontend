// components/Header.js
import React, {useRef, useState ,useEffect} from 'react';
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
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, ListItem, List, Icon, UnorderedList
} from '@chakra-ui/react';
import '../styles//global.css';
import {ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
import Product from "./Product";
import ViewMoreList from "../components/ViewMoreList";
import {getCartFromCookie , setCartCookie , addCartToCookie ,removeCartFromCookie} from "./utility/cookies"
import {getProductbyId} from './API/api';

const ProductDetail = () => {
    const [products, setProducts] = useState([]);

    const router = useRouter()    
    const{productId} = router.query ;
    console.log(productId);

    useEffect(() => {
        const fetchProducts = async (id) => {
            try {
                const data = await getProductbyId(id);
                setProducts(data);

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        if(productId){
            fetchProducts(productId);
        }      
    }, [productId]);

   

      //cookies
      const [cart, setCart] = useState(getCartFromCookie());
    
      const handleAddCart = () => {
        //   const newCart = { product_image : ,  part_number:  ,  product_name:  , product_price :  , product_quantity : ,subTotal :  };
          addCartToCookie(newCart);
          setCart(getCartFromCookie());
          router.push('/ProductList');
        };

    const [isGrid1Visible, setIsGrid1Visible] = useState(true);
    const [isGrid2Visible, setIsGrid2Visible] = useState(false);

    const toggleGridVisibility = () => {
        setIsGrid1Visible(!isGrid1Visible);
        setIsGrid2Visible(!isGrid2Visible);
    };
    const [showTopSection1, setShowTopSection1] = useState(true);
    const [showTopSection2, setShowTopSection2] = useState(false);

    const handleButton1Click = () => {
        setShowTopSection1(true);
        setShowTopSection2(false);
    };

    const handleButton2Click = () => {
        setShowTopSection1(false);
        setShowTopSection2(true);
    };


    const handleGoToCartClick = () => {
        router.push('/AddToCart');
    };
    const handleHomeClick = () => {
        router.push('/');
    };
    const handleProductClick = () => {
        router.push('/Product');
    };


    const initialVisibleItems = 2; // Initial number of visible items
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
    const items = [
        '4Runner| 1984-2022| DLX, LULI, Limited, SDT,S...| 4 Cyl 2.4L, 4 Cyl..',
        'Avalon| 1995-2022| Limited, XL, XLE, XLE Pre...| 4 Cyl 2.5L, 6 Cyl...',
        'C-HR| 2017-2022| 4 Cyl 2.0L',
        'Camry| 1987-2022| CE, DX, LE, N, No Grade... | 4 Cyl 2.0L, 4 Cyl 2.2L...',
        'Celica| 1988-2005, 1984-1985| GT, GTS, ST...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
        'Corolla| 1984-2022| CE, D, DX, ECO...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
        'Corolla Cross| 2022',
        'Corolla iM| 2017-2018| N| 4 Cyl 1.8L',
        'Cressida| 1985-1992| GLX| 6 Cyl 2.8L, 6 Cyl 3.0L',
        'Echo| 2000-2005| 4 Cyl 1.5L'
        // Add more items here
    ];

    const toggleItems = () => {
        if (visibleItems === initialVisibleItems) {
            setVisibleItems(items.length);
        } else {
            setVisibleItems(initialVisibleItems);
        }
    };
    const itemsList1 = [
        '4Runner| 1984-2022| DLX, LULI, Limited, SDT,S...| 4 Cyl 2.4L, 4 Cyl..',
        'Avalon| 1995-2022| Limited, XL, XLE, XLE Pre...| 4 Cyl 2.5L, 6 Cyl...',
        'C-HR| 2017-2022| 4 Cyl 2.0L',
        'Camry| 1987-2022| CE, DX, LE, N, No Grade... | 4 Cyl 2.0L, 4 Cyl 2.2L...',
        'Celica| 1988-2005, 1984-1985| GT, GTS, ST...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
        'Corolla| 1984-2022| CE, D, DX, ECO...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
        'Corolla Cross| 2022',
        'Corolla iM| 2017-2018| N| 4 Cyl 1.8L',
        'Cressida| 1985-1992| GLX| 6 Cyl 2.8L, 6 Cyl 3.0L',
        'Echo| 2000-2005| 4 Cyl 1.5L'
        // Add more items here
    ];
    const itemsList2 = [
        '4Runner| 1984-2022| DLX, LULI, Limited, SDT,S...| 4 Cyl 2.4L, 4 Cyl..',
        'Avalon| 1995-2022| Limited, XL, XLE, XLE Pre...| 4 Cyl 2.5L, 6 Cyl...',
        'C-HR| 2017-2022| 4 Cyl 2.0L',
        'Camry| 1987-2022| CE, DX, LE, N, No Grade... | 4 Cyl 2.0L, 4 Cyl 2.2L...',
        'Celica| 1988-2005, 1984-1985| GT, GTS, ST...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
        'Corolla| 1984-2022| CE, D, DX, ECO...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
        'Corolla Cross| 2022',
        'Corolla iM| 2017-2018| N| 4 Cyl 1.8L',
        'Cressida| 1985-1992| GLX| 6 Cyl 2.8L, 6 Cyl 3.0L',
        'Echo| 2000-2005| 4 Cyl 1.5L'
        // Add more items here
    ];
    const itemsList3 = [
        '4Runner| 1984-2022| DLX, LULI, Limited, SDT,S...| 4 Cyl 2.4L, 4 Cyl..',
        'Avalon| 1995-2022| Limited, XL, XLE, XLE Pre...| 4 Cyl 2.5L, 6 Cyl...',
        'C-HR| 2017-2022| 4 Cyl 2.0L',
        'Camry| 1987-2022| CE, DX, LE, N, No Grade... | 4 Cyl 2.0L, 4 Cyl 2.2L...',
        'Celica| 1988-2005, 1984-1985| GT, GTS, ST...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
        'Corolla| 1984-2022| CE, D, DX, ECO...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
        'Corolla Cross| 2022',
        'Corolla iM| 2017-2018| N| 4 Cyl 1.8L',
        'Cressida| 1985-1992| GLX| 6 Cyl 2.8L, 6 Cyl 3.0L',
        'Echo| 2000-2005| 4 Cyl 1.5L'
        // Add more items here
    ];
    const itemsList4 = [
        '4Runner| 1984-2022| DLX, LULI, Limited, SDT,S...| 4 Cyl 2.4L, 4 Cyl..',
        'Avalon| 1995-2022| Limited, XL, XLE, XLE Pre...| 4 Cyl 2.5L, 6 Cyl...',
        'C-HR| 2017-2022| 4 Cyl 2.0L',
        'Camry| 1987-2022| CE, DX, LE, N, No Grade... | 4 Cyl 2.0L, 4 Cyl 2.2L...',
        'Celica| 1988-2005, 1984-1985| GT, GTS, ST...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
        'Corolla| 1984-2022| CE, D, DX, ECO...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
        'Corolla Cross| 2022',
        'Corolla iM| 2017-2018| N| 4 Cyl 1.8L',
        'Cressida| 1985-1992| GLX| 6 Cyl 2.8L, 6 Cyl 3.0L',
        'Echo| 2000-2005| 4 Cyl 1.5L'
        // Add more items here
    ];
    const itemsList5 = [
        '4Runner| 1984-2022| DLX, LULI, Limited, SDT,S...| 4 Cyl 2.4L, 4 Cyl..',
        'Avalon| 1995-2022| Limited, XL, XLE, XLE Pre...| 4 Cyl 2.5L, 6 Cyl...',
        'C-HR| 2017-2022| 4 Cyl 2.0L',
        'Camry| 1987-2022| CE, DX, LE, N, No Grade... | 4 Cyl 2.0L, 4 Cyl 2.2L...',
        'Celica| 1988-2005, 1984-1985| GT, GTS, ST...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
        'Corolla| 1984-2022| CE, D, DX, ECO...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
        'Corolla Cross| 2022',
        'Corolla iM| 2017-2018| N| 4 Cyl 1.8L',
        'Cressida| 1985-1992| GLX| 6 Cyl 2.8L, 6 Cyl 3.0L',
        'Echo| 2000-2005| 4 Cyl 1.5L'
        // Add more items here
    ];

    return (
        <Box >
            <Breadcrumb className="Product-listing-breadcrum"  separator=">">
                <BreadcrumbItem ml={12} fontSize="14px">
                    <BreadcrumbLink cursor="pointer" onClick={handleHomeClick}>Home</BreadcrumbLink>
                </BreadcrumbItem >
                <BreadcrumbItem fontSize="14px" isCurrentPage>
                    <BreadcrumbLink href="#">Toyota Drain Plug</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Heading className="Product-detail-heading"  margin="0" as="h2" mt={4}>
                Genuine Toyota Drain Plug <br/>
                <span className="Product-listing-heading-span">
                    Oil Drain Plug
                </span>
            </Heading>


                <Box className="productDetail-middle-section" >
                    <Heading className="middle-section-topbar" as="h3" >
                        Enter your vehicle info to find more Body parts that fit
                    </Heading>

                    <Box className="middle-section-middlebar">
                        <Flex className="middlebar-res" align="center">
                            <Heading as="h4" size="lg" mr="2">
                                Select by VIN
                                <Image src="/images/question.png" alt="Image Alt Text" w={15} h={15}  />

                            </Heading>
                            <input className="middlebar_search-placeholder" type="text"
                                   placeholder="Enter the VIN of your Vehicle"/>
                            <Button  onClick={toggleGridVisibility} className="middlebar_red-btn" colorScheme="teal">Find My Parts</Button>
                        </Flex>
                    </Box>
                    <Box mt={2} className="middle-section-endbar">
                        <Flex className="middlebar-res" align="center">
                            <Heading as="h4" size="lg" mr="2">
                                Select by Model
                            </Heading>
                            <Menu >
                                <MenuButton className="endbar-topsection-input" as={Button} rightIcon={<ChevronDownIcon />}>
                                    -- Select Make --
                                </MenuButton>
                                <MenuList zIndex={3} >
                                    <MenuItem className="menu-item">Toyota</MenuItem>
                                    <MenuItem className="menu-item">Scion</MenuItem>

                                </MenuList>
                            </Menu>
                            <Menu >
                                <MenuButton className="endbar-topsection-input2" as={Button} rightIcon={<ChevronDownIcon />}>
                                    -- Select Model --
                                </MenuButton>
                                <MenuList style={{zIndex:'3',overflowY: 'auto',maxHeight:'250px'}} zIndex={3}>
                                    <MenuItem className="menu-item">4Runner</MenuItem>
                                    <MenuItem className="menu-item">86</MenuItem>
                                    <MenuItem className="menu-item">Avalon</MenuItem>
                                    <MenuItem className="menu-item">C-HR</MenuItem>
                                    <MenuItem className="menu-item">Camry</MenuItem>
                                    <MenuItem className="menu-item">Celica</MenuItem>
                                    <MenuItem className="menu-item">Corolla</MenuItem>
                                    <MenuItem className="menu-item">Corolla Cross</MenuItem>
                                    <MenuItem className="menu-item">Corolla iM</MenuItem>
                                    <MenuItem className="menu-item">Corona</MenuItem>
                                    <MenuItem className="menu-item">Cressida</MenuItem>
                                    <MenuItem className="menu-item">Echo</MenuItem>
                                    <MenuItem className="menu-item">Fj Cruiser</MenuItem>
                                    <MenuItem className="menu-item">GR Supra</MenuItem>
                                    <MenuItem className="menu-item">GR86</MenuItem>
                                    <MenuItem className="menu-item">Highlander</MenuItem>
                                    <MenuItem className="menu-item">Land Cruiser</MenuItem>
                                    <MenuItem className="menu-item">MR2</MenuItem>
                                    <MenuItem className="menu-item">MR2 Spyder</MenuItem>
                                    <MenuItem className="menu-item">Matrix</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu >
                                <MenuButton className="endbar-topsection-input2" as={Button} rightIcon={<ChevronDownIcon />}>
                                    -- Select Year --
                                </MenuButton>
                                <MenuList style={{zIndex:'2',overflowY: 'auto',maxHeight:'250px'}} zIndex={3} >
                                    <MenuItem className="menu-item">2023</MenuItem>
                                    <MenuItem className="menu-item">2022</MenuItem>
                                    <MenuItem className="menu-item">2021</MenuItem>
                                    <MenuItem className="menu-item">2020</MenuItem>
                                    <MenuItem className="menu-item">2019</MenuItem>
                                    <MenuItem className="menu-item">2018</MenuItem>
                                    <MenuItem className="menu-item">2017</MenuItem>
                                    <MenuItem className="menu-item">2016</MenuItem>
                                    <MenuItem className="menu-item">2015</MenuItem>
                                    <MenuItem className="menu-item">2014</MenuItem>
                                    <MenuItem className="menu-item">2013</MenuItem>
                                    <MenuItem className="menu-item">2012</MenuItem>
                                    <MenuItem className="menu-item">2011</MenuItem>
                                    <MenuItem className="menu-item">2010</MenuItem>
                                    <MenuItem className="menu-item">2009</MenuItem>
                                    <MenuItem className="menu-item">2008</MenuItem>
                                    <MenuItem className="menu-item">2007</MenuItem>
                                    <MenuItem className="menu-item">2006</MenuItem>
                                    <MenuItem className="menu-item">2005</MenuItem>
                                    <MenuItem className="menu-item">2004</MenuItem>
                                    <MenuItem className="menu-item">2003</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu >
                                <MenuButton className="endbar-topsection-input2" as={Button} rightIcon={<ChevronDownIcon />}>
                                    -- Select Submodel --
                                </MenuButton>
                                <MenuList zIndex={3} >
                                    <MenuItem className="menu-item">NAP</MenuItem>
                                    <MenuItem className="menu-item">NAP - Hybrid</MenuItem>

                                </MenuList>
                            </Menu>
                            <Button   onClick={toggleGridVisibility} className="middlebar_red-btn" colorScheme="teal">Find My Parts</Button>
                        </Flex>
                    </Box>
                </Box>

                <Box className="mobile-VM-topsection-lowerpart" >

                    <Heading className="top-section_main-padding"  as="h3">
                        Shop for Toyota Parts
                    </Heading>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"

                    >
                        <Button onClick={handleButton1Click}  className="mobile_topsection-button" variant="solid" >
                            Select Vehicle by VIN
                        </Button>
                        <Button onClick={handleButton2Click}  className="mobile_topsection-button2" variant="solid">
                            Select Vehicle by Model
                        </Button>
                    </Box>
                    <Container className="mobile_topsection-container"  maxW="container.md">
                        {showTopSection1 && (
                            <Box className="topsextion_heading1" >
                                <Box mb={4}>
                                    <Input className="topsection-input_mobile"  placeholder="Enter the VIN for this vehicle" />
                                </Box>

                                <Flex >
                                    <Button  onClick={toggleGridVisibility}  className="mobile_find-parts-btn" >Find My Parts</Button>
                                </Flex>
                                <Text className="box-one-text" >
                                    For the most accurate results, search by your VIN (vehicle identification number).
                                </Text>
                            </Box>
                        )}
                        {showTopSection2 && (
                            <Box className="topsextion_heading2" >
                                <Menu >
                                    <MenuButton className="topsection-input_lowerpart" as={Button} rightIcon={<ChevronDownIcon />}>
                                        -- Select Year --
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Download</MenuItem>
                                        <MenuItem>Create a Copy</MenuItem>
                                        <MenuItem>Mark as Draft</MenuItem>
                                        <MenuItem>Delete</MenuItem>
                                        <MenuItem>Attend a Workshop</MenuItem>
                                    </MenuList>
                                </Menu>
                                <Menu >
                                    <MenuButton mt={10} className="topsection-input_lowerpart" as={Button} rightIcon={<ChevronDownIcon />}>
                                        -- Select Make --
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Download</MenuItem>
                                        <MenuItem>Create a Copy</MenuItem>
                                        <MenuItem>Mark as Draft</MenuItem>
                                        <MenuItem>Delete</MenuItem>
                                        <MenuItem>Attend a Workshop</MenuItem>
                                    </MenuList>
                                </Menu>
                                <Menu >
                                    <MenuButton mt={10} className="topsection-input_lowerpart" as={Button} rightIcon={<ChevronDownIcon />}>
                                        -- Select Model --
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Download</MenuItem>
                                        <MenuItem>Create a Copy</MenuItem>
                                        <MenuItem>Mark as Draft</MenuItem>
                                        <MenuItem>Delete</MenuItem>
                                        <MenuItem>Attend a Workshop</MenuItem>
                                    </MenuList>
                                </Menu>

                                <Flex justify="end">
                                    <Button  onClick={toggleGridVisibility} mt={14} className="mobile_find-parts-btn" >Find My Parts</Button>
                                </Flex>
                            </Box>
                        )}
                    </Container>
                </Box>

            <Text className="text-below-box" >
                We offer a full selection of genuine Toyota Drain Plugs, engineered specifically to restore factory performance. Please narrow the Oil Drain Plug results by selecting the vehicle.
            </Text>

            <Box className="productDetail-main-box">
                <Flex className="productDetail-innerbox" >
                    <Box className="productDetail-box1" display="flex" flexDirection="column">
                        <Box mb={4}>
                            <Image className="productDetail-box1-img"  src="/images/toyota-plug.jpg" alt="Image 1" />
                        </Box>
                        <Box mb={4}>
                            {/*<Image height="100px" src="/images/toyota-plug.jpg" alt="Image 2" />*/}
                            <Text className="bussiness-url" margin="0" as="h5" mt={4}>
                                View related parts
                            </Text>
                        </Box>
                    </Box>

                    <Box className="productDetail-box2" flex="1">
                        <Flex className="productDetail-box2-flex" >
                            {/* Left Sub-Column */}
                            <Box className="productDetail-box2-heads">
                                <Text onClick={handleProductClick} cursor="pointer" className="detail-box2-title"
                                      fontSize="xl">Toyota Plug, W/HEAD STRAIGH</Text>
                                <Text className="detail-box2-heading1" fontSize="md">Part Number:
                                    <span className="detail-box2-partno">90341-12012</span>
                                </Text>
                                <Button mb={10} className="vs-btn">Vehicle Specific</Button>

                                <Text className="detail-box2-subheading" margin={0} fontSize="xl">Other Name: Plug(For
                                    Oil Pan Drain)</Text>
                                <Text className="detail-box2-subheading" margin={0} fontSize="xl">Replaces:
                                    90341-12026</Text>

                                <Text className="detail-box2-subheading" mt={10} fontSize="xl" fontWeight="600">Fits the
                                    following Toyota Models:</Text>

                                <ViewMoreList items={itemsList1} />
                            </Box>

                            {/* Right Sub-Column */}
                            <Box className="product-price-box">
                                <Text className="product-price" fontSize="xl">$99.99
                                    <span className="product-price-span">
                                    MSRP:
                                    <span style={{textDecoration: 'line-through'}}>
                                        $6.55
                                    </span>
                                </span>
                                </Text>
                                <Text className="save-price" fontSize="xl">4
                                    You Save: $1.86 (29%)
                                </Text>
                                <Box display="grid">
                                    <Button className="check-fit-btn" colorScheme="teal">Check the fit</Button>
                                    <Button onClick={handleAddCart}  mt={10} className="add-to-cart-btn" colorScheme="teal">Add to Cart</Button>
                                </Box>

                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>

            <Grid
                templateColumns="repeat(6, 1fr)"
                className="list-grid main-padding"
                mb={35}
                mt={0}
            >
                <GridItem colSpan={6} bg="#fff">
                    <Flex>
                        <Box width="100%">
                            <Grid className="detail-grid">
                                <Heading className="detail-heading" as="h3">
                                    Related Toyota Parts
                                </Heading>
                            </Grid>
                            <Grid className="productdetail-grid" gap={6}>
                                <Product
                                    image="/images/drain-plug.png"
                                    description="Drain Plug"
                                >
                                </Product>
                                <Product
                                    image="/images/lug-nuts.png"
                                    description="Lug Nuts"
                                />
                                <Product
                                    image="/images/brake-pad-set.png"
                                    description="Brake Pad Set"
                                />
                                <Product
                                    image="/images/brake-master-cylinder.jpg"
                                    description="Brake Master Cylinder"
                                />
                                <Product
                                    image="/images/automatic-transmission-filter.jpg"
                                    description="Automatic Transmission Filter"
                                />
                                <Product
                                    image="/images/shift-cable.jpg"
                                    description="Shift Cable"
                                />
                                <Product
                                    image="/images/pinion-bearing.jpg"
                                    description="Pinion Bearing"
                                />

                                <Product
                                    image="/images/sway-bar-bushing.jpg"
                                    description="Sway Bar Bushing"
                                />
                                <Product
                                    image="/images/steering-wheel.jpg"
                                    description="Steering Wheel"
                                />
                                <Product
                                    image="/images/parking-brake-cable.jpg"
                                    description="Parking Brake Cable"
                                />
                                <Product
                                    image="/images/steering-column-cover.jpg"
                                    description="Steering Column Cover"
                                />

                            </Grid>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>


        </Box>
    );
};

export default ProductDetail;
