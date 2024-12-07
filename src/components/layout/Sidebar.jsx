// ... imports remain the same ...
import { Link, useLocation } from 'react-router-dom'
import { navlinks } from '../../constants/data'

const Sidebar = () => {
    const { pathname } = useLocation()
    
    return (
        <div className='col-span-3 h-full bg-slate-100/50 shadow-sm border-r-2'>
            <h4 className='text-center uppercase text-2xl text-slate-700 font-bold p-6 border-b-2'>
                Dashboard
            </h4>
            <div className='flex flex-col gap-2 text-sm p-6'>
                {navlinks.map((item) => (
                    <Link 
                        key={item.link}
                        to={`/${item.link}`}
                        className={`
                            flex items-center gap-3 px-6 py-3.5 rounded-xl transition-all duration-300
                            hover:bg-slate-100 hover:text-slate-900 hover:shadow-sm
                            ${pathname === `/${item.link}` 
                                ? "bg-slate-300 text-slate-900 shadow-sm" 
                                : "text-slate-600"}
                        `}
                    >
                        <item.icon className="text-xl" />
                        <span className="font-medium tracking-wide">{item.title}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
