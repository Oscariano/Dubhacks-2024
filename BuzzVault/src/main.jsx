import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ChatApp from './routes/Chat/ChatApp';
import Login from '../Login/Login';
import CreateCapsule from '../Login/CreateCapsule';
import OnBoarding from './routes/OnBoarding'


const router = createBrowserRouter([
  {
    element: <Login />,
    path: "/"
  },
  {
    element: <OnBoarding />,
    path: "/on-boarding"
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
