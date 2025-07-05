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
    <div className='w-[100%] bg-white p-6 flex justify-between sm:justify-end items-center'>
      <button onClick={onToggle} className='sm:hidden'>
        <FiMenu className='text-2xl text-black' />
      </button>
      <nav className='flex items-center justify-center '>
        <ul className='flex gap-5 items-center justify-end'>
          <li>
            <button className='text-gray-700 hover:text-gray-900 '>
              <PiDog className='text-2xl text-black' />
            </button>
          </li>
          <li>
            <button className='text-gray-700 hover:text-gray-900 '>
              <FaBell className='text-2xl text-black' />
            </button>
          </li>
          <li>
            <button className='text-gray-700 hover:text-gray-900 '>
              <CgProfile className='text-2xl text-black' />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
