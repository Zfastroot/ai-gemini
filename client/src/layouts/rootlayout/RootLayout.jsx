import React from 'react'
import {Outlet,Link} from 'react-router-dom'
import "./RootLayout.css"

const RootLyout = () => {
  return (
    <>
    <div className='RootLayout'>
      <header>
        <Link to="/" className='logo'>
          <img src="/logo-h.png" alt="Talk Ai" />
        </Link>
        <div className='user'>
          User
        </div>
      </header>
    </div>
    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default RootLyout