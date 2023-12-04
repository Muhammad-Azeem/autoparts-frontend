// components/Header.js
import React, {useEffect, useState} from 'react';
import {Heading,Input,Grid, GridItem ,Box,Container, Image,Text, Flex, Link, Button, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import '../styles//global.css';
import {ChevronDownIcon} from "@chakra-ui/icons";
import ImageCarousel from '../components/ImageCarousel';
import {useRouter} from "next/router";
import {vehicleCompany, vehicleModels, vehicleYears} from "./API/api";
import {addGarageToCookie, getGarageFromCookie} from "./utility/cookies";
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


    const [years, setYears] = useState([]);
    const [models, setModels] = useState([]);
    const [company, setCompany] = useState([]);

    const fetchYears = async (selectedModal) => {
        try {
            const response = await vehicleYears(selectedModal);
            setYears(response);
        } catch (error) {
            console.error('Error fetching years:', error);
        }
    };

    const fetchModels = async (selectedCompany) => {
        try {
            const response = await vehicleModels(selectedCompany);
            setModels(response);
        } catch (error) {
            console.error('Error fetching models:', error);
        }
    };

    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const response = await vehicleCompany();
                setCompany(response);
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        };

        fetchCompany();
    }, []);

    const [selectedYear, setSelectedYear] = useState(null);

    const handleYearSelection = (selectedYear) => {
        setSelectedYear(selectedYear);
    };
    const [selectedModal, setSelectedModal] = useState(null);

    const handleModelSelection = (selectedModal) => {
        setSelectedModal(selectedModal);
        fetchYears(selectedModal);
        setSelectedYear(null);
    };

    const [selectedCompany, setSelectedCompany] = useState(null);

    const handleCompanySelection = (selectedCompany) => {
        setSelectedCompany(selectedCompany);
        fetchModels(selectedCompany);
        setYears([]);
        setSelectedModal(null);
        setSelectedYear(null);
    };
    const [garage, setGarage] = useState(getGarageFromCookie());
    const handleAddGarage = () => {
        if(selectedCompany) {
            const newGarage = { company: selectedCompany , model: selectedModal, year: selectedYear };
            addGarageToCookie(newGarage);
            setGarage(getGarageFromCookie());
            // onClose();
            router.push('/ProductList');
        }else{
            alert("Please Select All Options")
        }
    };
    return (
<>
            <Box className="section-second" style={{zIndex: '-1'}}>
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
                            <Menu>
                                <MenuButton className="topsection-input" as={Button} rightIcon={<ChevronDownIcon />}>
                                    {selectedCompany || '-- Select Company --'}
                                </MenuButton>
                                <MenuList zIndex={1}  maxHeight="200px" overflowY="auto">
                                    {company.length > 0 &&
                                        company.map((company) => (
                                            <MenuItem className="menu-item" key={company} onClick={() => handleCompanySelection(company)}>
                                                {company}
                                            </MenuItem>
                                        ))}
                                </MenuList>
                            </Menu>

                            <Menu>
                                <MenuButton mt={10} className="topsection-input" as={Button} rightIcon={<ChevronDownIcon />}>
                                    {selectedModal || '-- Select Modal --'}
                                </MenuButton>
                                <MenuList zIndex={1}  maxHeight="200px" overflowY="auto">
                                    {models.length > 0 &&
                                        models.map((model) => (
                                            <MenuItem className="menu-item" key={model} onClick={() => handleModelSelection(model)}>
                                                {model}
                                            </MenuItem>
                                        ))}
                                </MenuList>
                            </Menu>

                            <Menu>
                                <MenuButton mt={10}  className="topsection-input"  as={Button} rightIcon={<ChevronDownIcon />}>
                                    {selectedYear || '-- Select Year --'}
                                </MenuButton>
                                <MenuList zIndex={1}   maxHeight="200px" overflowY="auto">
                                    {years.length > 0 &&
                                        years.map((year) => (
                                            <MenuItem className="menu-item" key={year} onClick={() => handleYearSelection(year)}>
                                                {year}
                                            </MenuItem>
                                        ))}
                                </MenuList>
                            </Menu>

                        <Flex justify="end">
                            <Button  onClick={handleAddGarage} mt={14} className="mobile_find-parts-btn" >Find My Parts</Button>
                        </Flex>
                    </Box>
                    )}
                </Container>
    </Box>
</>

    );
};

export default MobileTopSection;
