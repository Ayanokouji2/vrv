
import { Link, useLocation } from 'react-router-dom'
import { navlinks } from '../../constants/data'

const Sidebar = () => {
    const { pathname } = useLocation()
    
    return (
        <div className='h-full flex flex-col'>
            <div className='p-6 border-b'>
                <h1 className='text-2xl font-bold text-gray-800'>VRV Security</h1>
            </div>
            
            <nav className='flex-1 p-4'>
                <div className='space-y-1'>
                    {navlinks.map((item) => (
                        <Link 
                            key={item.link}
                            to={`/${item.link}`}
                            className={`
                                flex items-center gap-3 px-4 py-3 rounded-lg
                                transition-all duration-200
                                ${pathname === `/${item.link}` 
                                    ? "bg-blue-50 text-blue-600" 
                                    : "text-gray-600 hover:bg-gray-50"}
                            `}
                        >
                            <item.icon size={20} />
                            <span className="font-medium">{item.title}</span>
                        </Link>
                    ))}
                </div>
            </nav>
            
            <div className='p-4 border-t'>
                <div className='bg-gray-50 p-4 rounded-lg'>
                    <p className='text-sm text-gray-600'>Logged in as</p>
                    <p className='font-medium'>Admin User</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
