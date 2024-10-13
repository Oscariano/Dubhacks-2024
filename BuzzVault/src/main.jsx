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
import SignUp from './routes/SignUp/SignUp';
import DisplayCapsules from '../Login/DisplayCapsules';


const router = createBrowserRouter([
  {
    element: <OnBoarding />,
    path: "/"
  },
  {
    element: <SignUp />,
    path: "/sign-up"
  },
  {
    element: <Login />,
    path: "/login"
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
    element: <DisplayCapsules />,
    path: "/display-capsules"
  },
  {
    element: <CreateCapsule />,
    path: "/create-capsule"
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
