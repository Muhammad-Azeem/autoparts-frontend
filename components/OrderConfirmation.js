// components/Header.js
import React, {useRef, useState} from 'react';
import { useRouter } from 'next/router';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
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
    Center, Breadcrumb, BreadcrumbItem, BreadcrumbLink, ListItem, List, Icon, UnorderedList,
    FormControl, FormLabel,Select
} from '@chakra-ui/react';
import '../styles//global.css';

import {ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {FaMinus, FaPlus} from "react-icons/fa";
import Product from "./Product";
import SmallProduct from "./SmallProduct";
import AddVehicleModal from "./AddVehicleModal";

const OrderConfirmation = () => {
    const [isEstimateVisible, setIsEstimateVisible] = useState(false);

    const toggleEstimateVisibility = () => {
        setIsEstimateVisible(!isEstimateVisible);
    };

    const router = useRouter();

    const handleProductDetailClick = () => {
        router.push('/Product-Detail');
    };
    const handleHomeClick = () => {
        router.push('/');
    };


    const [showTable1, setShowTable1] = useState(true);
    const [showTable2, setShowTable2] = useState(false);
    const [orangeBarStyle, setOrangeBarStyle] = useState({
        width: '185px',
        left: '25px',
    });

    const showTableOne = () => {
        setShowTable1(true);
        setShowTable2(false);
        setOrangeBarStyle({ width: '185px', left: '25px' });
    };

    const showTableTwo = () => {
        setShowTable1(false);
        setShowTable2(true);
        setOrangeBarStyle({ width: '123px', left: '225px' });
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onModalOpen = () => setIsModalOpen(true);
    const onModalClose = () => setIsModalOpen(false);

    const [showShippingDiv, setShowShippingDiv] = useState(true);
    const [showPaymentDiv, setShowPaymentDiv] = useState(false);
    const [showReviewDiv, setShowReviewDiv] = useState(false);

    //shipping
    // if (showShippingDiv) {
    //     // Move from Shipping to Payment
    //     setShowPaymentDiv(true);
    //     setShowReviewDiv(true);
    //   } else if (showReviewDiv) {
    //     // Move from Payment to Review
    //     setShowShippingDiv(true);
    //     setShowPaymentDiv(true);
    //   }

      const handleContinueToOrderReviewClick = () => {
        // Move from Payment to Review directly
        setShowPaymentDiv(false);
        setShowReviewDiv(true);
      };

      const handleContinueClick = () => {
        setShowShippingDiv(false);
        setShowPaymentDiv(true);
      };

    return (

    <Box >
        <Box className="pp-productDetail-main-box">
            <Flex className="pp-productDetail-innerbox" >
                
                <Box className="shipping-pp-box2" flex="1">
                <Box className='shipping-top-list'>
                                <Box className='shipping-top-list-li'>
                                    <Text className='shipping-top-list-text'>
                                        Shipping
                                    </Text>
                                </Box>
                                <Box className='shipping-top-list-li'>
                                    <Text className='shipping-top-list-text'>
                                        Payment & Billing
                                    </Text>
                                </Box>
                                <Box className='shipping-top-list-li'>
                                    <Text className='shipping-top-list-text'>
                                        Review & Complete
                                    </Text>
                                </Box>
                            </Box>
                          
                            <Box className='shipping-div'>
                                <Flex className="productDetail-box2-flex" >
                                    <Box>                           
                                                         
                                    </Box>                                                  
                                </Flex>
                            </Box>
                        
                </Box>
            </Flex>
        </Box>
    </Box>
    );
};

export default OrderConfirmation;
