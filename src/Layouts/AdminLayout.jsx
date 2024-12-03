import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Footer';

const AdminLayout = () => {
  return (
    <>
        <div className='d_container bg-slate-400 fixed top-0 left-0 w-full z-50'>
        <div className='py-4 px-6 flex justify-between items-center'>
            <NavLink to={"/"} className='text-2xl font-bold text-blue-500'>Dshop</NavLink>
            <div className='flex gap-4'>
                <NavLink to={"roles"} >Role</NavLink>
                <NavLink to={"permissions"} >Permission</NavLink>
            </div>
        </div>
        </div>
        <Outlet />
        <Footer />
    </>
  )
}

export default AdminLayout