import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Heading, Container, Box, Flex, Image, Input, Text, Menu, MenuButton, MenuList, MenuItem, GridItem
} from "@chakra-ui/react";
import React, {useEffect, useState } from "react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {vehicleCompany, vehicleModels , vehicleYears } from './API/api';
import {getGarageFromCookie , setGarageCookie , addGarageToCookie ,removeGarageFromCookie} from "./utility/cookies"
import { useRouter } from 'next/router';
const CheckFitModal = ({ isOpen, onClose }) => {
    const router = useRouter();
    //cookies
    const [garage, setGarage] = useState(getGarageFromCookie());

    const handleAddGarage = () => {
        const newGarage = { company: selectedCompany , model: selectedModal, year: selectedYear };
        addGarageToCookie(newGarage);
        setGarage(getGarageFromCookie());
        onClose();
        window.location.reload();
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


    return (
        <Modal className="modal" isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick={true}>
            <ModalOverlay className="modalOverlay" />

            <ModalContent className="modalContent"  >
                <div style={{position:'relative'}}>
                <ModalCloseButton />
                </div>
                <ModalBody className="modalBody">
                    <GridItem className="modal-section-first"   >
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
                                    <Button  mt={4}className="find-parts-btn" >Find My Parts</Button>
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
                                    <MenuButton mt={10} className="topsection-input" as={Button} rightIcon={<ChevronDownIcon />}>
                                        {selectedCompany || '-- Select Company --'}
                                    </MenuButton>
                                    <MenuList zIndex={1}  maxHeight="200px" overflowY="auto">
                                        {company.length > 0 &&
                                        company.map((company) => (
                                            <MenuItem className="menu-item" key={company} onClick={() => handleCompanySelection(company)} >
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
                                    <MenuButton mt={10} className="topsection-input"  as={Button} rightIcon={<ChevronDownIcon />}>
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
                                    <Button  onClick={handleAddGarage}   mt={14} className="find-parts-btn" >Find My Parts</Button>
                                </Flex>
                            </Box>
                        </Container>
                    </GridItem>
                </ModalBody>
                {/*<ModalFooter>*/}
                {/*    <Button colorScheme="blue" mr={3} onClick={onClose}>*/}
                {/*        Close*/}
                {/*    </Button>*/}
                {/*</ModalFooter>*/}
            </ModalContent>

        </Modal>
    );
};

export default CheckFitModal;
