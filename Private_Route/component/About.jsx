import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Navbar from "../component/Navbar"
const About = () => {
  return (
    <>
    <Navbar /> 
    <Flex m='20px auto' direction='column' width='70%' height='80vh' justify='center' p={8} textAlign="center">
      <Heading mb={6}>About Us</Heading>

      <Text fontSize="lg" mb={8}>
        Welcome to my store, your go-to destination for top-quality products and exceptional service. We're dedicated to providing the best shopping experience, focusing on reliability, customer satisfaction, and innovation.
      </Text>

      <Box mb={8}>
        <Heading size="md" mb={4}>Our Mission</Heading>
        <Text fontSize="lg">
          Our mission is to deliver high-quality products that enhance the lives of our customers. We strive to build long-lasting relationships through excellent customer service and a commitment to quality.
        </Text>
      </Box>

      <Box mb={8}>
        <Heading size="md" mb={4}>Our Vision</Heading>
        <Text fontSize="lg">
          We envision a world where shopping is effortless and accessible to everyone. By consistently improving and evolving, we aim to become a leader in our industry, trusted by customers across the globe.
        </Text>
      </Box>

      <Box>
        <Heading size="md" mb={4}>Our Values</Heading>
        <VStack spacing={4}>
          <Text fontSize="lg">- Customer First: We always put our customers at the heart of everything we do.</Text>
          <Text fontSize="lg">- Integrity: We believe in honest and transparent business practices.</Text>
          <Text fontSize="lg">- Innovation: We are constantly innovating to provide the best products and services.</Text>
          <Text fontSize="lg">- Sustainability: We aim to make a positive impact on our community and the environment.</Text>
        </VStack>
      </Box>
    </Flex>
    </>

  );
};

export default About;
