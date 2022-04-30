
import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar' style={{background:'transparent'}}>
        <div className='logo'>
            <header><h1>SH Restaurant</h1></header>
        </div>

        <ul className='nav-links'>
            <li> <Link to='/' style={{textDecoration:'none', color:'brown'}}> Home </Link> </li>
            <li> <Link to='/About' style={{textDecoration:'none', color:'brown'}}> About </Link> </li>
            <li> <Link to='/Products' style={{textDecoration:'none', color:'brown'}}> Products </Link> </li>
            <li> <Link to='/Contact' style={{textDecoration:'none', color:'brown'}}> Contact </Link> </li>
        </ul>

        
    </div>
  )
}

export default Navbar