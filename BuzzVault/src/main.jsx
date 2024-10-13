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
import CountDown from './routes/countDown/CountDown'
import CapsuleCollectionApp from './routes/CapsuleCollection/CapsuleCollectionApp';
import AFrameScene from './routes/Aframe/AframeScene';


const router = createBrowserRouter([
  {
    element: <Login />,
    path: "/"
  },
  {
    element: <OnBoarding />,
    path: "/on-boarding"
  },
  {
    element: <CountDown />,
    path: "/countdown"
  },
  {
    element: <CapsuleCollectionApp />,
    path: "/capsulecollection"
  },
  {
    element: <AFrameScene />,
    path:"/aframe"
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
