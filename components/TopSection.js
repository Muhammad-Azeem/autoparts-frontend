// components/Header.js
import React, {useEffect,useState} from 'react';
import { useRouter } from 'next/router';
import {Heading,Input,Grid, GridItem ,Box,Container, Image,Text, Flex, Link, Button, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import '../styles//global.css';
import {ChevronDownIcon} from "@chakra-ui/icons";
import ImageCarousel from '../components/ImageCarousel';
import {vehicleCompany, vehicleModels , vehicleYears } from './API/api';
const TopSection = () => {

    const [years, setYears] = useState([]);
    const [models, setModels] = useState([]);
    const [company, setCompany] = useState([]);

    useEffect(() => {
        const fetchYears = async () => {
          try {
            const response = await vehicleYears();
             setYears(response);
          } catch (error) {
            console.error('Error fetching years:', error);
          }
        };

        fetchYears();
      }, []);

      useEffect(() => {
        const fetchModels = async () => {
          try {
            const response = await vehicleModels();
            setModels(response);
          } catch (error) {
            console.error('Error fetching models:', error);
          }
        };

        fetchModels();
      }, []);

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
      };

      const [selectedCompany, setSelectedCompany] = useState(null);

      const handleCompanySelection = (selectedCompany) => {
          setSelectedCompany(selectedCompany);
        };



    const images = [
        '/images/engine.png',
        '/images/engine.png',
    ];

    const router = useRouter();
    const handleFindPartsClick = () => {
        router.push('/ProductList');
    };

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
                                {selectedYear || '-- Select Modal --'}
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
                            <Button onClick={handleFindPartsClick} mt={14} className="find-parts-btn" >Find My Parts</Button>
                        </Flex>
                    </Box>
                </Container>
            </GridItem>
            <GridItem className="section-second" style={{zIndex: '-1'}}>
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
