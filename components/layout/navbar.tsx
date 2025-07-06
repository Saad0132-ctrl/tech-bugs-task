import React from 'react'
import { PiDog } from 'react-icons/pi'
import { FaBell } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { FiMenu } from 'react-icons/fi'

interface AppbarProp {
  onToggle: () => void
}

function Navbar ({ onToggle }: AppbarProp) {
  return (
    <div className='w-[100%] bg-white bg-gradient-to-r from-purple-700 to-indigo-800 p-4 flex justify-between shadow-lg sm:justify-end items-center'>
      <button onClick={onToggle} className='sm:hidden'>
        <FiMenu className='text-2xl text-white hover:text-yellow-300' />
      </button>
      <nav className='flex items-center justify-center '>
        <ul className='flex gap-5 items-center justify-center'>
          <li>
            <PiDog className='text-2xl text-white hover:text-yellow-300' />
          </li>
          <li>
            <FaBell className='text-2xl text-white hover:text-yellow-300' />
          </li>
          <li>
            <CgProfile className='text-2xl text-white hover:text-yellow-300' />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
