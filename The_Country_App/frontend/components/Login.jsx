import { Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <Flex bgColor='#9F7AEA' w='100%' h='100vh' justify='center' align='center' >
      {/* <form onSubmit={handleSubmit}> */}
      <FormControl p='30px' w='50%' h='50%' bgColor='white' borderRadius={10} boxShadow='1px 1px 10px white' borderColor='#6B46C1'>
        <Heading color='#6B46C1' textAlign='center' m='10px auto'>LOGIN PAGE</Heading>
        <FormLabel m='10px auto'>EMAIL ADDRESS</FormLabel>
        <Input type='email' placeholder='EMAIL ADDRESS' />
        <FormLabel m='10px auto' >PASSWORD</FormLabel>
        <Input type="password" placeholder='ENTER PASSWORD' />
        <Button bgColor='#805AD5' color='white' m='30px auto' w='20%' h='15%'  display='block' type='submit' _hover={{bgColor : 'purple.300'}}>LOGIN NOW</Button>
      </FormControl>
      {/* </form> */}
    </Flex>
  )
}

export default Login
