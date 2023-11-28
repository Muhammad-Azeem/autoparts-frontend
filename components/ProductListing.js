// components/Header.js
import React, {useRef, useState , useEffect} from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
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
    Center, Breadcrumb, BreadcrumbItem, BreadcrumbLink, ListItem, List, Icon
} from '@chakra-ui/react';
import '../styles//global.css';
import { DeleteIcon } from '@chakra-ui/icons';
import {getAllCategories, getProductsBySubCategoryId,getVehicleId} from './API/api';
import {FaMinus, FaPlus} from "react-icons/fa";
import {
    clearAllGaragesFromCookie,
    getGarageFromCookie,
    getSelectedGarageFromCookie,
    removeGarageFromCookie, setGarageCookie
} from "./utility/cookies";
import AddVehicleModal from "./AddVehicleModal";
import LoaderSpinnerMini from './LoaderSpinnerMini';
import LoaderSpinner from './LoaderSpinner';
const ProductListing = () => {
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);

    const [categories, setCategories] = useState([]);
    const [vehicleId, setVehicleId] = useState([]);
    const [activeVehicle, setActiveVehicle] = useState([]);



    useEffect(() => {

        const fetchCategories = async () => {
            try {
                setLoading2(true);
                const data = await getAllCategories();
                setCategories(data);
                setLoading2(false);

            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);
    const fetchVehicleId = async () => {
        const data1 = await getSelectedGarageFromCookie();
        setActiveVehicle(data1);
        if (data1.length != 0 ){
            try {
                const data = await getVehicleId(data1);
                setVehicleId(data.id);

            } catch (error) {
                console.error('Error fetching product:', error);
            }
        }
        else{
            window.location.href = '/';
        }
    };

    useEffect(async() => {
        fetchVehicleId();
    }, []);
    const [activeGridItem, setActiveGridItem] = useState(1);

    const [isBoxVisible, setIsBoxVisible] = useState(false);

    const toggleBoxVisibility = () => {
        setIsBoxVisible(!isBoxVisible);

        // Scroll to the top of the page
        if (!isBoxVisible) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    const [isGrid1Visible, setIsGrid1Visible] = useState(true);
    const [isGrid2Visible, setIsGrid2Visible] = useState(false);

    const toggleGridVisibility = () => {
        setIsGrid1Visible(!isGrid1Visible);
        setIsGrid2Visible(!isGrid2Visible);
    };

    //list
    const [isBodyPartsOpen, setBodyPartsOpen] = useState(true);
    const [isElectricalOpen, setElectricalOpen] = useState(true);
    const [isEngineFuelToolOpen, setEngineFuelToolOpen] = useState(true);
    const [isPowerTrainChassisOpen, setPowerTrainChassisOpen] = useState(true);

    const toggleList = (listName) => {
        switch (listName) {
            case 'BodyParts':
                setBodyPartsOpen(!isBodyPartsOpen);
                break;
            case 'Electrical':
                setElectricalOpen(!isElectricalOpen);
                break;
            case 'EngineFuelTool':
                setEngineFuelToolOpen(!isEngineFuelToolOpen);
                break;
            case 'PowerTrainChassis':
                setPowerTrainChassisOpen(!isPowerTrainChassisOpen);
                break;
            default:
                break;
        }
    };

    const isCategoryOpen = (categoryName) => {
        switch (categoryName) {
          case 'BodyParts':
            return isBodyPartsOpen;
          case 'Electrical':
            return isElectricalOpen;
          case 'EngineFuelTool':
            return isEngineFuelToolOpen;
          case 'PowerTrainChassis':
            return isPowerTrainChassisOpen;
          // Add cases for other categories
          default:
            return false;
        }
      };

    const scrollToListSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    // const refs = categories.map(() => useRef());

    // const powerTrainChassisRef = useRef();
    // const engineFuelToolChassisRef = useRef();
    // const electricalChassisRef = useRef();
    // const bodyPartsChassisRef = useRef();


    const router = useRouter();

    const handleHomeClick = () => {
        router.push('/');
    };
    const handleProductClick = (id) => {
        window.location.href = '/ProductPage/'+id;
    };
    const [isDivOpen, setIsDivOpen] = useState(false);
    const divRef = useRef();

    // Close the div when clicking outside
    const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setIsDivOpen(false);
        }
    };

    // Close the div when the cursor hovers out
    const handleMouseLeave = () => {
        setIsDivOpen(false);
        setProductsByCategory([]);

    };
    const [productsByCategory, setProductsByCategory] = useState([])
    const handleMouseEnter = async (subCategoryId, subCategoryName) => {

        setLoading(true);
        setIsDivOpen(subCategoryName);

        const response = await getProductsBySubCategoryId(subCategoryId,vehicleId)
        setProductsByCategory(response.products);
        setLoading(false);
        console.log(response.products, 'tp')

    };

    // Add click outside event listener when the div is open
    useEffect(() => {
        if (isDivOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDivOpen]);
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleCategoryHover = (categoryName) => {
        setHoveredCategory(categoryName);
    };

    const [garages, setGarages] = useState(getGarageFromCookie());

    const handleDeleteGarage = (id) => {
        removeGarageFromCookie(id);
        setGarages(getGarageFromCookie());
    };

    useEffect(() => {
        setGarages(getGarageFromCookie());
        console.log(garages);
    }, [isDivOpen]); // Run only once on component mount


    const handleClearAllGarages = () => {
        clearAllGaragesFromCookie();
        setGarages([]); // Clear the garage state in your component
        router.push('/');
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const onModalOpen = () => setIsModalOpen(true);
    const onModalClose = () => setIsModalOpen(false);

    const [isGarageOpen, setIsGarageOpen] = useState(false);
    const divGarageRef = useRef();

    // Close the div when clicking outside
    const handleClickOutsideGarage = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setIsGarageOpen(false);
        }
    };

    // Close the div when the cursor hovers out
    // const handleMouseLeaveGarage = () => {
    //     setIsGarageOpen(false);
    // };
    const handleMouseLeaveGarage = (event) => {
        // Check if the mouse is leaving both the "Change Vehicle" link and the garage dropdown
        if (
            divGarageRef.current?.contains &&
            (!divGarageRef.current.contains(event.relatedTarget) || event.relatedTarget.classList.contains("vehicle-list-box"))
        ) {
            setIsGarageOpen(false);
        }
    };
    const [garage, setGarage] = useState(getGarageFromCookie());
    const handleRadioChange = (selectedIndex) => {
        const updatedGarageList = garage.map((garageEntry, index) => ({
            ...garageEntry,
            is_selected: index === selectedIndex,
        }));

        // Set is_selected to false for all other garages except the selected one
        updatedGarageList.forEach((garageEntry, index) => {
            if (index !== selectedIndex) {
                garageEntry.is_selected = false;
            }
        });

        // Sort the updated garage list to display the selected garage on top
        updatedGarageList.sort((a, b) => (a.is_selected ? -1 : b.is_selected ? 1 : 0));
        // Update the cookie with the updated garage list
        setGarageCookie(updatedGarageList);
        window.location.reload();
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

    return (
        <Box >
            <Breadcrumb className="Product-listing-breadcrum"  separator=">">
                <BreadcrumbItem ml={4} fontSize="14px">
                    <BreadcrumbLink  textDecoration="underline" cursor="pointer" onClick={handleHomeClick}>Home</BreadcrumbLink>
                </BreadcrumbItem >
                <BreadcrumbItem fontSize="14px" isCurrentPage>
                    <BreadcrumbLink fontWeight="600" href="#">Category</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Heading className="Product-listing-heading"  margin="0" as="h2" mt={4}>
                {activeVehicle && (
                    <>
                        {activeVehicle.year} {activeVehicle.company} {activeVehicle.model} Parts
                    </>
                )}
            </Heading>
            <Grid
                templateColumns="20% 80%"
                className="list-grid main-padding"
                mb={35}
                mt={0}
            >
                <Grid colSpan={1} className="product-listing-left-row" mt={15} gap={6}>
                    <GridItem rowSpan={1} colSpan={1} bg="white" p={4}>
                        <Box border="1px solid #b0b0b0" alignItems="center">
                            <Text position='relative' className="vm-leftside-heading" size="lg" onMouseLeave={handleMouseLeaveGarage} >
                                My Vehicle
                                <a  onMouseEnter={() => setIsGarageOpen(true)}  className="change-vehicle" >
                                    Change Vehicle
                                </a>
                                {isGarageOpen && (
                                    <div
                                        ref={divGarageRef}
                                        style={{
                                            position: 'absolute',
                                            // top: '300px', // Adjust the positioning as needed
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
                                                garages.map((garageEntry, index) => (
                                                    <li
                                                        key={garageEntry.id}
                                                        className="no-vehicles"
                                                        style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', cursor: 'pointer !important' }}
                                                        onClick={() => handleRadioChange(index)}
                                                    >
                                                        <div>
                                                            <input type="radio" id={garageEntry.id} name="gender" value={garageEntry.name} checked={garageEntry.is_selected}  />
                                                            <span key={garageEntry.id}>
                                                                {garageEntry.company} {garageEntry.model} {garageEntry.year}
                                                            </span>
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
                                            <p onClick={onModalOpen} className="add-new-vehicle">Add New Vehicle</p>

                                            <p className="clear-all" onClick={handleClearAllGarages} >Clear All</p>
                                        </div>
                                    </div>
                                )}
                            </Text>
                            <AddVehicleModal isOpen={isModalOpen} onClose={onModalClose} />
                            <Box className="vmm-leftside-box" fontSize="lg" fontWeight="600" color="black">
                                {activeVehicle && (
                                    <>
                                        {activeVehicle.year} {activeVehicle.company} {activeVehicle.model}
                                    </>
                                )}
                            </Box>
                        </Box>

                        <Box position="sticky" top="0px" mt={15} border="1px solid #b0b0b0" alignItems="center">
                            <Text  className="vm-leftside-heading" size="lg">
                                Categories
                            </Text>
                            {categories.map((category, index) => (
                                <Box
                                key={index}
                                onClick={() => scrollToListSection()}
                                className="vm-leftside-box"
                                fontSize="small"
                                color="grey"
                                // ref={refs[index]}
                                >
                                {category.name}
                                </Box>
                            ))}
                        </Box>
                    </GridItem>
                </Grid>

                <GridItem  colSpan={1} bg='#fff'>
                    <Flex>
                        <Box width="100%">
                            <Grid className="list-grid" >
                                <Heading className="list-heading" as="h3" >
                                    Parts and Categories
                                </Heading>

                                    <Box className="list-category-box" >
                                    {loading2 ? (
                                        <LoaderSpinner />
                                            ) : (
                                            <>

                                        {categories.map((category, index) => (
                                            <>
                                                <Heading className="list-category"  onClick={() => toggleList(category.name)} as="h3">
                                                    <Icon height="10px" as={FaPlus} mr={2} />  {category.name}
                                                </Heading>
                                                {(category.name) && (
                                                    <List className="category-list-ul"
                                                    spacing={3}
                                                    >
                                                        {category.sub_categories.map((subCategory, subIndex) => (
                                                            <ListItem
                                                                onMouseLeave={handleMouseLeave}
                                                                onMouseEnter={() => handleMouseEnter(subCategory.id, subCategory.name)}
                                                                position="relative"
                                                                key={subIndex} className="category-list-item">
                                                                    {subCategory.name}
                                                                    <Image float="right" height="15px"src="/images/search-list-category.png" mr="2"
                                                            />
                                                                <div>
                                                                        {isDivOpen === subCategory.name && (
                                                                                <div
                                                                                    ref={divRef}
                                                                                    style={{
                                                                                        position: 'absolute',
                                                                                        top: '8px', // Adjust the positioning as needed
                                                                                        right: '35px',
                                                                                        maxWidth:'370px',
                                                                                        width:'100%',
                                                                                        background: 'white',
                                                                                        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                                                                                        zIndex: '9',
                                                                                    }}
                                                                                    onMouseLeave={handleMouseLeave}
                                                                                >
                                                                                    <div className='sub-mod-box' style={{position:'relative'}} >
                                                                                        <Heading className='sub-mod-head'  margin="0" as="h2" mt={4}>
                                                                                            Parts in {subCategory.name}
                                                                                        </Heading>
                                                                                        {loading ? (
                                                                                            <LoaderSpinnerMini />
                                                                                                ) : (
                                                                                                <>

                                                                                        {productsByCategory.map((product, index) => (


                                                                                            // eslint-disable-next-line react/jsx-key
                                                                                            <Box mt={5} className='sub-mod-innerbox' display='flex' onClick={() => handleProductClick(product.id)}>
                                                                                                {product.images &&
                                                                                                    Array.isArray(JSON.parse(product.images)) &&
                                                                                                    JSON.parse(product.images).length > 0 && (
                                                                                                        <Image
                                                                                                            className="sub-mod-innerbox-img"
                                                                                                            src={JSON.parse(product.images)[0].image1}
                                                                                                            alt="Image 1"
                                                                                                            float="right" height="15px"
                                                                                                            mr="2"
                                                                                                        />
                                                                                                    )}

                                                                                                {/*<Image className='sub-mod-innerbox-img' float="right" height="15px"src={product.images} mr="2"/>*/}
                                                                                                <Text ml={25} mr={15} className='sub-mod-innerbox-text'>{product.name}</Text>
                                                                                                {/* <div className="sweet-loading22" css={loaderContainerStyle}>
                                                                                                    <ClipLoader css={override} size={150} color={'#123abc'} loading={true} />
                                                                                                </div> */}
                                                                                            </Box>
                                                                                            ))}
                                                                                            </>
                                                                                                )}


                                                                                    </div>
                                                                                </div>
                                                                        )}

                                                                </div>
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                    )}
                                            </>
                                        ))}
                                        </>
                                            )}
                                    </Box>
                            </Grid>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default ProductListing;
