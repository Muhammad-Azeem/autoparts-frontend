// components/Header.js
import React, { useState } from 'react';
import {Heading,Input,Grid, GridItem ,Box,Container, Image,Text, Flex, Link, Button, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import '../styles//global.css';
import {ChevronDownIcon} from "@chakra-ui/icons";
import ImageCarousel from '../components/ImageCarousel';
import {useRouter} from "next/router";
const MobileTopSection = () => {
    const images = [
        '/images/engine.png',
        '/images/engine.png',
    ];

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
    const handleFindPartsClick = () => {
        router.push('/ProductList');
    };

    return (
<>
            <Box className="section-second" >
                <div className="image-container">
                    <ImageCarousel images={images} />

                </div>
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                    zIndex="1"
                    color="white"
                    p={4}
                >
                    <Text fontSize="20px" mb={4}>
                        Are You a <br/>
                        <span className="adds-text">
                            Wholesale Retailer
                        </span>
                    </Text>
                    <Button className="red-btn">Join Now</Button>
                </Box>
            </Box>

            <Box className="mobile-topsection-lowerpart" >

                <Heading className="top-section_main-padding"  as="h3">
                    Shop for Toyota Parts
                </Heading>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"

                >
                    <Button onClick={handleButton1Click} className="mobile_topsection-button" variant="solid" >
                        Select Vehicle by VIN
                    </Button>
                    <Button  onClick={handleButton2Click} className="mobile_topsection-button2" variant="solid">
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
                            <Button onClick={handleFindPartsClick}  className="mobile_find-parts-btn" >Find My Parts</Button>
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
                            <MenuList style={{overflowY: 'auto',maxHeight:'250px'}} zIndex={3} >
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
                            <MenuButton mt={10} className="topsection-input_lowerpart" as={Button} rightIcon={<ChevronDownIcon />}>
                                -- Select Make --
                            </MenuButton>
                            <MenuList zIndex="1">
                                <MenuItem className="menu-item">Toyota</MenuItem>
                                <MenuItem className="menu-item">Scion</MenuItem>

                            </MenuList>
                        </Menu>
                        <Menu >
                            <MenuButton mt={10} className="topsection-input_lowerpart" as={Button} rightIcon={<ChevronDownIcon />}>
                                -- Select Model --
                            </MenuButton>
                            <MenuList style={{overflowY: 'auto',maxHeight:'250px'}} zIndex={3}>
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

                        <Flex justify="end">
                            <Button onClick={handleFindPartsClick} mt={14} className="mobile_find-parts-btn" >Find My Parts</Button>
                        </Flex>
                    </Box>
                    )}
                </Container>
    </Box>
</>

    );
};

export default MobileTopSection;
