import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './routes/layout/RootLayout';
import OnBoarding from './routes/onBoarding';
import CapsuleCollectionApp from './routes/CapsuleCollection/CapsuleCollectionApp';
import ChatApp from './routes/Chat/ChatApp';

const router = createBrowserRouter([
  {
    element: <ChatApp />,
    path: "/"
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
