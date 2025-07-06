'use client'
import React, { useState } from 'react'
import Sidebar from './sidebar'
import Navbar from './navbar'

function Layout ({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setOpen] = useState(false)
  const toggleSidebar = () => setOpen(prev => !prev)
  const closeSidebar = () => setOpen(false)
  return (
    <div className='flex h-screen'>
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <div className='min-w-[30%] flex-1 flex flex-col'>
        <Navbar onToggle={toggleSidebar} />
        <main className=' overflow-y-auto flex-1 p-4 bg-gray-50'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
