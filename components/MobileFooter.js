// components/Header.js
import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
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
    Center, HStack, VStack, UnorderedList, ListItem
} from '@chakra-ui/react';
import '../styles//global.css';
import {ChevronDownIcon} from "@chakra-ui/icons";

const MobileFooter = () => {
    return (
        <Container>
            <Center display="block" bg='white' padding="35px 20px">

                    <Box fontSize="18px" fontWeight="600">
                        Shop with Confidence
                    </Box>
                <Box spacing={2} mt={10}>

                    <Image className="footer_images-top" mr={10} src="/images/footer-img2.png" alt="Image 1"/>
                    <Image className="footer_images-top" src="/images/footer-img1.png" alt="Image 2"/>
                </Box>
            </Center>
            <Accordion bg='#F0F0F0' defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2 style={{marginBlockEnd: '0px', marginBlockStart: '0px'}}>
                        <AccordionButton padding="5px" border=" 1px solid lightgray">
                            <Box padding="0px 5px" as="span" flex='1' textAlign='left'>
                                Information
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList className="mobile-footer-ul">
                            <ListItem>About Us</ListItem>
                            <ListItem>Customer Reviews</ListItem>
                            <ListItem>VIN Decoder</ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2 style={{marginBlockEnd: '0px', marginBlockStart: '0px'}}>
                        <AccordionButton padding="5px" border=" 1px solid lightgray">
                            <Box padding="0px 5px" as="span" flex='1' textAlign='left'>
                                Policies
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList className="mobile-footer-ul">
                            <ListItem>About Us</ListItem>
                            <ListItem>Customer Reviews</ListItem>
                            <ListItem>VIN Decoder</ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2 style={{marginBlockEnd: '0px', marginBlockStart: '0px'}}>
                        <AccordionButton padding="5px" border=" 1px solid lightgray">
                            <Box padding="0px 5px" as="span" flex='1' textAlign='left'>
                                Customer Service
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList className="mobile-footer-ul">
                            <ListItem>My Account</ListItem>
                            <ListItem>Track Order</ListItem>
                            <ListItem>Help Center</ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2 style={{marginBlockEnd: '0px', marginBlockStart: '0px'}}>
                        <AccordionButton padding="5px" border=" 1px solid lightgray">
                            <Box padding="0px 5px" as="span" flex='1' textAlign='left'>
                                Links
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList className="mobile-footer-ul">
                            <ListItem>Toyota Parts</ListItem>
                            <ListItem>Resources & Links</ListItem>
                            <ListItem>Site Map</ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2 style={{marginBlockEnd: '0px', marginBlockStart: '0px'}}>
                        <AccordionButton padding="5px" border=" 1px solid lightgray">
                            <Box padding="0px 5px" as="span" flex='1' textAlign='left'>
                               Contact Us
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <UnorderedList className="mobile-footer-ul">
                            <ListItem>Email Us</ListItem>
                            <ListItem>Live Chat</ListItem>
                            <ListItem>1-888-905-9199</ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <HStack justifyContent="center" padding="10px 0px" bg='#F0F0F0'  spacing={2}>
                <Image className="footer_images-bottom" src="/images/paypal.png" alt="Image 1"/>
                <Image className="footer_images-bottom" src="/images/visa.png" alt="Image 2"/>
                <Image className="footer_images-bottom" src="/images/american.png" alt="Image 2"/>
                <Image className="footer_images-bottom" src="/images/MC.png" alt="Image 2"/>
                <Image className="footer_images-bottom" src="/images/maestro.png" alt="Image 2"/>
            </HStack>
            <Center className="footer-lower_mobile" >
                <VStack spacing={2}>
                    <HStack spacing={15}>
                        <Image src="/images/fb.png" alt="Icon 1" w="30px" h="30px"/>
                        <Image src="/images/twitter.png" alt="Icon 2" w="30px" h="30px"/>
                        <Image src="/images/insta.png" alt="Icon 3" w="30px" h="30px"/>
                    </HStack>
                    <Box>
                        <Text>
                            © 2023 – All Rights Reserved Car Parts Website – Designed & Developed by Digital Otters
                        </Text>
                    </Box>
                </VStack>
            </Center>

        </Container>


    );
};

export default MobileFooter;
