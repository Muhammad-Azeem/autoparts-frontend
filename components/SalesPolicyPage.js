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
const SalesPolicyPage = () => {

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
                            {/*<Box*/}
                            {/*    className="vm-leftside-box" fontSize="small" >*/}
                            {/*    Help Center*/}
                            {/*</Box>*/}
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
                        {/*<MenuItem   className="menu-item">*/}
                        {/*    <Link className="success-leftside-link"  href="/">*/}
                        {/*        Help Center*/}
                        {/*    </Link>*/}
                        {/*</MenuItem>*/}
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
                            <BreadcrumbLink fontWeight="600" href="#">Sales Policy</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Flex>
                        <Box width="100%">
                            <Grid className="policy-grid" >
                                <Box className="policy-box" >
                                    <Heading  className="policy-heading"  as="h2">
                                        Sales Policy
                                    </Heading>
                                    <Heading mt={10} mb={10} className="policy-heading"  as="h3">
                                        Terms and Conditions
                                    </Heading>

                                    <Text className="policy-normal-text" margin={0} >
                                        The use of this site is governed by the policies, terms and conditions set forth below. Please read them carefully. The usage of this site and your placement of an order indicate an acceptance of these terms and conditions.
                                    </Text>

                                    <Text  mt={10} mb={0} as="h4">
                                        Shipping Information
                                    </Text>

                                    <Text className="policy-normal-text"  margin={0}>
                                        We ship worldwide. Available shipping methods vary depending on products and
                                        shipping destinations.<br/>
                                        <br/>
                                        Shipments can also be sent to both PO Boxes and Military APO/FPO addresses.
                                        Please allow additional time for orders shipped to APO/FPO addresses. Expedited
                                        shipping or large item shipment is not available to these address types.<br/>
                                        <br/>
                                        If you are shipping to a U.S. Territory (Puerto Rico, Guam, U.S. Virgin Islands,
                                        American Samoa, Northern Mariana Islands, and Micronesia) the shipment will be
                                        serviced by USPS.<br/>
                                        <br/>
                                        For international orders, duties and fees are not included in the purchase
                                        price. Buyers are responsible for any customs fees that may incur, including
                                        duties, taxes, brokerage fees, and any other fees. We have no control over these
                                        fees.<br/>
                                        <br/>
                                        If you are placing an order with a high amount, please contact us for assistance
                                        on possible alternative payment methods.<br/>
                                        <br/>
                                        Most of the orders are processed and shipped out within 1-3 business days.
                                        However due to item availability and warehouse locations, your items may be
                                        split shipped when you place an order for multiple items. If a part is not
                                        in-stock, it will be ordered directly from the main OEM distribution centers.
                                        This will take additional time for the items to arrive to our warehouse before
                                        it is shipped to you. Thus, when you choose Overnight delivery, it does not mean
                                        that you will receive your order tomorrow. All orders must be shipped; there is
                                        no pick-up service offered.<br/>
                                        <br/>
                                        Once an order has been shipped, an invoice will be emailed to you. The tracking
                                        number can be found on the sales invoice. To view more tracking information, you
                                        can use the tracking number link provided on the sales invoice. You can also use
                                        the provided tracking number on USPS.com, UPS.com, or FedEx.com. It is our
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        responsibility to ensure packages are shipped out and it is the customer's
                                        responsibility to ensure successful delivery once the tracking number has been
                                        provided. If there is an issue with the delivery of your package you can contact
                                        us for assistance.<br/>
                                        <br/>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        Once an order status shows as "Packaging," "Packaging with Parts On Order," or
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        "Shipped," it cannot be modified or cancelled.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Customers will be responsible and charged for any additional shipping fee if any of the following situations occur:
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Inaccurate / Undeliverable Shipping Address
                                    </Text>
                                    <Text className="policy-normal-text"  margin={0}>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        Please make sure that your shipping address is deliverable and complete. Toyotapartsdeal.com is not liable for any inaccurate / undeliverable shipping address. It is the customer's responsibility to provide the correct and deliverable shipping address for USPS/UPS/FedEx delivery upon submitting the order. Any charges incurred by us while rerouting or making an address correct will be the responsibility of the customer.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Unsuccessful Delivery
                                    </Text>
                                    <Text className="policy-normal-text"  margin={0}>
                                        UPS and FedEx make up to three delivery attempts, excluding weekends and holidays. Once the third and final delivery attempt has been made and the driver was unable to leave the package, UPS or FedEx will return the package to the sender. Customer will be responsible and charged for the shipping fee TWICE, for both the original delivery charges and the undeliverable package.<br/>
                                    <br/>
                                        USPS will leave a peach-colored slip when the carrier attempted to deliver an item or items to you. A redelivery can be scheduled to take place up to the day the item is scheduled for return to the sender (the Final Notice date on the front of the form).
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Refused Shipments
                                    </Text>
                                    <Text className="policy-normal-text"  margin={0}>
                                        Freight charges incurred by us while attempting to deliver merchandise which is refused, will be billed to the customer.
                                        A 20% re-stocking fee will apply to any merchandise bounced back to our warehouse.
                                    </Text>
                                    <Text mt={10} mb={0} as="h4">
                                        Return to Shipper Orders
                                    </Text>
                                    <Text className="policy-normal-text"  margin={0}>
                                        All packages that return to our facility due to an incomplete delivery will be subject to a 20% restocking fee, undeliverable package return charge, and any additional charges incurred due to the returned package. Credit will be issued after the 20% restocking fee and undeliverable package return charge (same cost as original shipping) has been applied to the price of the part, where original shipping costs cannot be refunded.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        In Transit
                                    </Text>
                                    <Text className="policy-normal-text"  margin={0}>
                                        The tracking number is emailed once an order is shipped out. Should the tracking number be invalid or show no tracking updates, please allow 24 hours for the tracking number to update on the USPS/UPS/FedEx website. If the tracking number continues to appear invalid or shows no movement, please contact us for assistance.<br/>
                                        <br/>
                                        If the tracking information shows the wrong destination, please contact us for immediate assistance. An additional fee will apply to any qualified address corrections. Otherwise, you may contact UPS and request for a Will Call, which will allow you to pick up the package within 5 business days at a local customer center. A valid government issued ID is required for Will Calls.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Sales Tax
                                    </Text>
                                    <Text className="policy-normal-text"  margin={0}>
                                        Due to a recent Supreme Court ruling, states now have the ability to mandate whether or not they charge sales tax for online purchases. We collect and remit sales tax to remain compliant with all applicable tax laws as mandated by the state governments in which we conduct business.<br/>
                                        <br/>
                                        If your order is shipped to one of the states which mandates collection of online sales tax, it is subject to sales tax. Please consult a tax professional for more information regarding applicable sales taxes on your order.<br/>
                                        <br/>
                                        For Tax Exempt Purchases, you must qualify for tax exempt purchases by submitting your business account application. Please be aware you will be asked to upload a copy of your seller certification. If you have placed orders while your Tax Exemption Certificate is being verified, all tax on orders may be returned to the original payment method once the verification process has been completed.<br/>
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Pricing
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        Although we try our best to maintain an error-free website, a small number of the parts on our catalog may be mispriced. If the correct price is lower than the listed price, we will invoice you for the lower amount and ship out the order. If the part's correct price is higher than our listed price, we will inform you first to see whether the order should be proceed or canceled.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Lowest Price Guarantee
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        Prior to placing your order, contact us by Phone, Live Chat, or Email and provide us a link to the online retailer we are matching. We will verify the item eligibility by reviewing the online retailer. Toyotapartsdeal.com will match the price from an online retailer only and has the final decision for matching an online price. If we match an online retailer’s price, it must include shipping charges in the price of the item. The item must be identical and must have the same manufacturer part number. Price matching is not available on previously placed orders and only applies to orders shipped in the United States.<br/>
                                    <br/>
                                        Price Matching Excludes:<br/>
                                        Reconditioned/Refurbished Parts<br/>
                                        Prices from Marketplace and third-party sellers<br/>
                                        Prices from auctions or requiring memberships<br/>
                                        Inaccurate prices<br/>
                                        Oversize items that must ship freight. This applies, but is not limited to all bumpers, fenders, hoods, door panels, etc.<br/>
                                        Special order parts<br/>
                                        Price match cannot be combined with other promotional offers<br/>
                                        In the rare case of a website error in that a part is listed for much less than the actual price, we will contact the customer with the real price before processing the order. Toyotapartsdeal.com reserves the right to cancel orders if the customer does not agree to the actual price.<br/>
                                        *Price matching is at the discretion of Toyotapartsdeal.com<br/>
                                        *Toyotapartsdeal.com reserves the right to modify the terms of this policy at any time without notice.<br/>
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Shipping Cost
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        Most of our shipments will be shipped via USPS. For Oversized or Overweight shipments, there will be an additional shipping charge required. This applies, but is not limited to all bumpers, fenders, hoods, door panels, etc. Please email us for freight charge information on these parts.<br/>                                        <br/>
                                        In rare occasions where the actual cost is higher than the estimate, we will always inform you first for further instructions before proceeding with the order. All shipping cost calculations are estimates from USPS/UPS/FedEx. Some orders may require a signature to receive the delivery.<br/>
                                     </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Order Processing
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        Customers are not charged until their order is ready to ship. Most orders will be verified by our customer service representatives within 24 business hours before it is forwarded to our parts department for processing.<br/>
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Credit Card/Fraud Prevention
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        To prevent fraudulent activities, we will conduct address verification through the customer's credit/debit card issuer to confirm customer's identity and verify the validity of your purchase, ultimately protecting the customer's privacy.<br/>
                                        <br/>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        If you wish to ship to an address other than your billing address, please contact the card issuer and have your shipping destination added as an authorized alternate ship-to address in the record/memo field. We will contact your credit card issuer to verify this information after you've placed an order.<br/>
                                        <br/>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        Both your billing and shipping addresses must be verified before an order will ship. If you encounter any trouble while attempting to add an alternate shipping address, let the card issuer know that you are placing an online order and that the retailer must verify your personal information before shipment to eliminate the possibility of fraud. Then, inform us when the information has been updated and we will re-attempt the address verification to complete the processing of your order.<br/>
                                        <br/>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        Orders with the same verified billing and shipping address will be processed much faster.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Packaging
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        Most of the parts will be shipped in their original genuine factory boxes or packaging. On rare occasions, we might have to repackage the parts before shipping due to the shape, size, or possibility of damage. Therefore, they may arrive in different boxes with the original packaging inside. All of our parts are genuine OEM and are covered by the standard manufacturer warranty.
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Backorders
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        In the event of a backorder part (less {'<'} 1% ), we will inform the customer and provide him/her with the option to cancel the part or the entire order. If customer is willing to wait, the customer's credit card will not be charged and invoiced until the parts arrive at our warehouse and the order is ready for shipment.<br/>
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Disclaimer
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        Some parts on your order may have updated replacement information. Our parts specialists will verify and ship out the updated replacement at our discretion. In the meantime, the updated replacement part number will be provided on the packing list and invoice.<br/>
                                        <br/>
                                        Vehicle diagrams displayed on this website are for general illustration purposes only. Vehicles depicted are shown as a sample vehicle of the same model only. Details of a selected vehicle may vary from the vehicle shown, depending on the selected features. The diagrams are used as a point of reference and should not be used as the primary resource when ordering a part.<br/>
                                        <br/>
                                        The catalog is provided as a convenience to our customers. We do not guarantee the accuracy of the information provided within this catalog. While we try to maintain a near-perfect catalog, a small number of parts may be listed incorrectly. Our website is a general catalog and does not reflect our actual inventory, please contact us for inventory information.<br/>
                                        <br/>
                                        We reserve the right to refuse to process an order for any reason. Your order confirmation is an offer to buy, not a completed sales contract. Order acceptance and the completion of the contract between both the purchasing and seller party will take place on the shipment of the products ordered. Your receipt of an electronic or other form of order confirmation does not mean our acceptance of your order, nor does it constitute a confirmation of our offer to sell.<br/>
                                        <br/>
                                        We reserve the right at any time after the receipt of your order to cancel your order for any reason. If the order is cancelled, the authorization on your card will be voided and no money will be charged. If your card has been charged, a refund will be issued to your credit card.<br/>
                                    </Text>

                                    <Text mt={10} mb={0} as="h4">
                                        Limitation of liability
                                    </Text>
                                    <Text className="policy-normal-text" margin={0}>
                                        {/*eslint-disable-next-line react/no-unescaped-entities*/}
                                        Toyotapartsdeal.com and its affiliates will not be liable for any direct, indirect, incidental, punitive, consequential, or any other damages whatsoever that result from the use or performance of, or the inability to use, the site, the products, or information, or functions on such site, even if Toyotapartsdeal.com has been advised of the possibility of such damages. In no event will Toyotapartsdeal.com and its affiliates' total liability to you for all damages, losses, and causes of action, whether arising out of contract, tort, or otherwise, exceed the amount paid by you, if any, for accessing the site or purchasing the products.
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

export default SalesPolicyPage;
