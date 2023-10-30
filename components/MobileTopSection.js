// components/Header.js
import React, { useState } from 'react';
import {Heading,Input,Grid, GridItem ,Box,Container, Image,Text, Flex, Link, Button, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import '../styles//global.css';
import {ChevronDownIcon} from "@chakra-ui/icons";
import ImageCarousel from '../components/ImageCarousel';
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
                            <Button  className="mobile_find-parts-btn" >Find My Parts</Button>
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
                            <Button mt={14} className="mobile_find-parts-btn" >Find My Parts</Button>
                        </Flex>
                    </Box>
                    )}
                </Container>
    </Box>
</>

    );
};

export default MobileTopSection;
