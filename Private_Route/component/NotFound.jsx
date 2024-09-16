import Navbar from './Navbar'
import {  Flex, Heading, Text } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <>
      <Navbar />
      <Flex direction='column'   justify='center' w='100%' h="80vh" align='center'>
        <Heading m="30px auto"> 404 - Page Not Found</Heading>
        <Text >Sorry, the page you're looking for doesn't exist.</Text>
      </Flex>
    </>
  )
}

export default NotFound
