import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Box, Button, ChakraProvider, Heading, Input, InputGroup, InputLeftAddon, InputRightAddon, useToast } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    // Defining references for user inputs to easily capture their values
    const userName = useRef("")
    const userNum = useRef(null)
    const userEmail = useRef(null)
    const UserPass = useRef(null)
    const userDob = useRef(null)

    // Chakra UI's toast hook to show feedback messages
    const toast = useToast()
    
    // useNavigate hook from react-router-dom to programmatically navigate between routes
    const navigate = useNavigate()

    // State for showing or hiding the password field
    const [show, setShow] = useState(false)

    // Function to handle form submission
    function handleSubmit() {
        // Getting values from input fields via useRef
        const name = userName.current.value
        const email = userEmail.current.value
        const number = userNum.current.value
        const password = UserPass.current.value
        const dob = userDob.current.value

        // If any input field is empty, show an error toast
        if (name === "" || email === "" || number === "" || password === "" || dob === "") {
            toast({
                title: 'All input fields must be entered', // Display message
                status: "error" // Set toast status as error
            })
        } else {
            // Save user details to localStorage
            localStorage.setItem("userName", userName.current.value)
            localStorage.setItem("userNum", userNum.current.value)
            localStorage.setItem("userEmail", userEmail.current.value)
            localStorage.setItem("userPass", UserPass.current.value)
            localStorage.setItem("userDob", userDob.current.value)

            // Show success toast after saving data
            toast({
                title: "User Details Saved Successfully, in 5sec you will be redirected to Personal Info Page",
                status: "success",
                duration: 5000, // Toast will disappear after 5 seconds
                isClosable: true
            })

            // After 5 seconds, redirect to the '/info' page
            setTimeout(() => {
                navigate("/info")
            }, 5000);
        }
    }

    return (
        <ChakraProvider>
            {/* Main container with box shadow and padding */}
            <Box boxShadow="0 8px 15px rgba(65, 105, 225, 1)" w="60%" m="50px auto" p="40px 50px" borderRadius="10px" textAlign="center" >
                
                {/* Heading of the form */}
                <Heading>Chakra UI Exclusive Registration Form</Heading>

                {/* Input for User Name */}
                <InputGroup m={5} border="2px solid" borderColor="blue.600" p="1px">
                    <Input ref={userName} border="none" variant="filled" placeholder='Enter Your Name' required />
                </InputGroup>

                {/* Input for Phone Number, with a country code as an addon */}
                <InputGroup m={5} border="2px solid" borderColor="blue.600" p="1px">
                    <InputLeftAddon border="none" borderRight="2px solid" borderColor="blue.600">+91</InputLeftAddon>
                    <Input ref={userNum} type="tel" placeholder='Phone Number' border="none" required />
                </InputGroup>

                {/* Input for Email, with ".com" as an addon */}
                <InputGroup m={5} border="2px solid" borderColor="blue.600" p="1px">
                    <Input ref={userEmail} border="none" size="lg" placeholder='Enter Your Email Address' required />
                    <InputRightAddon border="none" borderLeft="2px solid" borderColor="blue.600">.com</InputRightAddon>
                </InputGroup>

                {/* Input for Password, with show/hide functionality */}
                <InputGroup m={5} border="2px solid" borderColor="blue.600" p="1px">
                    <Input ref={UserPass} border="none" type={show ? "text" : "password"} variant="filled" size="lg" placeholder='Create New Password' required />
                    {/* Toggle show/hide password */}
                    <InputRightAddon onClick={() => setShow(!show)} border="none" borderLeft="2px solid" borderColor="blue.600">
                        {show ? <ViewOffIcon color="grey.300" /> : <ViewIcon color="grey.300" />}
                    </InputRightAddon>
                </InputGroup>

                {/* Input for Date of Birth */}
                <InputGroup m={5} border="2px solid" borderColor="blue.600" p="1px">
                    <Input ref={userDob} type="date" border="none" required />
                </InputGroup>

                {/* Register Button, with a hover effect */}
                <Button 
                    bgColor="#041c5e" 
                    color="white" 
                    onClick={handleSubmit} 
                    border="2px solid" 
                    borderColor="blue.600" 
                    p="15px 30px"
                    _hover={{
                        bg: "#002fb0", // Change background color on hover
                    }}
                >
                    Register Now
                </Button>

                {/* Button to navigate to Info Page */}
                <Button 
                    onClick={() => navigate('/info')} 
                    border="2px solid" 
                    borderColor="blue.600" 
                    p="15px 30px" 
                    m={10} 
                    bgColor="darkgreen" 
                    _hover={{ 
                        bg: "green.600", // Change background color on hover
                        color: "white" 
                    }} 
                    color="white"
                >
                    VIEW INFO PAGE
                </Button>
            </Box>
        </ChakraProvider>
    )
}

export default Home
