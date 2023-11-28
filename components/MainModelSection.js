// components/Header.js
import React, {useEffect,useState} from 'react';
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
    Center, Stack, Icon
} from '@chakra-ui/react';
import '../styles//global.css';
import MainDetailModelRows from "./MainDetailModelRows";
import ModelButton from "./ModelButton";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {getAllProductsByCategory, getVehicles} from './API/api';
import LoaderSpinner from "../components/LoaderSpinner"


const ModelSection = () => {
    const [loading, setLoading] = useState(true);

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const data = await getVehicles();
                setVehicles(data);

            } catch (error) {
                console.error('Error fetching vehicles:', error);
            }
        };

        fetchVehicles();
    }, []);
    return (
        <Center className="model-section_mainPadding" >
            <Box>
                <Heading as="h3" size="lg" mb={4}>
                    Featured Toyota Models
                </Heading>
                {/*<MainDetailModelRows />*/}
                <Center>
                    <Grid className="model-rows"  >
                        {vehicles.map((vehicle) => (
                            <GridItem key={vehicle.id} >
                                <Button className="models-button" variant='solid'>
                                    {vehicle.model}
                                    <Icon as={ChevronRightIcon} ml="auto" />
                                </Button>
                            </GridItem>
                        ))}
                    </Grid>
                </Center>
            </Box>

        </Center>
    );
};

export default ModelSection;
