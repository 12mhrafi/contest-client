import React from 'react'
import DashBoardHeader from './DashBoardHeader'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Dashboard = () => {
  return (
    <div className='flex '>
        <div className='flex-2 min-h-screen'>
        <DashBoardHeader></DashBoardHeader>
        </div>
       <div className='flex-grow'>
       <Outlet></Outlet>
       </div>
        <Toaster></Toaster>
    </div>
  )
}

export default Dashboard