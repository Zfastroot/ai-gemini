import React from 'react'
import "./DashboardLayout.css"
import {Outlet,Link} from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="DashboardLayout">
      <div className="menu">DashboardLayout</div>
      <div className="content">
          <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLayout