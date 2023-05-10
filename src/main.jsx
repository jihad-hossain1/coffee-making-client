import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './AddCoffee.jsx';
import UpdateCoffee from './UpdateCoffee.jsx';
// import "./index.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
    path: 'addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: 'updateCoffee',
    element: <UpdateCoffee></UpdateCoffee>
  }
    ]
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    
  </RouterProvider>,
)
