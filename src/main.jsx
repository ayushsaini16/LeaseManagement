import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateRequest from './Components/CreateRequest.jsx';
import Body from "./Components/Body.jsx"

const root = createRoot(document.getElementById('root'));


const approuter = createBrowserRouter([
  {
    path: '/',
    Component : App,
    children: [
      { index: true, Component: Body
      },
    
    ]
  } 
  
])


root.render(<RouterProvider router = {approuter}/>)

