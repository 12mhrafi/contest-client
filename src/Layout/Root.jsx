import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import  {Toaster}  from 'react-hot-toast';
const Root = () => {
  return (
    <div>
        <Header/>
        <Outlet></Outlet>
        <Toaster></Toaster>
    </div>
  )
}

export default Root