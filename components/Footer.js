// components/Header.js
import React from 'react';
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
    Center, HStack, VStack
} from '@chakra-ui/react';
import '../styles//global.css';
import {ChevronDownIcon} from "@chakra-ui/icons";

const Footer = () => {
    return (
        <Container>
            <Center bg='#F1F1F1' padding="35px 0px">
                <Box w='20%' p={4} color='black'>
                    <Link fontWeight="600" className="footer-padding">
                        Wholesale
                    </Link>
                    <Link href="#" className="foot-text footer-padding">
                        About Us
                    </Link>
                    <Link href="#" className="foot-text footer-padding">
                        Customer Reviews
                    </Link>
                    <Link href="#" className="foot-text footer-padding">
                        Contact Us
                    </Link>
                </Box>
                <Box w='20%' p={4} color='black'>
                    <Text className="footer-padding" fontWeight="600">
                        Policies
                    </Text>
                    <Link href="/SalesPolicy" display="block" className="foot-text footer-padding">
                        Sales Policy
                    </Link>
                    <Link  href="/ReturnPolicy" display="block" className="foot-text footer-padding">
                        Return Policy
                    </Link>
                    <Link href="/PrivacyPolicy" display="block" className="foot-text footer-padding">
                        Privacy Policy
                    </Link>
                </Box>
                <Box w='20%' p={4} color='black'>
                    <Link href="#" className="foot-text footer-padding" fontWeight="600">
                        Customer Services
                    </Link>
                    <Link href="#" className="foot-text footer-padding">
                        My Account
                    </Link>
                    <Link href="#" className="foot-text footer-padding">
                        Track Order
                    </Link>
                    <Link href="#" className="foot-text footer-padding">
                        Help Center
                    </Link>
                </Box>
                <Box w='20%' h='150px' p={4} color='black'>
                    <Text fontWeight="600">
                        Shop with Confidence
                    </Text>
                    <HStack spacing={2}>
                        <Image className="footer_images-top" src="/images/footer-img2.png" alt="Image 1"/>
                        <Image className="footer_images-top" src="/images/footer-img1.png" alt="Image 2"/>
                    </HStack>
                    <HStack mt={10} spacing={2}>
                        <Image className="footer_images-bottom" src="/images/paypal.png" alt="Image 1"/>
                        <Image className="footer_images-bottom" src="/images/visa.png" alt="Image 2"/>
                        <Image className="footer_images-bottom" src="/images/american.png" alt="Image 2"/>
                        <Image className="footer_images-bottom" src="/images/MC.png" alt="Image 2"/>
                        <Image className="footer_images-bottom" src="/images/maestro.png" alt="Image 2"/>
                    </HStack>
                </Box>

            </Center>
            <Flex background="#F1F1F1;">
            <hr style={{width:'80%' ,textAlign:'center', marginLeft:'10' , marginTop:'0', marginBottom:'0'}}/>
            </Flex>
            <Center className="footer-lower" >
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

export default Footer;
