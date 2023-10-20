// components/Header.js
import React from 'react';
import {Heading,Input,Grid, GridItem ,Box,Container, Image,Text, Flex, Link, Button, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import '../styles//global.css';
import {ChevronDownIcon} from "@chakra-ui/icons";
import ImageCarousel from '../components/ImageCarousel';
const TopSection = () => {
    const images = [
        '/images/engine.png',
        '/images/engine.png',
    ];
    return (

        <Grid mt={40} padding="0px 150px"  templateColumns='repeat(2, 1fr)' gap={6}>
            <GridItem  w='100%' h='10' bg='blue.500' >
                <Heading background="#003566" color="white" as="h3"  textAlign="left" margin="0px" padding="5px 8px">
                    Shop for Parts
                </Heading>
                <Container className="topsection-container"  maxW="container.md">
                    <Box className="topsextion_heading1">
                        <Flex align="center">
                            <Heading className="topsextion_headings-text" as="h3" size="lg" mb={4}>
                                Select Vehicle by VIN
                            </Heading>
                            <Image src="/images/question.png" alt="Image Alt Text" w={15} h={15}  />
                        </Flex>

                        <Box mb={4}>
                            <Input width="95%" padding="5px" placeholder="Enter the VIN for this vehicle" />
                        </Box>

                        <Flex justify="end">
                            <Button mt={4} className="find-parts-btn" >Find My Parts</Button>
                        </Flex>
                        <Text mt={50} textAlign="center" fontSize="sm" color="gray.500">
                            For the most accurate results, search by your VIN (vehicle identification number).
                        </Text>
                    </Box>
                    <Image src="/images/or.png" alt="Image Alt Text" className="or-image"/> {/* Replace with your image path */}

                    <Box className="topsextion_heading2">
                        <Heading as="h3" size="lg" mb={4}>
                            Select Vehicle by Model
                        </Heading>

                        <Menu >
                            <MenuButton className="topsection-input" as={Button} rightIcon={<ChevronDownIcon />}>
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
                            <MenuButton mt={10} className="topsection-input" as={Button} rightIcon={<ChevronDownIcon />}>
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
                            <MenuButton mt={10} className="topsection-input" as={Button} rightIcon={<ChevronDownIcon />}>
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
                            <Button mt={14} className="find-parts-btn" >Find My Parts</Button>
                        </Flex>
                    </Box>
                </Container>
            </GridItem>
            <GridItem w="100%" h={264} position="relative">
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
                        <Text margin="0px" fontSize="30px" fontWeight="700">
                            Wholesale Retailer
                        </Text>
                    </Text>
                    <Button className="red-btn" >Join Now</Button>
                </Box>
            </GridItem>
        </Grid>

    );
};

export default TopSection;
