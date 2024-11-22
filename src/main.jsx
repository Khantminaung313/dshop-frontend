import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import PageNotFound from './Pages/PageNotFound';
import { UserRoutes } from './routes/userRoutes';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {UserRoutes.map(({ path, element, children }) => (
      <Route key={path} path={path} element={element}>
        {children?.map(({ path: childPath, element: childElement }) => (
          <Route key={childPath} path={childPath} element={childElement} />
        ))}
      </Route>
    ))}
    <Route path='*' element={<PageNotFound />} /> 
    </>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
