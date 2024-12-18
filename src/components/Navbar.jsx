import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<div className="navbar">

  
      <li><Link to={'/'} >Home </Link></li>
      <li><Link to={'/Profile/hello'} >Profile</Link> </li>
      
      </div>
    </div>
  )
}

export default Navbar
