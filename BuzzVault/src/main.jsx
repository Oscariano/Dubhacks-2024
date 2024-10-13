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
import SignUp from './routes/SignUp/SignUp';
import CapsuleCreation from '../Login/CreateCapsule';


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
    element: <CreateCapsule />,
    path: "/capsulecreation"
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
