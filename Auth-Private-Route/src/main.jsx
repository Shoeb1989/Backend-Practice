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
import AuthProvider from './COMPO/PROVIDER/AuthProvider';
import Orders from './COMPO/Orders/Orders';
import PrivateRoute from './COMPO/PrivateRoute/PrivateRoute';
import Profile from './COMPO/Profile';
import { element } from 'prop-types';
import Dashboard from './COMPO/Dashboard';

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
      },

      {
        path:'/orders',
        element:<PrivateRoute> <Orders></Orders> </PrivateRoute>,
      },
      {
        path:'/profile',
        element: <PrivateRoute> <Profile></Profile>  </PrivateRoute>
      },

      {
        path:'/dashboard',
        element:<PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <AuthProvider>

    <RouterProvider router={router} />
    
    </AuthProvider>   

  </StrictMode>,
)
