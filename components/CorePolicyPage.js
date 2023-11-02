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
const CorePolicyPage = () => {

    const router = useRouter();

    const handleHomeClick = () => {
        router.push('/');
    };

    const items = [
        'Starters',
        'ABS Modulators',
        'Alternators',
        'Power Steering Pumps',
        'Brake Calipers',
        'Power Steering Racks',
        'Automatic Transmissions',
    ];

    return (
        <Box >

            <Grid
                className="p-grid main-padding"
                mb={35}
                mt={0}
            >
                <Grid colSpan={1} className="policy-left-row"  gap={6}>

                    <GridItem rowSpan={1} colSpan={1} bg="white" p={4}>

                        <Box position="sticky" top="0px" mt={15} border="1px solid #b0b0b0" alignItems="center">
                            <Text  className="vm-leftside-heading" size="lg">
                                Categories
                            </Text>
                            <Box

                                className="vm-leftside-box" fontSize="small" >
                                Contact Us
                            </Box>
                            <Box
                                className="vm-leftside-box" fontSize="small" >
                                Help Center
                            </Box>
                            <Box
                                className="vm-leftside-box" fontSize="small" >
                                <Icon height="10px" as={FaPlus} mr={2} /> Policies
                            </Box>
                            <Box>
                                <Box
                                    className="vm-leftside-box" fontSize="small" >
                                    Sales Policy
                                </Box>
                                <Box
                                    className="vm-leftside-box" fontSize="small" >
                                    Return Policy
                                </Box>
                                <Box
                                    className="vm-leftside-box" fontSize="small" >
                                    Privacy Policy
                                </Box>
                                <Box
                                    className="vm-leftside-box" fontSize="small" >
                                    Remanufactured Parts/Core Policy
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                </Grid>

                <GridItem  colSpan={1} bg='#fff'>
                    <Breadcrumb className="policy-breadcrum"  separator=">">
                        <BreadcrumbItem fontSize="14px">
                            <BreadcrumbLink cursor="pointer" onClick={handleHomeClick}>Home</BreadcrumbLink>
                        </BreadcrumbItem >
                        <BreadcrumbItem fontSize="14px" isCurrentPage>
                            <BreadcrumbLink href="#">Return Policy</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Flex>
                        <Box width="100%">
                            <Grid className="policy-grid" >
                                <Box className="policy-box" >
                                    <Heading mt={10} mb={10} className="policy-heading"  as="h2">
                                        Remanufactured Parts/Core Policy
                                    </Heading>

                                    <Text className="policy-normal-text" margin={0} >
                                        Toyota offers warranty of 12 months or 12,000 miles that cover non remanufactured parts against defects and workmanship.<br/>
                                        <br/>
                                        The added value that is provided with factory remanufactured parts far exceeds any benefits cited by aftermarket sources of non factory rebuilt parts.
                                    </Text>

                                    <Text  mt={10} mb={0} as="h4">
                                        Benefits:
                                    </Text>

                                    <Text className="policy-normal-text"  margin={0}>
                                        1. Rebuilt to factory specifications using OEM parts in the remanufacturing process.<br/>
                                            <br/>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        2. Quality controlled to meet the "same as new" performance at a substantially reduced price.<br/>
                                                <br/>
                                        3. Greater warranty period (as mentioned above).<br/>
                                            <br/>
                                        4. Specific application to your Toyota means no guesswork when installing.<br/>
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Ordering:
                                    </Text>

                                    <Text className="policy-normal-text"  margin={0}>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        The Toyotapartsdeal.com catalog will identify when a remanufactured item is available by having a suffix of "RM" at the end of a part number. When looking up your part the description of a part may be the actual remanufactured part number.<br/>
                                        <br/>
                                        The following is a sample of Factory Parts that are available in the Toyota Remanufacturing program.<br/>
                                    </Text>

                                         <ul className="items-listr">
                                            <li className="itemr">Starters</li>
                                            <li className="itemr">ABS Modulators</li>
                                            <li className="itemr">Alternators</li>
                                            <li className="itemr">Power Steering Pumps</li>
                                            <li className="itemr">Brake Calipers</li>
                                            <li className="itemr">Power Steering Racks</li>
                                            <li className="itemr">Automatic Transmissions</li>
                                        </ul>
                                    <Text className="policy-normal-text"  mt={0}>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        All remanufactured parts have a "core charge" that is attached to each item; the
                                        charges vary from $20.00 to $1000.00 depending on the item that is being
                                        purchased.<br/>
                                    </Text>
                                    <Text className="policy-normal-text"  margin={0}>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        This core charge is charged as a separate entry when placing the order for a remanufactured part. The term "core charge" will be listed below the remanufactured part number along with the dollar amount.<br/>
                                        <br/>
                                        This individual charge is refundable to the customer when ALL of the following conditions are met.<br/>
                                    </Text>
                                    <Text className="policy-normal-text"  mt={10}>
                                        1. Part(s) is/are returned for core credit in the original Toyota box that it was shipped out in without damage to the box and with no marking to the box from any outside sources.<br/>
                                    </Text>
                                    <Text className="policy-normal-text"  mt={10}>
                                        2. The part being returned is a factory part. Any part that is not an original OEM part that was fitted to the same vehicle that the original part was ordered for will not qualify for core refund.<br/>
                                    </Text>
                                    <Text className="policy-normal-text"  mt={10}>
                                        3. Part must be fully assembled as it came off the vehicle.<br/>
                                    </Text>
                                    <Text className="policy-normal-text"  mt={10}>
                                        4. Part must be completely drained of all internal fluid (transmission, power steering, brake fluid etc.) prior to shipping. Toyotapartsdeal.com will not assume any responsibility for the shipping of any Hazardous Material by customers.
                                    </Text>
                                    <Text className="policy-normal-text"  mt={10}>
                                        5. Core must be complete and damage free. Incomplete parts missing any components will not be eligible for core refund.
                                    </Text>
                                    <Text className="policy-normal-text"  mt={10}>
                                        6. Customer is responsible for shipping all cores include shipping charge.
                                    </Text>
                                    <Text className="policy-normal-text" mt={10}>
                                        7. Cores damaged in transit to us is/are the responsibility of the sender. Insurance from the carrier is strongly recommended.
                                    </Text>
                                    <Text className="policy-normal-text"  mt={10}>
                                        8. All cores must be received no later than 30 days from the time of shipping the remanufactured part(s).
                                    </Text>
                                    <Text className="policy-normal-text"  mt={10}>
                                        9. Cores that do not meet ALL of the above criteria will be refused and no refund will be given. The customer then has the option to have the returned item(s) shipped back at their expense. Your part will be held for 14 business days before being discarded and after this time, we are no longer responsible for the item(s).
                                    </Text>
                                    <Text className="policy-normal-text"  mt={10}>
                                        Please contact us for any additional questions regarding the ordering of Remanufactured Parts and the return of Cores.
                                    </Text>
                                </Box>
                            </Grid>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default CorePolicyPage;
