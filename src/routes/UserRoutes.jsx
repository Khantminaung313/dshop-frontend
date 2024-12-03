import AdminLayout from '../Layouts/AdminLayout.jsx';
import BaseLayout from '../Layouts/BaseLayout.jsx';
import Dashboard from '../Pages/admin/Dashboard.jsx';
import Roles from '../Pages/admin/Roles.jsx';
import Permission from "../Pages/admin/Permission.jsx";
import About from '../Pages/users/About.jsx';
import Contact from '../Pages/users/Contact.jsx';
import Home from '../Pages/users/Home.jsx';

export const UserRoutes = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { path: '', element: <Home /> }, // Default path as Home
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: '', element: <Dashboard /> }, // Default path as Home
      { path: 'roles', element: <Roles /> },
      { path: 'permissions', element: <Permission /> },
    ],
  },
];
