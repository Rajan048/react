import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center py-4 px-8 justify-between bg-cyan-600'>
      <h2 className='text-xl font-bold'>Wanderlust</h2>
      <div className='flex gap-8'>
        <Link className='text-lg font-bold' to='/'>Home</Link>
        <Link className='text-lg font-bold' to='/product'>Product</Link>
        <Link className='text-lg font-bold' to='/courses'>Course</Link>
        <Link className='text-lg font-bold' to='/about'>About</Link>
        <Link className='text-lg font-bold' to='/contact'>Contact</Link>
        

      </div>
    </div>
  )
}

export default Navbar
