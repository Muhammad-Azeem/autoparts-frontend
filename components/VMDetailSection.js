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
import {vehicleCompany, vehicleModels , vehicleYears,getAllCategories, getProductByCategoryId} from "./API/api";

const DetailSection = ({title}) => {

    const [years, setYears] = useState([]);
    const [models, setModels] = useState([]);
    const [company, setCompany] = useState([]);

    useEffect(() => {
        const fetchYears = async () => {
          try {
            const response = await vehicleYears();
             setYears(response);
          } catch (error) {
            console.error('Error fetching years:', error);
          }
        };

        fetchYears();
      }, []);

      useEffect(() => {
        const fetchModels = async () => {
          try {
            const response = await vehicleModels();
            setModels(response);
          } catch (error) {
            console.error('Error fetching models:', error);
          }
        };

        fetchModels();
      }, []);

      useEffect(() => {
        const fetchCompany = async () => {
          try {
            const response = await vehicleCompany();
            setCompany(response);
          } catch (error) {
            console.error('Error fetching companies:', error);
          }
        };

        fetchCompany();
      }, []);

      const [selectedYear, setSelectedYear] = useState(null);

      const handleYearSelection = (selectedYear) => {
          setSelectedYear(selectedYear);
      };
      const [selectedModal, setSelectedModal] = useState(null);

      const handleModelSelection = (selectedModal) => {
        setSelectedModal(selectedModal);
      };

      const [selectedCompany, setSelectedCompany] = useState(null);

      const handleCompanySelection = (selectedCompany) => {
          setSelectedCompany(selectedCompany);
        };

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
                            <Menu>
                            <MenuButton className="endbar-topsection-input2" as={Button} rightIcon={<ChevronDownIcon />}>
                                {selectedCompany || '-- Select Company --'}
                            </MenuButton>
                            <MenuList zIndex={1}  maxHeight="200px" overflowY="auto">
                                {company.length > 0 &&
                                company.map((company) => (
                                    <MenuItem className="menu-item" key={company} onClick={() => handleCompanySelection(company)}>
                                    {company}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>

                        <Menu>
                            <MenuButton  className="endbar-topsection-input2" as={Button} rightIcon={<ChevronDownIcon />}>
                                {selectedModal || '-- Select Modal --'}
                            </MenuButton>
                            <MenuList zIndex={1}  maxHeight="200px" overflowY="auto">
                                {models.length > 0 &&
                                models.map((model) => (
                                    <MenuItem className="menu-item" key={model} onClick={() => handleModelSelection(model)}>
                                    {model}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>

                        <Menu>
                            <MenuButton   className="endbar-topsection-input2"  as={Button} rightIcon={<ChevronDownIcon />}>
                                {selectedYear || '-- Select Modal --'}
                            </MenuButton>
                            <MenuList zIndex={1}   maxHeight="200px" overflowY="auto">
                                {years.length > 0 &&
                                years.map((year) => (
                                    <MenuItem className="menu-item" key={year} onClick={() => handleYearSelection(year)}>
                                    {year}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>

                            {/* <Menu >
                                <MenuButton className="endbar-topsection-input2" as={Button} rightIcon={<ChevronDownIcon />}>
                                    -- Select Submodel --
                                </MenuButton>
                                <MenuList maxHeight="200px" overflowY="auto" zIndex={3} >
                                    <MenuItem className="menu-item">NAP</MenuItem>
                                    <MenuItem className="menu-item">NAP - Hybrid</MenuItem>

                                </MenuList>
                            </Menu> */}
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
                                                // eslint-disable-next-line react/jsx-key
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
