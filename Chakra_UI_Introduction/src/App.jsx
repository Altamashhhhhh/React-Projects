import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import PersonalInfo from '../PersonalInfo'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/info" element={<PersonalInfo/>} />
    </Routes>
  )
}

export default App
