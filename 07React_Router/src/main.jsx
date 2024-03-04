import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
import Home  from './components/Home/Home'
// import About from './components/Aboutus/Aboutus'
import Layout from './Layout'
import { RouteProvider } from 'react-router-dom';


import {createBrowserRouter } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },{
        path:"about",
        element:<Layout/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouteProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
