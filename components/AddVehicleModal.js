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
import React, { useState } from "react";
import {ChevronDownIcon} from "@chakra-ui/icons";

const AddVehicleModal = ({ isOpen, onClose }) => {
    return (
        <Modal className="modal" isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick>
            <ModalOverlay className="modalOverlay" />

            <ModalContent className="modalContent"  >
                {/*<ModalCloseButton />*/}
                <ModalBody className="modalBody">
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
                                    <Button  mt={4} className="find-parts-btn" >Find My Parts</Button>
                                </Flex>
                                <Text className="box-one-text" >
                                    For the most accurate results, search by your VIN (vehicle identification number).
                                </Text>
                            </Box>

                            <Box className="topsextion_heading2">
                                <Image src="/images/or.png" alt="Image Alt Text" className="or-image"/> {/* Replace with your image path */}

                                <Heading as="h3" size="lg" mb={4}>
                                    Select Vehicle by Model
                                </Heading>

                                <Menu >
                                    <MenuButton className="topsection-input" as={Button} rightIcon={<ChevronDownIcon />}>
                                        -- Select Year --
                                    </MenuButton>
                                    <MenuList zIndex={3} >
                                        <MenuItem className="menu-item">Download</MenuItem>
                                        <MenuItem className="menu-item">Create a Copy</MenuItem>
                                        <MenuItem className="menu-item">Mark as Draft</MenuItem>
                                        <MenuItem className="menu-item">Delete</MenuItem>
                                        <MenuItem className="menu-item">Attend a Workshop</MenuItem>
                                    </MenuList>
                                </Menu>
                                <Menu >
                                    <MenuButton mt={10} className="topsection-input" as={Button} rightIcon={<ChevronDownIcon />}>
                                        -- Select Make --
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem className="menu-item">Download</MenuItem>
                                        <MenuItem className="menu-item">Create a Copy</MenuItem>
                                        <MenuItem className="menu-item">Mark as Draft</MenuItem>
                                        <MenuItem className="menu-item">Delete</MenuItem>
                                        <MenuItem className="menu-item">Attend a Workshop</MenuItem>
                                    </MenuList>
                                </Menu>
                                <Menu >
                                    <MenuButton mt={10} className="topsection-input" as={Button} rightIcon={<ChevronDownIcon />}>
                                        -- Select Model --
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem className="menu-item">Download</MenuItem>
                                        <MenuItem className="menu-item">Create a Copy</MenuItem>
                                        <MenuItem className="menu-item">Mark as Draft</MenuItem>
                                        <MenuItem className="menu-item">Delete</MenuItem>
                                        <MenuItem className="menu-item">Attend a Workshop</MenuItem>
                                    </MenuList>
                                </Menu>

                                <Flex justify="end">
                                    <Button  mt={14} className="find-parts-btn" >Find My Parts</Button>
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

export default AddVehicleModal;
