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
import Product from "./Product";
import {FaMinus, FaPlus} from "react-icons/fa";
const ProductListing = () => {
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

    const powerTrainChassisRef = useRef();
    const engineFuelToolChassisRef = useRef();
    const electricalChassisRef = useRef();
    const bodyPartsChassisRef = useRef();

    const scrollToListSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const router = useRouter();

    const handleHomeClick = () => {
        router.push('/');
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
                            <Box
                                onClick={() => {scrollToListSection(bodyPartsChassisRef);}}
                                className="vm-leftside-box" fontSize="small" color="grey">
                                Body Parts
                            </Box>
                            <Box
                                onClick={() => {scrollToListSection(electricalChassisRef);}}
                                className="vm-leftside-box" fontSize="small" color="grey">
                                Electrical
                            </Box>
                            <Box
                                onClick={() => {scrollToListSection(engineFuelToolChassisRef);}}
                                className="vm-leftside-box" fontSize="small" color="grey">
                                Engine/Fuel/Tool
                            </Box>
                            <Box
                                onClick={() => {scrollToListSection(powerTrainChassisRef);}}
                                 className="vm-leftside-box" fontSize="small" color="grey">
                                Power Train/Chassis
                            </Box>
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
                                    <Heading  className="list-category"  onClick={() => toggleList('BodyParts')} as="h3">
                                        {isBodyPartsOpen ? (
                                            <>
                                                <Icon height="10px" as={FaMinus} mr={2} /> Body Parts
                                            </>
                                        ) : (
                                            <>
                                                <Icon height="10px" as={FaPlus} mr={2} /> Body Parts
                                            </>
                                        )}
                                    </Heading>
                                    {isBodyPartsOpen && (
                                        <List className="category-list-ul" spacing={3} ref={bodyPartsChassisRef}>
                                            <ListItem className="category-list-item">
                                                Accelerator Link
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Armrest & Visor
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Back Door Lock & Hinge
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Back Door Panel & Glass
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Battery Carrier
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Cab Mounting & Body Mounting
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Caution Plate
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                        </List>
                                    )}

                                    <Heading className="list-category" onClick={() => toggleList('Electrical')} as="h3">
                                        {isElectricalOpen ? (
                                            <>
                                                <Icon height="10px" as={FaMinus} mr={2} /> Electrical
                                            </>
                                        ) : (
                                            <>
                                                <Icon height="10px" as={FaPlus} mr={2} /> Electrical
                                            </>
                                        )}
                                    </Heading>
                                    {isElectricalOpen && (
                                        <List className="category-list-ul" spacing={3} ref={electricalChassisRef}>
                                            <ListItem className="category-list-item">
                                                Accelerator Link
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Armrest & Visor
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Back Door Lock & Hinge
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Back Door Panel & Glass
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Battery Carrier
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Cab Mounting & Body Mounting
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Caution Plate
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                        </List>
                                    )}

                                    <Heading className="list-category" onClick={() => toggleList('EngineFuelTool')} as="h3">
                                        {isEngineFuelToolOpen ? (
                                            <>
                                                <Icon height="10px" as={FaMinus} mr={2} /> Engine/Fuel/Tool
                                            </>
                                        ) : (
                                            <>
                                                <Icon height="10px" as={FaPlus} mr={2} /> Engine/Fuel/Tool
                                            </>
                                        )}
                                    </Heading>
                                    {isEngineFuelToolOpen && (
                                        <List className="category-list-ul" spacing={3}  ref={engineFuelToolChassisRef}>
                                            <ListItem className="category-list-item">
                                                Accelerator Link
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Armrest & Visor
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Back Door Lock & Hinge
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Back Door Panel & Glass
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Battery Carrier
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Cab Mounting & Body Mounting
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Caution Plate
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                        </List>
                                    )}

                                    <Heading className="list-category" onClick={() => toggleList('PowerTrainChassis')} as="h3">
                                        {isPowerTrainChassisOpen ? (
                                            <>
                                                <Icon height="10px" as={FaMinus} mr={2} /> Power Train/Chassis
                                            </>
                                        ) : (
                                            <>
                                                <Icon height="10px" as={FaPlus} mr={2} /> Power Train/Chassis
                                            </>
                                        )}
                                    </Heading>
                                    {isPowerTrainChassisOpen && (
                                        <List className="category-list-ul" spacing={3} ref={powerTrainChassisRef}>
                                            <ListItem className="category-list-item">
                                                Accelerator Link
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Armrest & Visor
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Back Door Lock & Hinge
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Back Door Panel & Glass
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Battery Carrier
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Cab Mounting & Body Mounting
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                            <ListItem className="category-list-item">
                                                Caution Plate
                                                <Image float="right" height="15px"  src="/images/search-list-category.png" mr="2" />
                                            </ListItem>
                                        </List>
                                    )}
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
