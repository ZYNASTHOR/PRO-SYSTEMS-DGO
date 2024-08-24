import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ITServices from './pages/ITServices/ITServices.jsx'
import Root from './Root.jsx'
import PSContact from './pages/PSContact/PSContact.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1> You must construct additional pylons </h1>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/services",
        element: <ITServices />,
      },
      {
        path: "/Contact",
        element: <PSContact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
