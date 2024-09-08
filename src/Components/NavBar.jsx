import { NavLink } from 'react-router-dom';
import React from 'react';
import '../App.css';
import logo from '../Assets/logo.jpg'
export default function NavBar() {
  return (
  <>
    <nav className='justify-between md:flex mb-1'>
      <div className="logo gap-2 md:flex">
         <img src={logo} alt="logo" className='hidden w-14 h-14 rounded-full md:flex'  />
         <h1 className='text-center font-bold tracking-wide text-blue-500 text-lg md:mt-3 '>ABRAHAM
           <span className='font-normal text-white'> OLATUNJI</span>
         </h1>
      </div>

      <ul className='flex gap-3 md:gap-5 mt-4 text-white md:mt-4 md:flex'>
        <NavLink to='/'>
         <li className='font-normal cursor-pointer  tracking-wide hover:text-blue-600'>HOME</li>
        </NavLink>
        <NavLink to='/contact'>
        <li className='font-normal cursor-pointer  tracking-wide hover:text-blue-600'>CONTACT</li>
        </NavLink>
        <NavLink to='/projects'>
                  <li className='font-normal cursor-pointer  tracking-wide hover:text-blue-600'>PROJECTS</li>
        </NavLink>
        <NavLink to='/blog'>
                  <li className='font-normal cursor-pointer  tracking-wide hover:text-blue-600'>BLOG</li>
        </NavLink>
        <NavLink to='/hobbies'>
                  <li className='font-normal cursor-pointer  tracking-wide hover:text-blue-600'>HOBBIES</li>
        </NavLink>
      </ul>
      
    </nav>
    {/* <hr className=' border-2 border-b-slat-500'/> */}
  </>
  )
}
