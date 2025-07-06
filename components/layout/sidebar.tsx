import React from 'react'
import { CiHome } from 'react-icons/ci'
import { FaDna } from 'react-icons/fa'
import { FaHeartPulse } from 'react-icons/fa6'
import { FaBox } from 'react-icons/fa6'
import { FaUserPlus } from 'react-icons/fa'
import { FiSidebar } from 'react-icons/fi'
import { FaPlus } from 'react-icons/fa'
import { IoIosSettings } from 'react-icons/io'
import { MdOutlineContactSupport } from 'react-icons/md'
import { CiLogout } from 'react-icons/ci'
import { MdOutlinePets } from 'react-icons/md'
import Image from 'next/image'
const data = [
  {
    title: 'Overview',
    icon: <CiHome className='text-white' />
  },
  {
    title: 'DNA',
    icon: <FaDna className='text-white' />
  },
  {
    title: 'Care',
    icon: <FaHeartPulse className='text-white' />
  },
  {
    title: 'Orders',
    icon: <FaBox className='text-white' />
  },
  {
    title: 'Referrals',
    icon: <CiLogout className='text-white' />
  }
]
const dataArray = [
  {
    title: 'Settings',
    icon: <IoIosSettings className='text-white' />
  },
  {
    title: 'Support & Help',
    icon: <MdOutlineContactSupport className='text-white' />
  },
  {
    title: 'Logout',
    icon: <FaHeartPulse className='text-white' />
  }
]

interface SidebarProp {
  isOpen: boolean
  onClose: () => void
}
function Sidebar ({ isOpen, onClose }: SidebarProp) {
  return (
    <div
      className={`fixed top-0 left-0 h-full  bg-black text-white w-[16rem] p-4 z-50
          sm:relative sm:translate-x-0 sm:block
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}
    >
      <div className='flex items-center mb-9 justify-between'>
        <Image
          src='/pet-cloning-cat-dog-clone-260nw-2526468201.webp'
          alt='My Image'
          width={30}
          height={30}
          className='object-cover w-20 h-10 rounded-md'
        />
        <span onClick={onClose}>
          <FiSidebar className='text-1xl text-white' />
        </span>
      </div>

      <div className=''>
        <h1 className='text-gray-300 mb-2'>Your Pet</h1>
        <div className='flex text-[10px] gap-7 space-x-3'>
          <div className='flex flex-col items-center'>
            <Image
              src='/pexels-photo-1108099.jpeg'
              alt='My Image'
              width={30}
              height={30}
              className='object-cover w-5 h-5 rounded-full'
            />
            <p className='text-white'>Maxi</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src='/pexels-photo-1108099.jpeg'
              alt='My Image'
              width={30}
              height={30}
              className='object-cover w-5 h-5 rounded-full'
            />
            <p className='text-white'>Fiona</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-white flex items-center justify-center text-black rounded-[100%] m-auto h-4 w-4'>
              <FaPlus className='text-black' />
            </div>
            <p className='mt-0 text-white'>Add new</p>
          </div>
        </div>
      </div>
      <div>
        <div className=' space-y-6 mt-5 pb-20 border-b-2'>
          <p className='text-gray-300  '>Main Menu</p>
          {data.map(data => {
            return (
              <div className='flex items-center space-x-4 '>
                {data.icon}
                <span className='text-white'>{data.title}</span>
              </div>
            )
          })}
        </div>

        <div className=''>
          <h1 className='text-gray-300  mt-5'>Preference</h1>
          <div className=' space-y-6 mt-5 mb-20'>
            {dataArray.map(data => {
              return (
                <div className='flex items-center space-x-4 '>
                  {data.icon}
                  <span className='text-white'>{data.title}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div>
        <div className='text-white bg-gray-800 rounded-xl flex justify-center flex-col text-center space-x-2  p-5'>
          <div className='justify-center flex'>
            <div className=' mb-2 p-4 bg-black text-white rounded-2xl '>
              <MdOutlinePets className='text-white' />
            </div>
          </div>
          <div>
            <h2 className='text-white font-bold'>
              Meet Buddy. Your Pet Care Icon Guide
            </h2>
            <p className='text-white text-[10px]'>
              I have question about your pet's health, behaviour or daily
              routine
            </p>
          </div>
          <div className='mt-2'>
            <button className='px-1 rounded-[8px] py-2 bg-white text-black'>
              Ask Buddy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
