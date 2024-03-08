import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';

// Icons
import { IoDocumentText } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

const NavBar = () => {
  return (
    <header className='navbar'>
        <Link to="/">
          <p>
            <span className='logo'>
              <IoDocumentText className='icon-title'/>Employer|
            </span>
            Docs
          </p>
        </Link>
        <span>
          <FaRegCircleUser className='icon-title'/>User
        </span>
    </header>
  )
}

export default NavBar