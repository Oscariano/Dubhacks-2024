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

const router = createBrowserRouter([
  {
    element: <Login />,
    children: [
      {
        path: "/",
        element: <></>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
