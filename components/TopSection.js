// components/Header.js
import React, {useRef,useEffect,useState} from 'react';
import { useRouter } from 'next/router';
import {Heading,Input,Grid, GridItem ,Box,Container, Image,Text, Flex, Link, Button, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import '../styles//global.css';
import {ChevronDownIcon} from "@chakra-ui/icons";
import ImageCarousel from '../components/ImageCarousel';
import {vehicleCompany, vehicleModels , vehicleYears } from './API/api';
import {
    removeGarageFromCookie,
    clearAllGaragesFromCookie,
    getSelectedGarageFromCookie,
    getGarageFromCookie,
    addGarageToCookie
} from "./utility/cookies";

import { DeleteIcon } from '@chakra-ui/icons';
const TopSection = () => {
    const [selectedVehicle, setSelectedVehicle] = useState([]);
    const [isDivOpen, setIsDivOpen] = useState(false);
    const divRef = useRef();

    useEffect(() => {
        let vehicle = getSelectedGarageFromCookie();
        vehicle = vehicle.length != 0 ? vehicle : null
        setSelectedVehicle(vehicle);
    }, []);

    const handleButtonClick = () => {
        // Toggle the state to show/hide the divs
        setSelectedVehicle(!selectedVehicle);
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



    const images = [
        '/images/engine.png',
        '/images/engine.png',
    ];

    const router = useRouter();
    const handleFindPartsClick = () => {
        router.push('/ProductList');
    };
    const [isGarageOpen, setIsGarageOpen] = useState(false);
    const divGarageRef = useRef();

    // Close the div when clicking outside
    const handleClickOutsideGarage = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setIsGarageOpen(false);
        }
    };

    // Close the div when the cursor hovers out
    const handleMouseLeaveGarage = (event) => {
        // Check if the mouse is leaving the garage dropdown and not moving to "Change Vehicle"
        if (
            divGarageRef.current?.contains &&
            (!divGarageRef.current.contains(event.relatedTarget) || event.relatedTarget.classList.contains("vehicle-list-box"))
        ) {
            setIsGarageOpen(false);
        }
    };
    // Add click outside event listener when the div is open
    useEffect(() => {
        if (isGarageOpen) {
            document.addEventListener('click', handleClickOutsideGarage);
        } else {
            document.removeEventListener('click', handleClickOutsideGarage);
        }

        return () => {
            document.removeEventListener('click', handleClickOutsideGarage);
        };
    }, [isGarageOpen]);
    const [garages, setGarages] = useState(getGarageFromCookie());
    const [garage, setGarage] = useState(getGarageFromCookie());
    const handleDeleteGarage = (id) => {
        removeGarageFromCookie(id);
        window.location.reload();
        setGarages(getGarageFromCookie());
    };

    useEffect(() => {
        setGarages(getGarageFromCookie());
        console.log(garages);
    }, [isDivOpen]); // Run only once on component mount


    const handleClearAllGarages = () => {
        clearAllGaragesFromCookie();
        setGarages([]); // Clear the garage state in your component
        window.location.reload();
        router.push('/');
    };


    const handleAddGarage = () => {
        const newGarage = { company: selectedCompany , model: selectedModal, year: selectedYear };
        addGarageToCookie(newGarage);
        setGarage(getGarageFromCookie());
        // onClose();
        router.push('/ProductList');
      };

    return (

        <Grid className="topSection_main-padding" >
            <GridItem className="section-first"   >

            {selectedVehicle ? (
                <>
                <Heading background="#003566" color="white" as="h3"  textAlign="left" margin="0px" padding="5px 8px">
                    Shop for Toyota Parts
                </Heading>
                <Container className="topsection-container"  maxW="container.md">
                    <Box className="topsextion_heading1">
                        <Flex mt={25} ml={25} align="center">
                            <Heading className="topsextion_headings-text" as="h4" size="lg" mb={4}>
                                My Vehicle
                            </Heading>
                        </Flex>

                        <Text ml={25} >
                            {selectedVehicle.year}  {selectedVehicle.company} {selectedVehicle.model}
                        </Text>
                    </Box>

                    <Box className="topsextion_heading2">

                        {/* <Heading cursor='pointer' onClick={handleButtonClick}  mt={40} ml={25} as="h4" size="lg"  >
                            Change Vehicle
                        </Heading> */}
                         <Heading cursor='pointer' width={'40%'} onMouseEnter={() => setIsGarageOpen(true)} mt={40} ml={25} as="h4" size="lg"   >
                            <span onMouseLeave={handleMouseLeaveGarage}>
                                Change Vehicle
                            </span>
                        </Heading>
                        {isGarageOpen && (
                                    <div
                                        ref={divGarageRef}
                                        style={{
                                            position: 'absolute',
                                            top: '60px', // Adjust the positioning as needed
                                            // left: '200px',
                                            width: '400px', // Set the desired width
                                            background: 'white',
                                            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                                            zIndex: '1',
                                            // Add other styles as needed
                                        }}
                                        onMouseLeave={handleMouseLeaveGarage}
                                    >
                                        {/* Content of the div */}
                                        <p className="vehicle-list">Vehicle List</p>
                                        <ul style={{ padding: '0px', overflowY: 'auto', maxHeight: '250px' }}>
                                            {garages.length > 0 ? (
                                                garages.map((garageEntry) => (
                                                    <li
                                                        key={garageEntry.id}
                                                        className="no-vehicles"
                                                        style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}
                                                    >
                                                        <div>
                                                            <input type="radio" id={garageEntry.id} name="gender"  checked={garageEntry.is_selected} value={garageEntry.name} />
                                                            <label htmlFor={garageEntry.id}>
                                                                {garageEntry.company} {garageEntry.model} {garageEntry.year}
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <DeleteIcon mr={15} w={20} h={20} color="grey" onClick={() => handleDeleteGarage(garageEntry.id)}  />
                                                        </div>
                                                    </li>
                                                ))
                                            ) : (
                                                <li className="no-vehicles" style={{ textAlign: 'center' }}>
                                                    No vehicles in the garage
                                                </li>
                                            )}
                                        </ul>
                                        <div className="vehicle-list-box">
                                            <p onClick={handleButtonClick} className="add-new-vehicle">Add New Vehicle</p>

                                            <p className="clear-all" onClick={handleClearAllGarages} >Clear All</p>
                                        </div>
                                    </div>
                                )}

                        <Flex ml={25}>
                            <Button onClick={handleFindPartsClick}  className="find-parts-btn" >Find My Parts</Button>
                        </Flex>
                    </Box>
                </Container>
                </>
            ) : (
  <>
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
                            <Button  onClick={handleAddGarage}  mt={14} className="find-parts-btn" >Find My Parts</Button>
                        </Flex>
                    </Box>
                </Container>
                </>
            )
            }
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
