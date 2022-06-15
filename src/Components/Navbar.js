import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
        <Link to='/addshop'>
        <h1>Add Shop</h1>
        </Link>
        <Link to='/'>
        <h1>Shop List</h1>
        </Link>
    </div>
  )
}

export default Navbar