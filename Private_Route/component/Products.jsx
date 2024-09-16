// Import necessary modules from React and other libraries
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'; // Importing the Navbar component
import { useNavigate } from 'react-router-dom'; // useNavigate for programmatic navigation
import axios from 'axios'; // Axios for making HTTP requests
import { Box, Card, CardBody, Flex, Heading, Image, SimpleGrid, Stack, Text, useToast } from '@chakra-ui/react'; // Chakra UI components

// Define the Products component
const Products = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation
  const toast = useToast(); // useToast hook for displaying notifications
  const token = localStorage.getItem("token"); // Retrieve token from localStorage
  const [products, setProducts] = useState([]); // State to store fetched products

  // useEffect to fetch products or redirect based on the token
  useEffect(() => {
    if (token === "QpwL5tke4Pnpja7X4") { // Check if the token is valid
      // Fetch products from the fake store API if token is valid
      axios("https://fakestoreapi.com/products")
        .then(res => setProducts(res.data)) // Set the fetched products to the state
        .catch(error => console.log(error)); // Log any errors
    } else {
      // Show a toast notification and redirect to the login page if token is invalid
      toast({
        title: "Redirecting to Login Page", // Message displayed in the toast
        status: "info", // Toast status as informational
        duration: 5000, // Toast will disappear after 5 seconds
        isClosable: true, // Allow the user to close the toast manually
      });
      navigate("/login"); // Redirect to the login page
    }
  }, [navigate, token, toast]); // useEffect dependencies

  // Return the JSX structure of the component
  return (
    <>
      <Navbar /> {/* Render the Navbar component */}

      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}  // Grid layout: responsive columns from 1 to 4
        spacing={6}  // Space between grid items
        width="98%"  // Grid width set to 98% of the container
        m="20px auto"  // Margin to center the grid
        overflowX="hidden"  // Prevent horizontal overflow
      >
        {/* Loop through the products array and display each product */}
        {products.map((item) => {
          return (
            // Stack component to organize product details with hover effects
            <Stack
              key={item._id}  // Unique key for each product, required by React
              _hover={{
                boxShadow: "lg",  // Add a large shadow on hover
                cursor: "pointer"  // Change the cursor to pointer on hover
              }}
              boxShadow="0 10px 15px -3px rgba(75, 0, 130, 0.3), 0 4px 6px -2px rgba(60, 60, 60, 0.15)"  // Default box shadow for each card
              borderRadius={15}  // Rounded corners for each card
              m={3}  // Margin around each card
              spacing={3}  // Space between elements inside each card
              p="30px"  // Padding inside each card
            >
              {/* Display the product title as a heading */}
              <Heading size="md" textAlign="center">
                {item.title}
              </Heading>

              {/* Display the product image */}
              <Image
                alt={item.title}  // Alt text for accessibility
                width="80%"  // Set image width to 80%
                m="auto"  // Center the image horizontally
                objectFit="cover"  // Ensure the image covers the available space without distortion
                borderRadius="lg"  // Rounded corners for the image
                src={item.image}  // Image source from the product data
              />

              {/* Display the product description */}
              <Text>{item.description}</Text>

              {/* Display the product price */}
              <Text fontSize="xl" color="blue.500">
                ${item.price} {/* Price formatted with a dollar sign */}
              </Text>

              {/* Additional product description (if needed) */}
              <Text>
                {item.des}
              </Text>
            </Stack>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export default Products; // Export the Products component as default
