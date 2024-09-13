// Importing necessary components from Chakra UI and axios
import { Card, CardBody, Divider, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';  // Library to make HTTP requests
import { useEffect, useState } from 'react';  // React hooks

const Cards = () => {
    // Declaring state to store fetched product data
    const [productData, setProductData] = useState([]);

    // API endpoint to fetch product data
    const url = "https://fakestoreapiserver.reactbd.com/walmart";

    // Using useEffect to fetch data when the component is mounted
    useEffect(() => {
        // Making a GET request to fetch product data from the API
        axios(url).then((res) => {
            setProductData(res.data);  // Storing the API response in state
        });
        // Logging product data to the console for debugging purposes
        console.log(productData);
    }, []);  // Empty dependency array ensures this only runs once when the component mounts

    console.log(productData);  // Logging product data after it's updated for debugging

    return (
        // SimpleGrid component from Chakra UI for creating a responsive grid layout
        <SimpleGrid
            columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}  // Grid layout: 1 column on small screens, up to 4 on large
            spacing={6}  // Space between grid items
            width="98%"  // Grid width
            m="20px auto"  // Margin to center the grid
            overflowX="hidden"  // Prevent horizontal overflow
        >
            {/* Looping through product data to display each item */}
            {productData.map((item) => {
                return (
                    // Stack component to group each item's content with spacing and hover effects
                    <Stack
                        key={item._id}  // Unique key for each item, required by React
                        _hover={{
                            boxShadow: "lg",  // Adding shadow on hover
                            cursor: "pointer"  // Change cursor to pointer on hover
                        }}
                        boxShadow="0 10px 15px -3px rgba(75, 0, 130, 0.3), 0 4px 6px -2px rgba(60, 60, 60, 0.15)"  // Initial box shadow
                        borderRadius={15}  // Rounded corners
                        m={3}  // Margin around each card
                        spacing={3}  // Space between elements inside each card
                        p="30px"  // Padding inside each card
                    >
                        {/* Displaying the product title as a heading */}
                        <Heading size="md" textAlign="center">
                            {item.title}
                        </Heading>

                        {/* Displaying the product image */}
                        <Image
                            alt={item.title}  // Alt text for accessibility
                            width="80%"  // Setting image width
                            m="auto"  // Centering the image
                            objectFit="cover"  // Ensure the image covers the available space without distortion
                            borderRadius="lg"  // Rounded corners for the image
                            src={item.image}  // Image source from product data
                        />

                        {/* Displaying the product price */}
                        <Text fontSize="xl" color="blue.500">
                            ${item.price}
                        </Text>

                        {/* Displaying the product description */}
                        <Text>
                            {item.des}
                        </Text>
                    </Stack>
                );
            })}
        </SimpleGrid>
    );
}

export default Cards;
