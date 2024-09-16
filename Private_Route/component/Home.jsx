import React, { useContext } from 'react'  // Importing React and useContext hook
import Navbar from './Navbar'  // Importing Navbar component
import { Button, Card, Flex, Heading, Text } from '@chakra-ui/react'  // Importing Chakra UI components
import { useNavigate } from 'react-router-dom'  // Importing useNavigate hook for navigation
import { GlobalContext } from '../context/GlobalContext'  // Importing GlobalContext to access global state

const Home = () => {
  const navigate = useNavigate()  // Hook for programmatic navigation
  const { isLogged } = useContext(GlobalContext)  // Accessing isLogged state from GlobalContext

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Flexbox layout to center content on the page */}
      <Flex 
        height='80vh' justify='center' direction='column' alignContent='center'  
        p="20px" m='30px auto' w='80%' textAlign='center'
      >
        {/* Heading for the homepage */}
        <Heading>Welcome to Our Exclusive Product Store </Heading>
        
        {/* Text description about the store */}
        <Text fontSize='lg' m='20px auto'>
          Discover the latest tech gadgets, electronics, and accessories at unbeatable prices.
          Join our community to get access to personalized features and secure shopping.
        </Text>

        {/* Button for login/logout - conditional behavior based on login state */}
        <Button 
          onClick={() => {
            if (isLogged) {
              localStorage.removeItem("token")  // If logged in, remove token (log out)
              navigate('/login')  // Redirect to login page after logging out
            } else {
              navigate("/login")  // If not logged in, redirect to login page
            }
          }} 
          variant='solid' colorScheme='telegram' m='20px auto' padding='20px'
        >
          {isLogged ? "LOG OUT" : "LOGIN NOW"}   
        </Button>
      </Flex>
    </div>
  )
}

export default Home  // Exporting the Home component
