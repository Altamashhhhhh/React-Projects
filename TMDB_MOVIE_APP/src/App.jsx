import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Movies from "./component/Movies"
import Signup from "./component/Signup"
import Login from "./component/Login"
import Wishlist from "./component/Wishlist"
import { Toaster } from "./components/ui/toaster"
const App = () => {
  return (
    <>
    <Navbar />
    <Toaster />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
    </>
  )
}

export default App
