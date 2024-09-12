// Importing required components and hooks from Chakra UI, React, and React Router DOM
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Box, Button, ChakraProvider, Heading, Input, InputGroup, InputLeftAddon, InputRightAddon, useToast } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Home component
const Home = () => {
    // Defining refs to access input values without re-rendering the component
    const userName = useRef("")
    const userNum = useRef(null)
    const userEmail = useRef(null)
    const UserPass = useRef(null)
    const userDob = useRef(null)

    // useToast hook from Chakra UI to display notifications
    const toast = useToast()

    // useNavigate hook from React Router for programmatic navigation
    const navigate = useNavigate()

    // State to toggle password visibility
    const [show, setShow] = useState(false)

    // Function to handle form submission
    function handleSubmit() {
        // Get the values from the refs
        const name = userName.current.value
        const email = userEmail.current.value
        const number = userNum.current.value
        const password = UserPass.current.value
        const dob = userDob.current.value

        // Check if any of the fields are empty, and show an error toast if so
        if (name === "" || email === "" || number === "" || password === "" || dob === "") {
            toast({
                title: 'All input fields must be entered',
                status: "error"
            })
        } else {
            // Save user details to localStorage if all fields are filled
            localStorage.setItem("userName", userName.current.value)
            localStorage.setItem("userNum", userNum.current.value)
            localStorage.setItem("userEmail", userEmail.current.value)
            localStorage.setItem("userPass", UserPass.current.value)
            localStorage.setItem("userDob", userDob.current.value)

            // Display success toast and navigate to the "info" page after 5 seconds
            toast({
                title: "User Details Saved Successfully, in 5sec you will be redirected to Personal Info Page",
                status: "success",
                duration: 5000,
                isClosable: true
            })

            // Delayed navigation to the info page
            setTimeout(() => {
                navigate("/info")
            }, 5000);
        }
    }

    return (
        // ChakraProvider is a wrapper to provide Chakra UI theming and styling
        <ChakraProvider>
            {/* Box container with styling for the form */}
            <Box boxShadow="0 8px 15px rgba(65, 105, 225, 1)" w="60%" m="50px auto" p="40px 50px" borderRadius="10px" textAlign="center" >
                <Heading>Chakra UI Exclusive Registration Form</Heading>

                {/* Input field for Name */}
                <InputGroup m={5} border="2px solid" borderColor="blue.600" p="1px">
                    <Input ref={userName} border="none" variant="filled" placeholder='Enter Your Name' required />
                </InputGroup>

                {/* Input field for Phone Number with country code addon */}
                <InputGroup m={5} border="2px solid" borderColor="blue.600" p="1px">
                    <InputLeftAddon border="none" borderRight="2px solid" borderColor="blue.600">+91</InputLeftAddon>
                    <Input ref={userNum} type="tel" placeholder='Phone Number' border="none" required />
                </InputGroup>

                {/* Input field for Email with .com addon */}
                <InputGroup m={5} border="2px solid" borderColor="blue.600" p="1px">
                    <Input ref={userEmail} border="none" size="lg" placeholder='Enter Your Email Address' required />
                    <InputRightAddon border="none" borderLeft="2px solid" borderColor="blue.600">.com</InputRightAddon>
                </InputGroup>

                {/* Input field for Password with toggleable visibility */}
                <InputGroup m={5} border="2px solid" borderColor="blue.600" p="1px">
                    <Input ref={UserPass} border="none" type={show ? "text" : "password"} variant="filled" size="lg" placeholder='Create New Password' required />
                    <InputRightAddon onClick={() => setShow(!show)} border="none" borderLeft="2px solid" borderColor="blue.600">
                        {show ? <ViewOffIcon color="grey.300" /> : <ViewIcon color="grey.300" />}
                    </InputRightAddon>
                </InputGroup>

                {/* Input field for Date of Birth */}
                <InputGroup m={5} border="2px solid" borderColor="blue.600" p="1px">
                    <Input ref={userDob} type="date" border="none" required />
                </InputGroup>

                {/* Register Button with hover effect */}
                <Button bgColor="#041c5e" color="white" onClick={handleSubmit} border="2px solid" borderColor="blue.600" p="15px 30px"
                    _hover={{
                        bg: "#002fb0",
                    }}
                >Register Now</Button>

                {/* Button to navigate directly to the info page */}
                <Button onClick={() => navigate('/info')} border="2px solid" borderColor="blue.600" p="15px 30px" m={10} bgColor="darkgreen" 
                    _hover={{ bg: "green.600", color: "white" }} color="white">VIEW INFO PAGE
                </Button>
            </Box>
        </ChakraProvider>
    )
}

export default Home
