import BaseLayout from '../Layouts/BaseLayout.jsx';
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
];
