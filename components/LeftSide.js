// components/Header.js
import React from 'react';
import {Heading,Input,Grid, GridItem ,Box,Container, Image,Text, Flex, Link, Button, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import '../styles//global.css';
import {ChevronDownIcon} from "@chakra-ui/icons";

const LeftSide = () => {
    return (

            <Grid templateColumns="repeat(1, 1fr)" gap={6}>
                <GridItem rowSpan={1} colSpan={1} bg="white" p={4}>
                    <Box display="flex" alignItems="center">

                        <div>
                            <Heading fontStyle="italic" color="grey" as="h4" size="lg" mb={4}>
                                Why Choose <span style={{ color: 'red' }}>Car Parts Website?</span>
                            </Heading>
                            <Heading as="h4" className="leftside-heading" size="lg">
                                <Image src="/images/SVG.png" alt="Image" className="leftside-image" />
                                Unparalleled Quality
                            </Heading>
                            <Text fontSize="small" color="grey">
                                Car Parts Website ensures unbeatable quality by offering genuine Toyota parts that are backed by the manufacturer's warranty. Trust in our years of experience as the top destination for auto parts and accessories to guarantee your vehicle's optimum performance and longevity.
                            </Text>
                        </div>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <div>
                            <Heading as="h4" className="leftside-heading" size="lg">
                                <Image src="/images/SVG.png" alt="Image" className="leftside-image" />
                                Exceptional Customer Service
                            </Heading>
                            <Text fontSize="small" color="grey">
                                Experience seamless shopping with our
                                exceptional customer service. We provide dedicated support through email, live chat, and phone calls. We prioritize you by expediting orders nationwide and offering a
                                simple, hassle-free return process, ensuring
                                the utmost satisfaction when purchasing.
                            </Text>
                        </div>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <div>
                            <Heading as="h4" className="leftside-heading" size="lg">
                                <Image src="/images/SVG.png" alt="Image" className="leftside-image" />
                                Unmatched Affordability
                            </Heading>
                            <Text fontSize="small" color="grey">
                                Discover unbeatable prices on all genuine parts and accessories. Car Parts Website believes that maintaining your vehicle shouldn't break the bank, and our extensive online catalog offers the best deals in the market. Our low prices and comprehensive inventory make us the ultimate choice for all your Toyota parts needs.                            </Text>
                        </div>
                    </Box>
                </GridItem>
                {/* Other GridItem or content */}
            </Grid>

    );
};

export default LeftSide;
