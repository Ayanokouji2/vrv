import { Menu, Bell, Settings, UserCircle } from 'lucide-react'
import React from 'react'

const Header = ({ onMenuClick }) => {
  return (
    <header className='bg-white shadow-sm border-b'>
      <div className='flex items-center justify-between px-6 py-4'>
        <div className='flex items-center gap-4'>
          <button onClick={onMenuClick} className='lg:hidden p-2 hover:bg-gray-100 rounded-lg'>
            <Menu size={20} />
          </button>
          <h1 className='text-xl font-semibold text-gray-800'>Dashboard</h1>
        </div>
        
        <div className='flex items-center gap-4'>
          <button className='p-2 hover:bg-gray-100 rounded-full'>
            <Bell size={20} className='text-gray-600' />
          </button>
          <button className='p-2 hover:bg-gray-100 rounded-full'>
            <Settings size={20} className='text-gray-600' />
          </button>
          <button className='p-2 hover:bg-gray-100 rounded-full'>
            <UserCircle size={20} className='text-gray-600' />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
