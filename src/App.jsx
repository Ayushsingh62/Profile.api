import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
<Routes>

<Route  path='/' element={<Home/>}/>
<Route  path='/profile/:id' element={<Profile/>}/>





</Routes>

    </BrowserRouter>
  )
}

export default App
