import React from 'react'
import UserHeader from './UserHeader'
import { Outlet } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <div className='flex'>
        <div className='flex-2 min-h-screen'>
            <UserHeader></UserHeader>
        </div>
        <div className='flex-grow'>
        <Outlet></Outlet>
        </div>
    </div>
  )
}

export default UserDashboard