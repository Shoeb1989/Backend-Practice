import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './COMPO/ROOT/Root';
import Home from './COMPO/HOME/Home';
import Login from './COMPO/LOGIN/Login';
import Register from './COMPO/REG/Register';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:"/",
        element:<Home></Home>,
      }, 
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
