import React, { useContext, useRef } from 'react'  // Importing React, useContext, and useRef hooks 
import { Button, Flex, FormControl, FormLabel, Heading, Input, useToast } from '@chakra-ui/react'  // Importing Chakra UI components
import axios from 'axios'  // Importing axios for HTTP requests
import { GlobalContext } from '../context/GlobalContext'  // Importing GlobalContext for managing global state
import { useNavigate } from 'react-router-dom'  // Importing useNavigate hook for navigation

const Login = () => {
  const toast = useToast()  // Hook for displaying toast notifications
  const navigate = useNavigate()  // Hook for programmatic navigation
  const email = useRef("")  // Reference to the email input field
  const password = useRef("")  // Reference to the password input field
  const {setIsLogged } = useContext(GlobalContext)  // Accessing and updating login state from GlobalContext

  function handleSubmit(e) {
    e.preventDefault()  // Preventing default form submission behavior

    // Collecting user input values
    const userValues = {
      email: email.current.value,
      password: password.current.value
    }

    // Sending POST request to the login API
    axios.post("https://reqres.in/api/login", userValues).then((res) => {
      const { token } = res.data  // Extracting token from the response data
      // Checking if the credentials match a specific user
      if (userValues.email === "eve.holt@reqres.in" && userValues.password === "cityslicka") {
        setIsLogged(true)  // Updating the login state
        localStorage.setItem("token", token)  // Storing the token in local storage
        navigate("/products")  // Redirecting to the products page
        toast({
          title: 'Logged in successfully',  // Success toast message
          status: 'success',
          duration: 2000,
          isClosable: true,  // Toast can be closed manually
        })
      } else {
        toast({
          title: 'Invalid credentials',  // Error toast message
          status: 'error',
          duration: 2000,
          isClosable: true,  // Toast can be closed manually
        })
      }
    }).catch(error => {
      toast({
        title: "Invalid credentials",  // Error toast message for failed requests
        status: "error",
        duration: 5000
      })
      navigate("/login")  // Redirecting to the login page on error
      console.log("Error Occured while login", error)  // Logging error to the console
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <Flex w='50vw' m='100px auto'  >
          <FormControl 
            borderColor='blue.500' w='100%' m="20px auto" p='30px'
            boxShadow="rgba(0, 0, 0, 0.25) 0px 12px 20px, rgba(0, 0, 255, 0.5) 0px 4px 15px, rgba(0, 0, 0, 0.12) 0px 2px 5px, rgba(0, 0, 0, 0.17) 0px 8px 15px"
            // Styling for box shadow
            borderRadius="md"  // Rounded corners for the form control
          >
            <Heading textAlign='center' >LOGIN HERE </Heading>  {/* Heading for the login form */}
            <FormLabel m='20px auto' >Email</FormLabel>  {/* Label for email input */}
            <Input ref={email} type='email' placeholder='Enter Email' />  {/* Email input field */}
            <FormLabel m='20px auto' >Password</FormLabel>  {/* Label for password input */}
            <Input ref={password} type='password' placeholder='Enter Password' />  {/* Password input field */}
            <Button 
              m='20px auto' display='block' type='submit' variant='solid' colorScheme='facebook'
            >
              Login Now  {/* Button text for submitting the form */}
            </Button>
          </FormControl>
        </Flex>
      </form>
    </>
  )
}

export default Login  // Exporting the Login component
