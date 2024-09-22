import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo, markComplete, updateTitle } from "../redux/action"
import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react"
const Todo = () => {
  const dispatch = useDispatch()
  const { title, todos } = useSelector(state => state)
  return (
    <Box  w='60%' p='30px' m='30px auto' boxShadow='1px 2px 10px royalblue'>
      <Heading m='20px auto' textAlign='center'>TODO REDUX</Heading>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo())
      }}>
        <Flex w='100%' justify='space-between' align='center' p='20px'>
          <Input w='70%' m='30px auto' border='2px solid ' borderColor='blue.500' type="text" value={title} onChange={(e) => dispatch(updateTitle(e.target.value))} placeholder="ADD TODO" />
          <Button display='block' colorScheme='blue' >ADD TODO</Button></Flex>
      </form>


      {todos.map((todo, index) => (
        <Flex textDecor={todo.status && 'line-through'} w='80%' bgColor={todo.status ? "gray.200" : 'blue.50'} p='20px' m='30px auto' justify='space-between'   key={index}  >
          <Heading textTransform='capitalize' size='md'>{todo.title}  </Heading>
          <Flex w='40%' justify='space-between'>
            <Button colorScheme="red" onClick={() => dispatch(deleteTodo(todo.id))}   >DELETE</Button>
            <Button colorScheme="green" onClick={() => dispatch(markComplete(todo.id))} isDisabled={todo.status} > MARK COMPLETE</Button>
          </Flex>
        </Flex>))}


    </Box>
  )
}

export default Todo
