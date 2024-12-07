import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Menu } from 'lucide-react'

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div className='fixed inset-0 bg-black/50 lg:hidden z-40' 
             onClick={() => setIsSidebarOpen(false)} />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 
        transition-transform duration-300 lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className='lg:ml-64 min-h-screen'>
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className='p-6'>
          <div className='max-w-7xl mx-auto'>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
