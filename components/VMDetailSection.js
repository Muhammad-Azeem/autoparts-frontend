// components/Header.js
import React, { useState } from 'react';
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
const DetailSection = ({title}) => {
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

    const router = useRouter();

    const handleHomeClick = () => {
        // Use router.push to navigate to the product list page
        router.push('/'); // Replace '/productlist' with the actual URL of your product list page
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
                                    <Box onClick={() => setActiveGridItem(1)}className="vm-leftside-box" fontSize="small" color="grey">
                                        [+] Body Parts
                                    </Box>
                                    <Box onClick={() => setActiveGridItem(2)} className="vm-leftside-box" fontSize="small" color="grey">
                                        [+] Electrical
                                    </Box>
                                    <Box onClick={() => setActiveGridItem(3)} className="vm-leftside-box" fontSize="small" color="grey">
                                        [+] Engine/Fuel/Tool
                                    </Box>
                                    <Box onClick={() => setActiveGridItem(4)} className="vm-leftside-box" fontSize="small" color="grey">
                                        [+] Power Train/Chassis
                                    </Box>
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
                                                    <BreadcrumbLink cursor="pointer" onClick={handleHomeClick}>Home</BreadcrumbLink>
                                                </BreadcrumbItem>

                                                <BreadcrumbItem  className="breadcrum-ol" isCurrentPage>
                                                    <BreadcrumbLink href='#'>Popular Toyota Body Parts</BreadcrumbLink>
                                                </BreadcrumbItem>
                                            </Breadcrumb>
                                            <Heading className="section-headings" as="h2">
                                                Popular Toyota Body Parts
                                                <a className="see-more" onClick={toggleBoxVisibility}>
                                                    See More {'>'}{'>'}
                                                </a>
                                            </Heading>

                                            <Grid className="item productblock-grid" gap={6}>
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
                                                    image="/images/brake-disc.png"
                                                    description="Brake Disc"
                                                />
                                                <Product
                                                    image="/images/wheel-bearing.png"
                                                    description="Wheel Bearing"
                                                />
                                                <Product
                                                    image="/images/wheel-stud.png"
                                                    description="Wheel Stud"
                                                />
                                                <Product
                                                    image="/images/ball-joint.png"
                                                    description="Ball Joint"
                                                />
                                                <Product
                                                    image="/images/backing-plate.png"
                                                    description="Backing Plate"
                                                />
                                                <Product
                                                    image="/images/wheel-seal.jpg"
                                                    description="Wheel Seal"
                                                />
                                                <Product
                                                    image="/images/control-arm.jpg"
                                                    description="Control Arm"
                                                />
                                                <Product
                                                    image="/images/torque-converter.jpg"
                                                    description="Torque Converter"
                                                />
                                                <Product
                                                    image="/images/transfer-case-seal.jpg"
                                                    description="Transfer Case Seal"
                                                />
                                                <Product
                                                    image="/images/strut-housing.jpg"
                                                    description="Strut Housing"
                                                />
                                                <Product
                                                    image="/images/coil-springs.jpg"
                                                    description="Coil Springs"
                                                />
                                                <Product
                                                    image="/images/tie-rod-end.jpg"
                                                    description="Tie Rod Eend"
                                                />
                                                <Product
                                                    image="/images/brake-drum.jpg"
                                                    description="Brake Drum"
                                                />

                                                <Product
                                                    image="/images/brake-proportioning-valve.jpg"
                                                    description="Brake Proportioning Valve"
                                                />
                                                <Product
                                                    image="/images/sway-bar-link.jpg"
                                                    description="Sway Bar Link"
                                                />
                                                <Product
                                                    image="/images/steering-shaft.jpg"
                                                    description="Steering Shaft"
                                                />
                                                <Product
                                                    image="/images/steering-knuckle.jpg"
                                                    description="Steering Knuckle"
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
                                            <Text ml={10} mb={10} mt={10}>
                                                <a  className="see-more" onClick={toggleBoxVisibility}>
                                                    See more body parts {'>'}{'>'}
                                                </a>
                                            </Text>
                                        </Box>
                                    </Flex>
                            </GridItem>
                        }
                        {activeGridItem === 2 &&
                            <GridItem  colSpan={4} bg='#F4F4F4'>
                                <Flex>
                                    <Box width="100%">
                                        <Breadcrumb className="breadcrum" spacing='5px' separator={<ChevronRightIcon color='gray.500' />}>
                                            <BreadcrumbItem className="breadcrum-ol" >
                                                <BreadcrumbLink cursor="pointer" onClick={handleHomeClick}>Home</BreadcrumbLink>
                                            </BreadcrumbItem>

                                            <BreadcrumbItem  className="breadcrum-ol" isCurrentPage>
                                                <BreadcrumbLink href='#'>Popular Toyota Electrical Parts</BreadcrumbLink>
                                            </BreadcrumbItem>
                                        </Breadcrumb>
                                        <Heading className="section-headings" as="h2" >
                                            Popular Toyota Electrical Parts
                                            <a className="see-more" onClick={toggleBoxVisibility}>
                                                See More {'>'}{'>'}
                                            </a>
                                        </Heading>

                                        <Grid className="item productblock-grid" gap={6}>
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
                                                image="/images/brake-disc.png"
                                                description="Brake Disc"
                                            />
                                            <Product
                                                image="/images/wheel-bearing.png"
                                                description="Wheel Bearing"
                                            />
                                            <Product
                                                image="/images/wheel-stud.png"
                                                description="Wheel Stud"
                                            />
                                            <Product
                                                image="/images/ball-joint.png"
                                                description="Ball Joint"
                                            />
                                            <Product
                                                image="/images/backing-plate.png"
                                                description="Backing Plate"
                                            />
                                            <Product
                                                image="/images/wheel-seal.jpg"
                                                description="Wheel Seal"
                                            />
                                            <Product
                                                image="/images/control-arm.jpg"
                                                description="Control Arm"
                                            />
                                            <Product
                                                image="/images/torque-converter.jpg"
                                                description="Torque Converter"
                                            />
                                            <Product
                                                image="/images/transfer-case-seal.jpg"
                                                description="Transfer Case Seal"
                                            />
                                            <Product
                                                image="/images/strut-housing.jpg"
                                                description="Strut Housing"
                                            />
                                            <Product
                                                image="/images/coil-springs.jpg"
                                                description="Coil Springs"
                                            />
                                            <Product
                                                image="/images/tie-rod-end.jpg"
                                                description="Tie Rod Eend"
                                            />
                                            <Product
                                                image="/images/brake-drum.jpg"
                                                description="Brake Drum"
                                            />

                                            <Product
                                                image="/images/brake-proportioning-valve.jpg"
                                                description="Brake Proportioning Valve"
                                            />
                                            <Product
                                                image="/images/sway-bar-link.jpg"
                                                description="Sway Bar Link"
                                            />
                                            <Product
                                                image="/images/steering-shaft.jpg"
                                                description="Steering Shaft"
                                            />
                                            <Product
                                                image="/images/steering-knuckle.jpg"
                                                description="Steering Knuckle"
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
                                        <Text ml={10} mb={10} mt={10}>
                                            <a  className="see-more" onClick={toggleBoxVisibility}>
                                                See more body parts {'>'}{'>'}
                                            </a>
                                        </Text>
                                    </Box>
                                </Flex>
                            </GridItem>
                        }
                        {activeGridItem === 3 &&
                            <GridItem  colSpan={4} bg='#F4F4F4'>
                                <Flex>
                                    <Box width="100%">
                                        <Breadcrumb className="breadcrum" spacing='5px' separator={<ChevronRightIcon color='gray.500' />}>
                                            <BreadcrumbItem className="breadcrum-ol" >
                                                <BreadcrumbLink cursor="pointer" onClick={handleHomeClick}>Home</BreadcrumbLink>
                                            </BreadcrumbItem>

                                            <BreadcrumbItem  className="breadcrum-ol" isCurrentPage>
                                                <BreadcrumbLink href='#'>Popular Toyota Engine/Fuel/Tool Parts</BreadcrumbLink>
                                            </BreadcrumbItem>
                                        </Breadcrumb>
                                        <Heading className="section-headings" as="h2" >
                                            Popular Toyota Engine/Fuel/Tool Parts
                                            <a className="see-more" onClick={toggleBoxVisibility}>
                                                See More {'>'}{'>'}
                                            </a>
                                        </Heading>

                                        <Grid className="item productblock-grid" gap={6}>
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
                                                image="/images/brake-disc.png"
                                                description="Brake Disc"
                                            />
                                            <Product
                                                image="/images/wheel-bearing.png"
                                                description="Wheel Bearing"
                                            />
                                            <Product
                                                image="/images/wheel-stud.png"
                                                description="Wheel Stud"
                                            />
                                            <Product
                                                image="/images/ball-joint.png"
                                                description="Ball Joint"
                                            />
                                            <Product
                                                image="/images/backing-plate.png"
                                                description="Backing Plate"
                                            />
                                            <Product
                                                image="/images/wheel-seal.jpg"
                                                description="Wheel Seal"
                                            />
                                            <Product
                                                image="/images/control-arm.jpg"
                                                description="Control Arm"
                                            />
                                            <Product
                                                image="/images/torque-converter.jpg"
                                                description="Torque Converter"
                                            />
                                            <Product
                                                image="/images/transfer-case-seal.jpg"
                                                description="Transfer Case Seal"
                                            />
                                            <Product
                                                image="/images/strut-housing.jpg"
                                                description="Strut Housing"
                                            />
                                            <Product
                                                image="/images/coil-springs.jpg"
                                                description="Coil Springs"
                                            />
                                            <Product
                                                image="/images/tie-rod-end.jpg"
                                                description="Tie Rod Eend"
                                            />
                                            <Product
                                                image="/images/brake-drum.jpg"
                                                description="Brake Drum"
                                            />

                                            <Product
                                                image="/images/brake-proportioning-valve.jpg"
                                                description="Brake Proportioning Valve"
                                            />
                                            <Product
                                                image="/images/sway-bar-link.jpg"
                                                description="Sway Bar Link"
                                            />
                                            <Product
                                                image="/images/steering-shaft.jpg"
                                                description="Steering Shaft"
                                            />
                                            <Product
                                                image="/images/steering-knuckle.jpg"
                                                description="Steering Knuckle"
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
                                        <Text ml={10} mb={10} mt={10}>
                                            <a  className="see-more" onClick={toggleBoxVisibility}>
                                                See more body parts {'>'}{'>'}
                                            </a>
                                        </Text>
                                    </Box>
                                </Flex>
                            </GridItem>
                        }
                        {activeGridItem === 4 &&
                            <GridItem  colSpan={4} bg='#F4F4F4'>
                                <Flex>
                                    <Box width="100%">
                                        <Breadcrumb className="breadcrum" spacing='5px' separator={<ChevronRightIcon color='gray.500' />}>
                                            <BreadcrumbItem className="breadcrum-ol" >
                                                <BreadcrumbLink cursor="pointer" onClick={handleHomeClick}>Home</BreadcrumbLink>
                                            </BreadcrumbItem>

                                            <BreadcrumbItem  className="breadcrum-ol" isCurrentPage>
                                                <BreadcrumbLink href='#'>Popular Toyota Power Train/Chassis Parts</BreadcrumbLink>
                                            </BreadcrumbItem>
                                        </Breadcrumb>
                                        <Heading className="section-headings" as="h2">
                                            Popular Toyota Power Train/Chassis Parts
                                            <a className="see-more" onClick={toggleBoxVisibility}>
                                                See More {'>'}{'>'}
                                            </a>
                                        </Heading>

                                        <Grid className="item productblock-grid" gap={6}>
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
                                                image="/images/brake-disc.png"
                                                description="Brake Disc"
                                            />
                                            <Product
                                                image="/images/wheel-bearing.png"
                                                description="Wheel Bearing"
                                            />
                                            <Product
                                                image="/images/wheel-stud.png"
                                                description="Wheel Stud"
                                            />
                                            <Product
                                                image="/images/ball-joint.png"
                                                description="Ball Joint"
                                            />
                                            <Product
                                                image="/images/backing-plate.png"
                                                description="Backing Plate"
                                            />
                                            <Product
                                                image="/images/wheel-seal.jpg"
                                                description="Wheel Seal"
                                            />
                                            <Product
                                                image="/images/control-arm.jpg"
                                                description="Control Arm"
                                            />
                                            <Product
                                                image="/images/torque-converter.jpg"
                                                description="Torque Converter"
                                            />
                                            <Product
                                                image="/images/transfer-case-seal.jpg"
                                                description="Transfer Case Seal"
                                            />
                                            <Product
                                                image="/images/strut-housing.jpg"
                                                description="Strut Housing"
                                            />
                                            <Product
                                                image="/images/coil-springs.jpg"
                                                description="Coil Springs"
                                            />
                                            <Product
                                                image="/images/tie-rod-end.jpg"
                                                description="Tie Rod Eend"
                                            />
                                            <Product
                                                image="/images/brake-drum.jpg"
                                                description="Brake Drum"
                                            />

                                            <Product
                                                image="/images/brake-proportioning-valve.jpg"
                                                description="Brake Proportioning Valve"
                                            />
                                            <Product
                                                image="/images/sway-bar-link.jpg"
                                                description="Sway Bar Link"
                                            />
                                            <Product
                                                image="/images/steering-shaft.jpg"
                                                description="Steering Shaft"
                                            />
                                            <Product
                                                image="/images/steering-knuckle.jpg"
                                                description="Steering Knuckle"
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
