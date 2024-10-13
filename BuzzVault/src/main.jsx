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

const router = createBrowserRouter([
  {
    element: <CapsuleCollectionApp />,
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
