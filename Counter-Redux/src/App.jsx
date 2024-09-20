import Count from '../components/Count'
import { increment, decrement } from '../redux/action'
import { useDispatch } from 'react-redux'
import {  Button, Flex, Heading } from '@chakra-ui/react'

const App = () => {
  const dispatch = useDispatch()
  return (
    <Flex w='100%' h='100vh' justify='center' align='center' direction='column'>
      <Heading m='30px auto'>COUNTER USING REDUX</Heading>
      <Flex w='40%' p='30px' boxShadow='1px 2px 8px blue' justify='space-around' align='center'>
        <Button onClick={() => dispatch(decrement())} colorScheme='blue'>DECREMENT</Button>
        <Heading><Count /></Heading>
        <Button onClick={() => dispatch(increment())} colorScheme='green' >INCREMENT</Button>

      </Flex >
    </Flex>
  )
}

export default App
