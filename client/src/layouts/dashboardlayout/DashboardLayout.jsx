import React from 'react'
import {Outlet,Link} from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <>
    <div>DashboardLayout</div>
    <div>
      <Outlet/>
    </div>
    </>
  )
}

export default DashboardLayout