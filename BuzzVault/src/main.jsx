import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './routes/layout/RootLayout';
import OnBoarding from './routes/onBoarding';
<<<<<<< HEAD
import CapsuleCollectionApp from './routes/CapsuleCollection/CapsuleCollectionApp';
import ChatApp from './routes/Chat/ChatApp';

const router = createBrowserRouter([
  {
    element: <ChatApp />,
    path: "/"
=======
import CountDown from './routes/countDown/CountDown';

const router = createBrowserRouter([
  {
    element: <CountDown />,
    path:"/"
>>>>>>> 9fbc312fbcc7ee54676acdfce29fdad121581e8f
    // children: [
    //   {
    //     path: "/",
    //     element: <OnBoarding />
    //   }
    // ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
