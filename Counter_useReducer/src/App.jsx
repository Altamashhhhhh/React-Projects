import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useReducer } from 'react'

const App = () => {

  const initValue = {
    count: 0
  }
  function reducer(state, { type }) {
    switch (type) {
      case "INCREMENT":
        return { count: state.count + 1 }
      case "DECREMENT":
        return { count: state.count - 1 }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initValue)

  return (
    <Flex w='100%' p='30px' textAlign='center' h='100vh' justify='center' align='center' >
      <Flex direction='column' justify='space-around' w='50%' h='50%' p='20px' m='0 auto'  boxShadow='1px 2px 7px darkgrey' borderRadius='20px'>
        <Heading>
          USEREDUCER COUNTER
        </Heading>

        <Flex w='80%' m='50px auto' justify='space-around'>
          <Button variant='solid' colorScheme='red' onClick={() => dispatch({ type: "DECREMENT" })}>DEC</Button>
          <Heading >{state.count}</Heading>
          <Button variant='solid' colorScheme='blue' onClick={() => dispatch({ type: "INCREMENT" })}>INC</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
