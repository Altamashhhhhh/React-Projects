import { ChakraProvider } from "@chakra-ui/react"
import Cards from "../Cards"
import "./App.css"

const App = () => {
  return (
    <div className="container">
      <ChakraProvider>
        <Cards />
      </ChakraProvider>
    </div>
  )
}

export default App
