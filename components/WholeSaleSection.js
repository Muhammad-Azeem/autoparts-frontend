// components/Header.js
import React from 'react';
import { Box,Text } from '@chakra-ui/react';
import '../styles//global.css';

const WholeSaleSection = () => {
    return (
        <Box
            backgroundImage="url('/images/Wholesalle-2.png')" // Replace with your image URL
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            height="600px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="white"
            position="relative"
        >
            <Text className="wholesale-heading">
                Are You a Wholesale Retailer?
            </Text>
            <Text className="wholesale-para">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word.            </Text>
        </Box>

    );
};

export default WholeSaleSection;
