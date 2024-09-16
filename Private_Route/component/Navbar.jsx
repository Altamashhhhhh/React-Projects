import { Box, Button, Flex } from '@chakra-ui/react'  // Importing Chakra UI components
import React, { useContext } from 'react'  // Importing React and useContext hook
import { Link, useNavigate } from 'react-router-dom'  // Importing React Router components for navigation
import "../styles/Navbar.css"  // Importing custom CSS for Navbar styling
import { GlobalContext } from '../context/GlobalContext'  // Importing GlobalContext for accessing global state

const Navbar = () => {
  const navigate = useNavigate()  // Hook for programmatic navigation
  const { isLogged } = useContext(GlobalContext)  // Accessing isLogged state from GlobalContext

  return (
    <Flex 
      w="100%" backgroundColor="blue.700" p='20px' color='white' align='center' justify='space-around' 
      // Chakra UI Flex component used for layout with 100% width, background color, padding, text color, and alignment
    >
      {/* Links for navigation to different pages */}
      <Link to="/" >HOME</Link> 
      <Link to="/products" >PRODUCTS</Link>
      <Link to="/contact" >CONTACT</Link>
      <Link to="/about" >ABOUT</Link>

      {/* Login/Logout button - checks if user is logged in */}
      <Link to="/login" > 
        <Button 
          onClick={() => {
            if (isLogged) {
              localStorage.removeItem("token")  // If user is logged in, log out by removing token
              navigate('/login')  // Redirect to login page after logging out
            } else {
              navigate("/login")  // If user is not logged in, navigate to login page
            }
          }} 
          variant='solid' colorScheme='telegram'  // Chakra UI Button styling
        > 
          {isLogged ? "LOG OUT" : "LOGIN NOW"} 
        </Button> 
      </Link>
    </Flex>
  )
}

export default Navbar  // Exporting Navbar component
