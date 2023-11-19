// components/Header.js
import React, {useRef, useState , useEffect} from 'react';
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
import {getAllCategories, getProductsBySubCategoryId} from './API/api';
import {ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
import Product from "./Product";
import {FaMinus, FaPlus} from "react-icons/fa";
const ProductListing = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getAllCategories();
                setCategories(data);

            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const [activeGridItem, setActiveGridItem] = useState(1);

    const [isBoxVisible, setIsBoxVisible] = useState(false);

    const toggleBoxVisibility = () => {
        setIsBoxVisible(!isBoxVisible);

        // Scroll to the top of the page
        if (!isBoxVisible) {
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

    const isCategoryOpen = (categoryName) => {
        switch (categoryName) {
          case 'BodyParts':
            return isBodyPartsOpen;
          case 'Electrical':
            return isElectricalOpen;
          case 'EngineFuelTool':
            return isEngineFuelToolOpen;
          case 'PowerTrainChassis':
            return isPowerTrainChassisOpen;
          // Add cases for other categories
          default:
            return false;
        }
      };

    const scrollToListSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    // const refs = categories.map(() => useRef());

    // const powerTrainChassisRef = useRef();
    // const engineFuelToolChassisRef = useRef();
    // const electricalChassisRef = useRef();
    // const bodyPartsChassisRef = useRef();


    const router = useRouter();

    const handleHomeClick = () => {
        router.push('/');
    };
    const handleProductClick = (id) => {
        router.push('/ProductPage/'+id);
    };
    const [isDivOpen, setIsDivOpen] = useState(false);
    const divRef = useRef();

    // Close the div when clicking outside
    const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setIsDivOpen(false);
        }
    };

    // Close the div when the cursor hovers out
    const handleMouseLeave = () => {
        setIsDivOpen(false);
        setProductsByCategory([]);

    };
    const [productsByCategory, setProductsByCategory] = useState([])
    const handleMouseEnter = async (subCategoryId, subCategoryName) => {
        setIsDivOpen(subCategoryName);
        const response = await getProductsBySubCategoryId(subCategoryId)
        setProductsByCategory(response.products);
        console.log(response.products, 'tp')
    };

    // Add click outside event listener when the div is open
    useEffect(() => {
        if (isDivOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDivOpen]);
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleCategoryHover = (categoryName) => {
        setHoveredCategory(categoryName);
    };
    return (
        <Box >
            <Breadcrumb className="Product-listing-breadcrum"  separator=">">
                <BreadcrumbItem ml={4} fontSize="14px">
                    <BreadcrumbLink  textDecoration="underline" cursor="pointer" onClick={handleHomeClick}>Home</BreadcrumbLink>
                </BreadcrumbItem >
                <BreadcrumbItem fontSize="14px" isCurrentPage>
                    <BreadcrumbLink fontWeight="600" href="#">Category</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Heading className="Product-listing-heading"  margin="0" as="h2" mt={4}>
                2022 Toyota 4Runner Parts
            </Heading>
            <Grid
                templateColumns="20% 80%"
                className="list-grid main-padding"
                mb={35}
                mt={0}
            >
                <Grid colSpan={1} className="product-listing-left-row" mt={15} gap={6}>
                    <GridItem rowSpan={1} colSpan={1} bg="white" p={4}>
                        <Box border="1px solid #b0b0b0" alignItems="center">
                            <Text className="vm-leftside-heading" size="lg">
                                My Vehicle
                                <a className="change-vehicle">
                                    Change Vehicle
                                </a>
                            </Text>
                            <Box className="vmm-leftside-box" fontSize="lg" fontWeight="600" color="black">
                                2022 Toyota 4Runner
                            </Box>
                        </Box>

                        <Box position="sticky" top="0px" mt={15} border="1px solid #b0b0b0" alignItems="center">
                            <Text  className="vm-leftside-heading" size="lg">
                                Categories
                            </Text>
                            {categories.map((category, index) => (
                                <Box
                                key={index}
                                onClick={() => scrollToListSection()}
                                className="vm-leftside-box"
                                fontSize="small"
                                color="grey"
                                // ref={refs[index]}
                                >
                                {category.name}
                                </Box>
                            ))}
                        </Box>
                    </GridItem>
                </Grid>

                <GridItem  colSpan={1} bg='#fff'>
                    <Flex>
                        <Box width="100%">
                            <Grid className="list-grid" >
                                <Heading className="list-heading" as="h3" >
                                    Parts and Categories
                                </Heading>

                                    <Box className="list-category-box" >
                                        {categories.map((category, index) => (
                                            <>
                                                <Heading className="list-category"  onClick={() => toggleList(category.name)} as="h3">
                                                    <Icon height="10px" as={FaPlus} mr={2} />  {category.name}
                                                </Heading>
                                                {(category.name) && (
                                                    <List className="category-list-ul"
                                                    spacing={3}
                                                    >
                                                        {category.sub_categories.map((subCategory, subIndex) => (
                                                            <ListItem
                                                                onMouseLeave={handleMouseLeave}
                                                                onMouseEnter={() => handleMouseEnter(subCategory.id, subCategory.name)}
                                                                position="relative"
                                                                key={subIndex} className="category-list-item">
                                                                    {subCategory.name}
                                                                    <Image float="right" height="15px"src="/images/search-list-category.png" mr="2"
                                                            />
                                                                <div>
                                                                        {isDivOpen === subCategory.name && (
                                                                                <div
                                                                                    ref={divRef}
                                                                                    style={{
                                                                                        position: 'absolute',
                                                                                        top: '8px', // Adjust the positioning as needed
                                                                                        right: '35px',
                                                                                        maxWidth:'370px',
                                                                                        width:'100%',
                                                                                        background: 'white',
                                                                                        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                                                                                        zIndex: '9',
                                                                                    }}
                                                                                    onMouseLeave={handleMouseLeave}
                                                                                >
                                                                                    <div className='sub-mod-box' >
                                                                                        <Heading className='sub-mod-head'  margin="0" as="h2" mt={4}>
                                                                                            Parts in {subCategory.name}
                                                                                        </Heading>
                                                                                        {productsByCategory.map((product, index) => (

                                                                                            <Box mt={5} className='sub-mod-innerbox' display='flex' onClick={() => handleProductClick(product.id)}>
                                                                                                <Image className='sub-mod-innerbox-img' float="right" height="15px"src={product.images} mr="2"/>
                                                                                                <Text ml={25} mr={15} className='sub-mod-innerbox-text'>{product.name}</Text>
                                                                                            </Box>
                                                                                            ))}
                                                                                    </div>
                                                                                </div>
                                                                        )}

                                                                </div>
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                    )}
                                            </>
                                        ))}
                                    </Box>
                            </Grid>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default ProductListing;
