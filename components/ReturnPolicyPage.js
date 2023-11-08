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
const ReturnPolicyPage = () => {

    const router = useRouter();

    const handleHomeClick = () => {
        router.push('/');
    };
    const handleSalesClick = () => {
        router.push('/SalesPolicy');
    };
    const handleReturnClick = () => {
        router.push('/ReturnPolicy');
    };
    const handlePrivacyClick = () => {
        router.push('/PrivacyPolicy');
    };
    const handleCoreClick = () => {
        router.push('/CorePolicy');
    };
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
                                    onClick={handleSalesClick}
                                    className="vm-leftside-box" fontSize="small" >
                                    Sales Policy
                                </Box>
                                <Box
                                    onClick={handleReturnClick}
                                    className="vm-leftside-box" fontSize="small" >
                                    Return Policy
                                </Box>
                                <Box
                                    onClick={handlePrivacyClick}
                                    className="vm-leftside-box" fontSize="small" >
                                    Privacy Policy
                                </Box>
                                <Box
                                    onClick={handleCoreClick}
                                    className="vm-leftside-box" fontSize="small" >
                                    Remanufactured Parts/Core Policy
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                </Grid>

                <Menu className="menu-show" >
                    <MenuButton className="menu-show endbar-topsection-input2" as={Button} rightIcon={<ChevronDownIcon />}>
                        -- Select Category --
                    </MenuButton>
                    <MenuList zIndex={3} >
                        <MenuItem   className="menu-item">
                            <Link className="success-leftside-link"  href="/">
                                Contact Us
                            </Link>
                        </MenuItem>
                        <MenuItem   className="menu-item">
                            <Link className="success-leftside-link"  href="/">
                                Help Center
                            </Link>
                        </MenuItem>
                        <MenuItem   onClick={handleSalesClick} className="menu-item">Sales Policy</MenuItem>
                        <MenuItem   onClick={handleReturnClick} className="menu-item">Return Policy</MenuItem>
                        <MenuItem   onClick={handlePrivacyClick}  className="menu-item">Privacy Policy</MenuItem>
                        <MenuItem   onClick={handleCoreClick} className="menu-item">Remanufactured Parts/Core Policy</MenuItem>
                    </MenuList>
                </Menu>

                <GridItem  colSpan={1} bg='#fff'>
                    <Breadcrumb className="policy-breadcrum"  separator=">">
                        <BreadcrumbItem fontSize="14px">
                            <BreadcrumbLink textDecoration="underline"  cursor="pointer" onClick={handleHomeClick}>Home</BreadcrumbLink>
                        </BreadcrumbItem >
                        <BreadcrumbItem fontSize="14px" isCurrentPage>
                            <BreadcrumbLink fontWeight="600" href="#">Return Policy</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Flex>
                        <Box width="100%">
                            <Grid className="policy-grid" >
                                <Box className="policy-box" >
                                    <Heading  className="policy-heading"  as="h2">
                                        Return Policy
                                    </Heading>
                                    <Heading mt={10} mb={10} className="policy-heading"  as="h3">
                                        RMA - Return Merchandise Authorization
                                    </Heading>

                                    <Text className="policy-normal-text" margin={0} >
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        ToyotaPartsDeal.com makes every effort to ensure all items in a customer's order are delivered undamaged and in excellent condition. Please make sure to inspect your package upon delivery and notify us immediately about any missing, damaged, or incorrect items. If we are not notified of any problems with your package within 5 business days of delivery, then it is assumed your items arrived in good condition and ToyotaPartsDeal.com is no longer liable for damaged, missing, or incorrect items. We are not responsible for any installation or service costs.<br/>
                                        <br/>
                                        The parts and accessories listed in our catalog are brand new, genuine OEM (original equipment manufacturer) items. These are exactly the same parts as found in a new Toyota vehicle. As our parts are sourced from the manufacturer, strict return procedures are imposed upon us when processing returns. For more information about our return guidelines, please read below.
                                    </Text>

                                    <Text  mt={10} mb={0} as="h4">
                                        Most Frequently Asked RMA Questions
                                    </Text>

                                    <Text className="policy-normal-text"  margin={0}>
                                        <span className="bussiness-url">1. How can I return an item?</span>
                                        <br/>
                                        <span className="bussiness-url">2. What items cannot be returned?</span>
                                        <br/>
                                        <span className="bussiness-url">3. What do I do after I receive an RMA?</span>
                                        <br/>
                                        <span className="bussiness-url">4. When do I need an.</span>
                                        <br/>
                                        <span className="bussiness-url">5. What if my return is rejected?</span>
                                        <br/>
                                        <span className="bussiness-url">6. When will I receive a refund or replacement?</span>
                                        <br/>
                                        <span className="bussiness-url">7. Are there any restocking fees?</span>
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        1. How can I return an item?
                                    </Text>
                                    <Text className="policy-normal-text"  margin={0}>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        A Return Merchandise Authorization (RMA) form is required for all returns. Customers must contact us within 30 calendar days of delivery date to receive an RMA, unless it is concerning incorrect, missing, damaged, or defective parts. Please see "when do I need an RMA?" for details. To obtain an RMA form, please contact us through email. Our RMA agents will respond back in 24 to 48 hours. We require this time to investigate and resolve the situation accordingly before we can send an RMA form.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        2. What items cannot be returned?
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        Non-returnable items include, but are not limited to:<br/>
                                        (1) All electrical parts and components.<br/>
                                        (2) Oils and other automotive chemicals.<br/>
                                        (3) Bare engine assemblies.<br/>
                                        (4) Fuel components.<br/>
                                        (5) Tools.<br/>
                                        (6) Printed materials.<br/>
                                        (7) Merchandising aids.<br/>
                                        (8) Special ordered items.<br/>
                                        (9) Hazmat labeled parts.<br/>
                                        (10) Any opened packages or unsealed items.<br/>
                                        (11) Items $8.00 or less.<br/>
                                        (12) Controlled parts: parts that require a VIN for ordering so the manufacturer
                                        can ensure the parts belong to the vehicle it is being installed to. Controlled
                                        parts include, but are not limited to: emission labels, air bags, and seatbelts.<br/>
                                        (13) Any item that has been installed, altered, used, or otherwise no longer in
                                        brand new condition.<br/>
                                        (14) Any item not purchased from ToyotaPartsDeal.com.<br/>
                                        (15) Any item with the genuine manufacturer label missing, damaged, altered, or
                                        otherwise unreadable.<br/>
                                        (16) Any item deemed non-returnable by the manufacturer.<br/>
                                        (17) Safety items, which include, but are not limited to: air bags, seat
                                        belts.<br/>
                                        (18) International orders are non-returnable. We are unable to warranty parts
                                        for international orders.<br/>
                                        <br/>
                                        The listing on our website is a general catalog provided by the manufacturer. Items may not always be labeled as one of the above categories. Our RMA agents reserve the right to determine whether an item fits into any of the above categories at their discretion.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        3. What do I do after I receive an RMA?
                                    </Text>
                                    <Text className="policy-normal-text"  margin={0}>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        Once a return is authorized, we must receive the item(s) within 30 calendar days of the receipt of order. RMA's beyond 30 calendar days of receipt of order will not be honored. All returned items must be in new condition, within the original packaging, and fit for resale. All returns must have the genuine manufacturer label unaltered and intact, and do not alter or write on the original packaging. Be sure to include the RMA form in your return package. Please use a reliable shipping carrier for your return, and email us the tracking information through the contact us section.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        4. When do I need an RMA?<br/>
                                        Incorrect item is shipped
                                    </Text>
                                    <Text className="policy-normal-text"  margin={0}>
                                        The customer is responsible for inspecting any and all parts delivered. If you receive an item that is not what you ordered, we must be notified within 5 business days of receiving the package. We will not be responsible for any claims made after 5 business days of receipt. Pictures may be required to authenticate your claim. If a packaging error is verified:<br/>
                                        (1) A prepaid shipping label will be emailed with your RMA form. Be sure to include both on the return package.<br/>
                                        (2) Once we receive the incorrect part, the correct part will be shipped out as a replacement order. Please know that the returned part must still be in new, uninstalled, and in resalable condition with the original factory packaging; otherwise your return will be rejected.<br/>
                                        (3) If a replacement is not wanted, you can ask for a refund for the cost of the ordered item. The incorrect part must still be returned to us in new condition, in original packaging, and fit for resale, with the genuine manufacturer label unaltered and intact.<br/>
                                        <br/>
                                        Pictures may be required to authenticate your claim. We do not cross ship under any circumstances, meaning we must receive the returned item(s) before issuing any replacement(s).
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Missing items
                                    </Text>
                                    <Text className="policy-normal-text"  margin={0}>
                                        We make every effort to check that all ordered items and any necessary components and accessories are included. All claims for missing components must be made within 5 business days of receipt. We reserve the right to deny any missing item claims made after this time period. If any items are verified to be missing:<br/>
                                        (1) The missing item(s) will be shipped out at no extra charge.<br/>
                                        (2) If a part is missing a necessary component that is included and not sold separately, the entire part would have to be returned to us before a replacement can be shipped.<br/>
                                        (3) If the missing item or component is sold separately and not included with the original part or accessory, a separate order must be placed and shipping charges will be applied.<br/>
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Part arrives damaged/defective
                                    </Text>
                                    <Text className="policy-normal-text"  margin={0}>
                                        The customer is responsible for inspecting any and all parts delivered. Upon receiving your order, please inspect the packaging and merchandise for dents, scratches, or other damages or defects. If a part arrives damaged or defective, contact us within 5 business days of delivery. We reserve the right to deny any damage claims made after this time period. If shipping damages or manufacturing defects are verified:<br/>
                                        (1) Retain all boxes and packaging materials - the carrier reserves the right to inspect these items before approving your claim. The customer may be responsible for bringing the package to your shipping carrier for inspection.<br/>
                                        (2) Notify us through the RMA request form within 5 business days of receipt, so we can file a damage claim with the shipping carrier. After we consult with the shipping company, we will advise the customer on how to proceed further with the return.<br/>
                                        <br/>
                                        Pictures may be required to authenticate your claim. We do not cross ship under any circumstances, meaning we must receive your returned item(s) before issuing any replacement(s). We recommend having your parts installed by a certified professional and we are not responsible for any damages made during installation.<br/>
                                        <br/>
                                        If you have a part that has a warranty problem, contact us and we’ll help you figure out the next steps.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Package lost in-transit
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        If a package is lost in transit and has not been delivered, the customer must notify us within 5 business days of the scheduled delivery date. We will then contact the shipping carrier to place a tracer on the missing package(s). If the shipping carrier cannot locate the lost package(s), a claim will be filed and a replacement order or refund will be provided. We will not be responsible for any lost package claims made after this time period.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Changed my mind/not needed
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        If an item(s) is no longer needed, the customer can request an RMA within 30 days from receipt of delivery. Please keep in mind the part must still be in new, uninstalled condition, with all of the factory original packaging intact. Electrical parts are non-returnable, regardless of reason or circumstance. We reserve the right to reject any returned item that does not meet our guidelines stated above. RMA's beyond 30 calendar days of receipt of order will not be honored. The customer is responsible for all costs of returning the item back to us and all shipping charges are non-refundable.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Ordered incorrect part
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        If the customer ordered the wrong item(s) by mistake, the return follows the same criteria for "changed my mind/not needed." We must be notified within 30 days from receipt of delivery by submitting an RMA request form. RMA's beyond 30 calendar days of receipt of order will not be honored. The customer is responsible for all costs of returning the item back to us and all shipping charges are non-refundable. We cannot do exchanges.
                                     </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Other reason for return
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        RMA requests that do not fall under the above categories will be reviewed on a case by case basis and a detailed reason must be provided for returning your order.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        5. What if my return is rejected?
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        If returned item(s) does not pass our guidelines, or does not have an RMA form indicating prior authorization, your return will be denied. If a returned part is damaged during transit back to our facility, it will also be rejected. In either case, the customer has the option to have the returned item(s) shipped back at their expense. Your package will be held for 14 business days after we receive it before being discarded and after this time, we are no longer responsible for the item(s).
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        6. When will I receive a refund or replacement?
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        If the returned part(s) passes inspection, refunds will be issued within 5 business days after the return delivery date. Issuing time for replacements will vary depending on when we receive your return and availability of the parts.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        7. Are there any restocking fees?
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        A 20% restocking fee may be applicable to all returned parts. Depending on the circumstances, our RMA agents will determine special exceptions on a case by case basis.
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

export default ReturnPolicyPage;
