import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../component/Home"
import About from "../component/About"
import Contact from "../component/Contact"
import Products from "../component/Products"
import Login from "../component/Login"
import NotFound from "../component/NotFound"
import { GlobalProvider } from '../context/GlobalContext'
const App = () => {

  return (
    <GlobalProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </GlobalProvider>

  )
}

export default App
