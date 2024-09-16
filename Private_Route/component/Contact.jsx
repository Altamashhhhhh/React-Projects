import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Navbar from "../component/Navbar"
const Contact = () => {
  return (
    <>
      <Navbar />
      <Flex h='80vh' w='60%' m='30px auto' direction='column' justify='center' alignContent='center' p={8} textAlign="center">
        <Heading mb={6}>Contact Us</Heading>

        <Text fontSize="lg" mb={8}>
          We’d love to hear from you! For any inquiries, please feel free to reach out using the details below. Our team is here to assist you.
        </Text>

        <VStack spacing={6}>
          <Text fontSize="lg">Phone: +91-9876543210</Text>
          <Text fontSize="lg">Email: support@yourstore.com</Text>
          <Text fontSize="lg">Address: 123 Tech Street, Mumbai, India</Text>
        </VStack>
        <Box mt={12}>
          <Text fontSize="lg">Business Hours:</Text>
          <Text>Monday to Friday: 9 AM - 6 PM</Text>
          <Text>Saturday: 10 AM - 4 PM</Text>
          <Text>Sunday: Closed</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
