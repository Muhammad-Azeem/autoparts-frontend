    // components/Header.js
    import React, {useRef, useState} from 'react';
    import { useRouter } from 'next/router';
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
        Center, Breadcrumb, BreadcrumbItem, BreadcrumbLink, ListItem, List, Icon, UnorderedList
    } from '@chakra-ui/react';
    import '../styles//global.css';

    import {ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
    import {FaMinus, FaPlus} from "react-icons/fa";
    import Product from "./Product";
    import ViewMoreList from "../components/ViewMoreList";
    import AddVehicleModal from "./AddVehicleModal";
    import MainDetailModelRows from "./MainDetailModelRows";
    import AccessoriesModelRows from "./AccessoriesModelRows";
    import DetailSection from "./DetailSection";
    import AccessoryDetailSection from "./AccessoryDetailSection";

    const Accessory = () => {

        const [isGrid1Visible, setIsGrid1Visible] = useState(true);
        const [isGrid2Visible, setIsGrid2Visible] = useState(false);

        const toggleGridVisibility = () => {
            setIsGrid1Visible(!isGrid1Visible);
            setIsGrid2Visible(!isGrid2Visible);
        };
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

        const handleGoToCartClick = () => {
            router.push('/AddToCart');
        };
        const handleHomeClick = () => {
            router.push('/');
        };
        const handleProductClick = () => {
            router.push('/Product');
        };

        const initialVisibleItems = 2; // Initial number of visible items
        const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
        const items = [
            '4Runner| 1984-2022| DLX, LULI, Limited, SDT,S...| 4 Cyl 2.4L, 4 Cyl..',
            'Avalon| 1995-2022| Limited, XL, XLE, XLE Pre...| 4 Cyl 2.5L, 6 Cyl...',
            'C-HR| 2017-2022| 4 Cyl 2.0L',
            'Camry| 1987-2022| CE, DX, LE, N, No Grade... | 4 Cyl 2.0L, 4 Cyl 2.2L...',
            'Celica| 1988-2005, 1984-1985| GT, GTS, ST...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
            'Corolla| 1984-2022| CE, D, DX, ECO...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
            'Corolla Cross| 2022',
            'Corolla iM| 2017-2018| N| 4 Cyl 1.8L',
            'Cressida| 1985-1992| GLX| 6 Cyl 2.8L, 6 Cyl 3.0L',
            'Echo| 2000-2005| 4 Cyl 1.5L'
            // Add more items here
        ];

        const toggleItems = () => {
            if (visibleItems === initialVisibleItems) {
                setVisibleItems(items.length);
            } else {
                setVisibleItems(initialVisibleItems);
            }
        };
        const itemsList1 = [
            '4Runner| 1984-2022| DLX, LULI, Limited, SDT,S...| 4 Cyl 2.4L, 4 Cyl..',
            'Avalon| 1995-2022| Limited, XL, XLE, XLE Pre...| 4 Cyl 2.5L, 6 Cyl...',
            'C-HR| 2017-2022| 4 Cyl 2.0L',
            'Camry| 1987-2022| CE, DX, LE, N, No Grade... | 4 Cyl 2.0L, 4 Cyl 2.2L...',
            'Celica| 1988-2005, 1984-1985| GT, GTS, ST...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
            'Corolla| 1984-2022| CE, D, DX, ECO...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
            'Corolla Cross| 2022',
            'Corolla iM| 2017-2018| N| 4 Cyl 1.8L',
            'Cressida| 1985-1992| GLX| 6 Cyl 2.8L, 6 Cyl 3.0L',
            'Echo| 2000-2005| 4 Cyl 1.5L'
            // Add more items here
        ];
        const itemsList2 = [
            '4Runner| 1984-2022| DLX, LULI, Limited, SDT,S...| 4 Cyl 2.4L, 4 Cyl..',
            'Avalon| 1995-2022| Limited, XL, XLE, XLE Pre...| 4 Cyl 2.5L, 6 Cyl...',
            'C-HR| 2017-2022| 4 Cyl 2.0L',
            'Camry| 1987-2022| CE, DX, LE, N, No Grade... | 4 Cyl 2.0L, 4 Cyl 2.2L...',
            'Celica| 1988-2005, 1984-1985| GT, GTS, ST...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
            'Corolla| 1984-2022| CE, D, DX, ECO...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
            'Corolla Cross| 2022',
            'Corolla iM| 2017-2018| N| 4 Cyl 1.8L',
            'Cressida| 1985-1992| GLX| 6 Cyl 2.8L, 6 Cyl 3.0L',
            'Echo| 2000-2005| 4 Cyl 1.5L'
            // Add more items here
        ];
        const itemsList3 = [
            '4Runner| 1984-2022| DLX, LULI, Limited, SDT,S...| 4 Cyl 2.4L, 4 Cyl..',
            'Avalon| 1995-2022| Limited, XL, XLE, XLE Pre...| 4 Cyl 2.5L, 6 Cyl...',
            'C-HR| 2017-2022| 4 Cyl 2.0L',
            'Camry| 1987-2022| CE, DX, LE, N, No Grade... | 4 Cyl 2.0L, 4 Cyl 2.2L...',
            'Celica| 1988-2005, 1984-1985| GT, GTS, ST...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
            'Corolla| 1984-2022| CE, D, DX, ECO...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
            'Corolla Cross| 2022',
            'Corolla iM| 2017-2018| N| 4 Cyl 1.8L',
            'Cressida| 1985-1992| GLX| 6 Cyl 2.8L, 6 Cyl 3.0L',
            'Echo| 2000-2005| 4 Cyl 1.5L'
            // Add more items here
        ];
        const itemsList4 = [
            '4Runner| 1984-2022| DLX, LULI, Limited, SDT,S...| 4 Cyl 2.4L, 4 Cyl..',
            'Avalon| 1995-2022| Limited, XL, XLE, XLE Pre...| 4 Cyl 2.5L, 6 Cyl...',
            'C-HR| 2017-2022| 4 Cyl 2.0L',
            'Camry| 1987-2022| CE, DX, LE, N, No Grade... | 4 Cyl 2.0L, 4 Cyl 2.2L...',
            'Celica| 1988-2005, 1984-1985| GT, GTS, ST...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
            'Corolla| 1984-2022| CE, D, DX, ECO...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
            'Corolla Cross| 2022',
            'Corolla iM| 2017-2018| N| 4 Cyl 1.8L',
            'Cressida| 1985-1992| GLX| 6 Cyl 2.8L, 6 Cyl 3.0L',
            'Echo| 2000-2005| 4 Cyl 1.5L'
            // Add more items here
        ];
        const itemsList5 = [
            '4Runner| 1984-2022| DLX, LULI, Limited, SDT,S...| 4 Cyl 2.4L, 4 Cyl..',
            'Avalon| 1995-2022| Limited, XL, XLE, XLE Pre...| 4 Cyl 2.5L, 6 Cyl...',
            'C-HR| 2017-2022| 4 Cyl 2.0L',
            'Camry| 1987-2022| CE, DX, LE, N, No Grade... | 4 Cyl 2.0L, 4 Cyl 2.2L...',
            'Celica| 1988-2005, 1984-1985| GT, GTS, ST...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
            'Corolla| 1984-2022| CE, D, DX, ECO...| 4 Cyl 1.6L, 4 Cyl 1.8L...',
            'Corolla Cross| 2022',
            'Corolla iM| 2017-2018| N| 4 Cyl 1.8L',
            'Cressida| 1985-1992| GLX| 6 Cyl 2.8L, 6 Cyl 3.0L',
            'Echo| 2000-2005| 4 Cyl 1.5L'
            // Add more items here
        ];

        return (
            <Box >
                <Box className="productDetail-middle-section" >
                    <Heading className="middle-section-topbar" as="h3" >
                        Enter your vehicle info to find more Body parts that fit
                    </Heading>

                    <Box className="middle-section-middlebar">
                        <Flex className="middlebar-res" align="center">
                            <Heading as="h4" size="lg" mr="2">
                                Select by VIN
                                <Image src="/images/question.png" alt="Image Alt Text" w={15} h={15}  />

                            </Heading>
                            <input className="middlebar_search-placeholder" type="text"
                                   placeholder="Enter the VIN of your Vehicle"/>
                            <Button  onClick={toggleGridVisibility} className="middlebar_red-btn" colorScheme="teal">Find My Parts</Button>
                        </Flex>
                    </Box>
                    <Box mt={2} className="middle-section-endbar">
                        <Flex className="middlebar-res" align="center">
                            <Heading as="h4" size="lg" mr="2">
                                Select by Model
                            </Heading>
                            <Menu >
                                <MenuButton className="endbar-topsection-input" as={Button} rightIcon={<ChevronDownIcon />}>
                                    -- Select Make --
                                </MenuButton>
                                <MenuList zIndex={3} >
                                    <MenuItem className="menu-item">Toyota</MenuItem>
                                    <MenuItem className="menu-item">Scion</MenuItem>

                                </MenuList>
                            </Menu>
                            <Menu >
                                <MenuButton className="endbar-topsection-input2" as={Button} rightIcon={<ChevronDownIcon />}>
                                    -- Select Model --
                                </MenuButton>
                                <MenuList style={{zIndex:'3',overflowY: 'auto',maxHeight:'250px'}} zIndex={3}>
                                    <MenuItem className="menu-item">4Runner</MenuItem>
                                    <MenuItem className="menu-item">86</MenuItem>
                                    <MenuItem className="menu-item">Avalon</MenuItem>
                                    <MenuItem className="menu-item">C-HR</MenuItem>
                                    <MenuItem className="menu-item">Camry</MenuItem>
                                    <MenuItem className="menu-item">Celica</MenuItem>
                                    <MenuItem className="menu-item">Corolla</MenuItem>
                                    <MenuItem className="menu-item">Corolla Cross</MenuItem>
                                    <MenuItem className="menu-item">Corolla iM</MenuItem>
                                    <MenuItem className="menu-item">Corona</MenuItem>
                                    <MenuItem className="menu-item">Cressida</MenuItem>
                                    <MenuItem className="menu-item">Echo</MenuItem>
                                    <MenuItem className="menu-item">Fj Cruiser</MenuItem>
                                    <MenuItem className="menu-item">GR Supra</MenuItem>
                                    <MenuItem className="menu-item">GR86</MenuItem>
                                    <MenuItem className="menu-item">Highlander</MenuItem>
                                    <MenuItem className="menu-item">Land Cruiser</MenuItem>
                                    <MenuItem className="menu-item">MR2</MenuItem>
                                    <MenuItem className="menu-item">MR2 Spyder</MenuItem>
                                    <MenuItem className="menu-item">Matrix</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu >
                                <MenuButton className="endbar-topsection-input2" as={Button} rightIcon={<ChevronDownIcon />}>
                                    -- Select Year --
                                </MenuButton>
                                <MenuList style={{zIndex:'2',overflowY: 'auto',maxHeight:'250px'}} zIndex={3} >
                                    <MenuItem className="menu-item">2023</MenuItem>
                                    <MenuItem className="menu-item">2022</MenuItem>
                                    <MenuItem className="menu-item">2021</MenuItem>
                                    <MenuItem className="menu-item">2020</MenuItem>
                                    <MenuItem className="menu-item">2019</MenuItem>
                                    <MenuItem className="menu-item">2018</MenuItem>
                                    <MenuItem className="menu-item">2017</MenuItem>
                                    <MenuItem className="menu-item">2016</MenuItem>
                                    <MenuItem className="menu-item">2015</MenuItem>
                                    <MenuItem className="menu-item">2014</MenuItem>
                                    <MenuItem className="menu-item">2013</MenuItem>
                                    <MenuItem className="menu-item">2012</MenuItem>
                                    <MenuItem className="menu-item">2011</MenuItem>
                                    <MenuItem className="menu-item">2010</MenuItem>
                                    <MenuItem className="menu-item">2009</MenuItem>
                                    <MenuItem className="menu-item">2008</MenuItem>
                                    <MenuItem className="menu-item">2007</MenuItem>
                                    <MenuItem className="menu-item">2006</MenuItem>
                                    <MenuItem className="menu-item">2005</MenuItem>
                                    <MenuItem className="menu-item">2004</MenuItem>
                                    <MenuItem className="menu-item">2003</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu >
                                <MenuButton className="endbar-topsection-input2" as={Button} rightIcon={<ChevronDownIcon />}>
                                    -- Select Submodel --
                                </MenuButton>
                                <MenuList zIndex={3} >
                                    <MenuItem className="menu-item">NAP</MenuItem>
                                    <MenuItem className="menu-item">NAP - Hybrid</MenuItem>

                                </MenuList>
                            </Menu>
                            <Button   onClick={toggleGridVisibility} className="middlebar_red-btn" colorScheme="teal">Find My Parts</Button>
                        </Flex>
                    </Box>
                </Box>

                <Box className="mobile-VM-topsection-lowerpart" >

                    <Heading className="top-section_main-padding"  as="h3">
                        Shop for Toyota Parts
                    </Heading>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"

                    >
                        <Button onClick={handleButton1Click}  className="mobile_topsection-button" variant="solid" >
                            Select Vehicle by VIN
                        </Button>
                        <Button onClick={handleButton2Click}  className="mobile_topsection-button2" variant="solid">
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
                                    <Button  onClick={toggleGridVisibility}  className="mobile_find-parts-btn" >Find My Parts</Button>
                                </Flex>
                                <Text className="box-one-text" >
                                    For the most accurate results, search by your VIN (vehicle identification number).
                                </Text>
                            </Box>
                        )}
                        {showTopSection2 && (
                            <Box className="topsextion_heading2" >
                                <Menu >
                                    <MenuButton className="topsection-input_lowerpart" as={Button} rightIcon={<ChevronDownIcon />}>
                                        -- Select Year --
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Download</MenuItem>
                                        <MenuItem>Create a Copy</MenuItem>
                                        <MenuItem>Mark as Draft</MenuItem>
                                        <MenuItem>Delete</MenuItem>
                                        <MenuItem>Attend a Workshop</MenuItem>
                                    </MenuList>
                                </Menu>
                                <Menu >
                                    <MenuButton mt={10} className="topsection-input_lowerpart" as={Button} rightIcon={<ChevronDownIcon />}>
                                        -- Select Make --
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Download</MenuItem>
                                        <MenuItem>Create a Copy</MenuItem>
                                        <MenuItem>Mark as Draft</MenuItem>
                                        <MenuItem>Delete</MenuItem>
                                        <MenuItem>Attend a Workshop</MenuItem>
                                    </MenuList>
                                </Menu>
                                <Menu >
                                    <MenuButton mt={10} className="topsection-input_lowerpart" as={Button} rightIcon={<ChevronDownIcon />}>
                                        -- Select Model --
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Download</MenuItem>
                                        <MenuItem>Create a Copy</MenuItem>
                                        <MenuItem>Mark as Draft</MenuItem>
                                        <MenuItem>Delete</MenuItem>
                                        <MenuItem>Attend a Workshop</MenuItem>
                                    </MenuList>
                                </Menu>

                                <Flex justify="end">
                                    <Button  onClick={toggleGridVisibility} mt={14} className="mobile_find-parts-btn" >Find My Parts</Button>
                                </Flex>
                            </Box>
                        )}
                    </Container>
                </Box>

                <Box className="acc-banner">
                    <Image src="/images/acc-banner.webp" alt="Image Alt Text"/>
                </Box>
                <Heading pt={10} className="Product-detail-heading"  margin="0" as="h3" mt={4}>
                    Browse by Model
                </Heading>
                <Box mt={10}>
                    <AccessoriesModelRows />
                </Box>

                <AccessoryDetailSection />
                <Heading pt={10} className="Product-detail-heading"  margin="0" as="h5" mt={4}>
                    About Toyota Accessories
                </Heading>
                <Text className="acsry-text-bottom">
                    About Toyota Accessories
                    Toyota, short for Toyota Motor Corporation, is a renowned Japanese multinational automotive
                    manufacturer. Famous for its refined and well-designed vehicles, not to mention its superb record
                    for reliability and durability, Toyota has earned a great deal of popularity. Toyota has always been
                    a compelling choice for shoppers since it has so many merits as well as same well-designed and
                    delicate OEM Toyota accessories.<br/>
                    If you have never given a deep thought about the Toyota accessories, this is a good opportunity for
                    you to know about them more. You can start your study from the Toyota floor mats, shift knob and
                    cargo net from the interior accessories, the Toyota running boards, roof rack and paint protection
                    film of the exterior accessories and the Toyota brake pads, oil filter and exhaust in the TRD
                    performance accessories. Do you know without the protection of the Toyota floor mats, the lifespan
                    your vehicle's floor will be shortened dramatically, and the interior will be messy? And the Toyota
                    shift knob will make it easier for you to shift between gears. If you have a lot of equipment to
                    carry for a vacation, you will thank the Toyota roof rack to provide you an instant storage place on
                    the roof. And with the help of the Toyota paint protection film, your vehicle's appearance will be
                    kept new and clean. And both Toyota oil filter and exhaust could improve the fuel efficiency
                    substantially.<br/>
                    If you want to smarten up your vehicle, you cannot miss the Toyota accessories. Meanwhile, you are
                    highly recommended to go for OEM Toyota accessories for precise fitment and optimum performance. The
                    online store ToyotaPartsDeal.com has long developed a reputation for reliability and integrity, you
                    can shop the genuine Toyota accessories from here with confidence. These OEM Toyota accessories are
                    not only of the best quality, they are also offered at the lowest price on the web and favored by
                    the quickest delivery service.<br/>
                </Text>
            </Box>
        );
    };

    export default Accessory;
