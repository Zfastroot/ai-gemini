import React from 'react'
import {Outlet,Link} from 'react-router-dom'

const RootLyout = () => {
  return (
    <>
    <div>RootLyout</div>
    <div>
      <Outlet/>
    </div>
    </>
  )
}

export default RootLyout