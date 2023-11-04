// components/Header.js
import React from 'react';
import { useRouter } from 'next/router';
import {Heading,Input,Grid, GridItem ,Box,Container, Image,Text, Flex, Link, Button, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import '../styles//global.css';
import {ChevronDownIcon} from "@chakra-ui/icons";
import ImageCarousel from '../components/ImageCarousel';
const TopSection = () => {

    const images = [
        '/images/engine.png',
        '/images/engine.png',
    ];

    const router = useRouter();
    const handleFindPartsClick = () => {
        router.push('/ProductList');
    };
    const years = Array.from({ length: 2023 - 1969 + 1 }, (_, index) => 2023 - index);

    return (

        <Grid className="topSection_main-padding" >
            <GridItem className="section-first"   >
                <Heading background="#003566" color="white" as="h3"  textAlign="left" margin="0px" padding="5px 8px">
                    Shop for Toyota Parts
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
                            <Button onClick={handleFindPartsClick} mt={4} className="find-parts-btn" >Find My Parts</Button>
                        </Flex>
                        <Text className="box-one-text" >
                            For the most accurate results, search by your VIN (vehicle identification number).
                        </Text>
                    </Box>

                    <Box className="topsextion_heading2">
                        {/*<Image src="/images/or.png" alt="Image Alt Text" className="or-image"/> /!* Replace with your image path *!/*/}
                        <Heading className="or-image" as="h3" size="lg" mb={4}>
                            OR
                        </Heading>
                        <Heading as="h3" size="lg" mb={4}>
                            Select Vehicle by Model
                        </Heading>

                        <Menu>
                            <MenuButton className="topsection-input" as={Button} rightIcon={<ChevronDownIcon />}>
                                -- Select Year --
                            </MenuButton>
                            <Box maxHeight="200px" overflowY="auto">
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
                            </Box>
                        </Menu>
                        <Menu>
                            <MenuButton mt={10} className="topsection-input" as={Button} rightIcon={<ChevronDownIcon />}>
                                -- Select Make --
                            </MenuButton>
                            <Box maxHeight="200px" overflowY="auto">
                                <MenuList >
                                    <MenuItem className="menu-item">Toyota</MenuItem>
                                    <MenuItem className="menu-item">Scion</MenuItem>

                                </MenuList>
                            </Box>
                        </Menu>
                        <Menu >
                            <MenuButton mt={10} className="topsection-input" as={Button} rightIcon={<ChevronDownIcon />}>
                                -- Select Model --
                            </MenuButton>
                            <MenuList style={{overflowY: 'auto',maxHeight:'250px'}}>
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
                            <Button onClick={handleFindPartsClick} mt={14} className="find-parts-btn" >Find My Parts</Button>
                        </Flex>
                    </Box>
                </Container>
            </GridItem>
            <GridItem className="section-second" >
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
                        <span className="adds-text" >
                            Wholesale Retailer
                        </span>
                    </Text>
                    <Button className="red-btn" >Join Now</Button>
                </Box>
            </GridItem>
        </Grid>

    );
};

export default TopSection;
