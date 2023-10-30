// components/Header.js
import React, {useRef, useState} from 'react';
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

const ProductDetail = () => {

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
    const router = useRouter();

    const handleHomeClick = () => {
        router.push('/');
    };
    return (
        <Box >
            <Breadcrumb className="Product-listing-breadcrum"  separator=">">
                <BreadcrumbItem fontSize="14px">
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
                                    <MenuItem className="menu-item">Download</MenuItem>
                                    <MenuItem className="menu-item">Create a Copy</MenuItem>
                                    <MenuItem className="menu-item">Mark as Draft</MenuItem>
                                    <MenuItem className="menu-item">Delete</MenuItem>
                                    <MenuItem className="menu-item">Attend a Workshop</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu >
                                <MenuButton className="endbar-topsection-input2" as={Button} rightIcon={<ChevronDownIcon />}>
                                    -- Select Model --
                                </MenuButton>
                                <MenuList zIndex={3} >
                                    <MenuItem className="menu-item">Download</MenuItem>
                                    <MenuItem className="menu-item">Create a Copy</MenuItem>
                                    <MenuItem className="menu-item">Mark as Draft</MenuItem>
                                    <MenuItem className="menu-item">Delete</MenuItem>
                                    <MenuItem className="menu-item">Attend a Workshop</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu >
                                <MenuButton className="endbar-topsection-input2" as={Button} rightIcon={<ChevronDownIcon />}>
                                    -- Select Year --
                                </MenuButton>
                                <MenuList zIndex={3} >
                                    <MenuItem className="menu-item">Download</MenuItem>
                                    <MenuItem className="menu-item">Create a Copy</MenuItem>
                                    <MenuItem className="menu-item">Mark as Draft</MenuItem>
                                    <MenuItem className="menu-item">Delete</MenuItem>
                                    <MenuItem className="menu-item">Attend a Workshop</MenuItem>
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

            <Box>
                <Flex>
                    {/* First Column */}
                    <Box flex="1">
                        <Image src="/image1.jpg" alt="Image 1" mb={4} />
                        <Image src="/image2.jpg" alt="Image 2" />
                    </Box>

                    {/* Second Column */}
                    <Box flex="1">
                        <Flex justifyContent="space-between" alignItems="center">
                            {/* Left Sub-Column */}
                            <Box>
                                <Text fontSize="xl">Product Title</Text>
                                <Text fontSize="md">Product Description goes here.</Text>
                            </Box>

                            {/* Right Sub-Column */}
                            <Box>
                                <Text fontSize="xl">$99.99</Text>
                                <Button colorScheme="teal">Add to Cart</Button>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>

        </Box>
    );
};

export default ProductDetail;
