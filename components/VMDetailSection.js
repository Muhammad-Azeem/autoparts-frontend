// components/Header.js
import React, {useEffect, useState} from 'react';
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
    Center, Breadcrumb, BreadcrumbItem, BreadcrumbLink, ListItem, List, Icon
} from '@chakra-ui/react';
import '../styles//global.css';

import {ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
import Product from "./Product";
import {FaMinus, FaPlus} from "react-icons/fa";
import ProductListing from "./ProductListing";
import {getAllCategories, getProductByCategoryId} from "./API/api";
const DetailSection = ({title}) => {
    const [activeGridItem, setActiveGridItem] = useState(1);

    const [isBoxVisible, setIsBoxVisible] = useState(false);

    const toggleBoxVisibility = () => {
        setIsBoxVisible(true);

        // Scroll to the top of the page
        if (isBoxVisible) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    const [isGrid1Visible, setIsGrid1Visible] = useState(true);
    const [isGrid2Visible, setIsGrid2Visible] = useState(false);

    const toggleGridVisibility = () => {
        setIsGrid1Visible(!isGrid1Visible);
        setIsGrid2Visible(!isGrid2Visible);
    };

    //list
    const [isBodyPartsOpen, setBodyPartsOpen] = useState(true);
    const [isElectricalOpen, setElectricalOpen] = useState(true);
    const [isEngineFuelToolOpen, setEngineFuelToolOpen] = useState(true);
    const [isPowerTrainChassisOpen, setPowerTrainChassisOpen] = useState(true);

    const toggleList = (listName) => {
        switch (listName) {
            case 'BodyParts':
                setBodyPartsOpen(!isBodyPartsOpen);
                break;
            case 'Electrical':
                setElectricalOpen(!isElectricalOpen);
                break;
            case 'EngineFuelTool':
                setEngineFuelToolOpen(!isEngineFuelToolOpen);
                break;
            case 'PowerTrainChassis':
                setPowerTrainChassisOpen(!isPowerTrainChassisOpen);
                break;
            default:
                break;
        }
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

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const router = useRouter();
    const { categoryId } = router.query;
    const handleHomeClick = () => {
        // Use router.push to navigate to the product list page
        router.push('/'); // Replace '/productlist' with the actual URL of your product list page
    };
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchProductsByCategoryId = async (temp) => {
            try {
                const data = await getProductByCategoryId(temp);
                const categories = await getAllCategories();
                setCategories(categories)
                setProducts(data.products)
                setCategory(data.category)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        if(categoryId){
            fetchProductsByCategoryId(categoryId);
        }
    }, [categoryId]); // Empty dependency array ensures this effect runs once on mount

    const handleCategoryClick =async (id) => {
        const data = await getProductByCategoryId(id);
        setProducts(data.products)
        setCategory(data.category)
    }
    return (
            <>
                <Box className="Vm-top-section">
                    <Flex>
                        <Image className="Vm-top-section-img1" src="/images/parts-banner-home.webp" mr="2" />
                        <Image className="Vm-top-section-img2" src="/images/parts-banner-acc.webp"  ml="2" />
                    </Flex>
                </Box>

                {isBoxVisible && (
                    <>
                <Box className="Vm-middle-section" >
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
                                <MenuList style={{zIndex:'2',overflowY: 'auto',maxHeight:'250px'}}>
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
                        </>
                )}

                {isGrid1Visible && (
                <Grid
                    className="grid main-padding"
                    mb={35}
                    >

                        <Grid className="left-row" templateColumns="repeat(1, 1fr)" gap={6}>
                            <GridItem rowSpan={1} colSpan={1} bg="white" p={4}>
                                <Box border="1px solid #b0b0b0" alignItems="center">
                                    <Text  className="vm-leftside-heading" size="lg">
                                        Categories
                                    </Text>
                                    {
                                        categories.map((category, index) => (
                                            <Box key={index} onClick={() => handleCategoryClick(category.id)}className="vm-leftside-box" fontSize="small" color="grey">
                                                [+] {category.name}
                                            </Box>
                                        ))
                                    }
                                </Box>
                            </GridItem>
                        </Grid>

                        <Menu className="menu-show" >
                            <MenuButton className="menu-show endbar-topsection-input2" as={Button} rightIcon={<ChevronDownIcon />}>
                                -- Select Category --
                            </MenuButton>
                            <MenuList zIndex={3} >
                                <MenuItem onClick={() => setActiveGridItem(1)} className="menu-item">[+] Body Parts</MenuItem>
                                <MenuItem onClick={() => setActiveGridItem(2)} className="menu-item">[+] Electrical</MenuItem>
                                <MenuItem onClick={() => setActiveGridItem(3)}  className="menu-item">[+] Engine/Fuel/Tool</MenuItem>
                                <MenuItem onClick={() => setActiveGridItem(4)} className="menu-item">  [+] Power Train/Chassis</MenuItem>
                            </MenuList>
                        </Menu>

                        {activeGridItem === 1 &&
                            <GridItem  colSpan={4} bg='#F4F4F4'>
                                    <Flex>
                                        <Box width="100%">
                                            <Breadcrumb className="breadcrum" spacing='5px' separator={<ChevronRightIcon color='gray.500' />}>
                                                <BreadcrumbItem className="breadcrum-ol" >
                                                    <BreadcrumbLink textDecoration="underline"  cursor="pointer" onClick={handleHomeClick}>Home</BreadcrumbLink>
                                                </BreadcrumbItem>

                                                <BreadcrumbItem  className="breadcrum-ol" isCurrentPage>
                                                    <BreadcrumbLink fontWeight="600" href='#'>Popular Toyota {category.name}</BreadcrumbLink>
                                                </BreadcrumbItem>
                                            </Breadcrumb>
                                            <Heading className="section-headings" as="h2">
                                                Popular Toyota {category.name}
                                                <a className="see-more" onClick={toggleBoxVisibility}>
                                                    See More {'>'}{'>'}
                                                </a>
                                            </Heading>

                                        <Grid className="item productblock-grid" gap={6}>
                                            {products.map((product) => (
                                                <Product
                                                    description={product.name}
                                                    image={product.images}
                                                    id={product.id}
                                                />
                                            ))}
                                        </Grid>
                                            <Text ml={10} mb={10} mt={10}>
                                                <a  className="see-more" onClick={toggleBoxVisibility}>
                                                    See more body parts {'>'}{'>'}
                                                </a>
                                            </Text>
                                        </Box>
                                    </Flex>
                            </GridItem>
                        }
                    </Grid>
                    )}
                {isGrid2Visible && (

                    <ProductListing />
                    )}
            </>
    );
};

export default DetailSection;
