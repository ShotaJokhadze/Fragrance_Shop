'use client'

import Link from "next/link";
import { useState } from "react";
import { CgProfile, } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";


export default function Header() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav id='topnav' className='bg-darkGray  w-full z-50 fixed text-light dark:bg-light dark:text-darkGray'>
    <div className="navbar-container relative flex w-4/5 max-w-screen-xl justify-between mx-auto">
      <div className="logo p-3">
          <Link className='w-full h-full block text-3xl hover:scale-110 transition-all' href="/">
            Arôme
          </Link>
      </div>
      <div className="navigation">
        <ul className="navigation-menu flex gap-10 h-full">
          <li className='relative flex items-center h-full hover-underline-animation'>
            <Link
              className='block font-medium leading-6' href="/products">
              Fragrances
            </Link>
          </li>
          <li className='relative flex items-center h-full hover-underline-animation'>
            <Link
              className='block font-medium leading-6'
              href="/about">Blogs</Link>
          </li>
          <li className='relative flex items-center h-full hover-underline-animation'>
            <Link
              className='block font-medium leading-6'
              href="/contact">Contact</Link>
          </li>
          <li className='relative flex items-center h-full hover-underline-animation'>
            <Link
              className='block font-medium leading-6'
              href="/assignment3">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="p-2 flex items-center relative cursor-pointer group"
          onMouseEnter={() => setProfileOpen(true)}
          onMouseLeave={() => setProfileOpen(false)}>
        <CgProfile className="text-2xl"/>
        <ul className={`absolute top-full right-0 bg-light text-nowrap text-darkGray rounded-md min-w-40 py-2 transition-opacity duration-200 ${profileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <li className="flex items-center gap-1 cursor-pointer p-2 hover:translate-x-1 hover:underline transition-all"><CiSettings className="text-xl"/>Profile</li>
          <li className="flex items-center gap-1 cursor-pointer p-2 hover:translate-x-1 hover:underline transition-all"><FaShoppingBasket className="text-xl"/>My Orders</li>
          <div className="border-t-[0.5px] border-darkGray mt-2"></div>
          <li className="flex items-center gap-1 cursor-pointer p-2 hover:translate-x-1 hover:underline transition-all"><GoSignOut className="text-xl"/>
          Sign Out</li>
        </ul>
      </div>  
    </div>
      
    </nav>
  )
}
