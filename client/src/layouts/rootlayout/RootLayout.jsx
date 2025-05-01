import React from 'react'
import {Outlet,Link} from 'react-router-dom'
import "./RootLayout.css"
import ReactDOM from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


const RootLyout = () => {

  // Import your Publishable Key
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className='RootLayout'>
        <header>
          <Link to="/" className='logo'>
            <img src="/logo-h.png" alt="Talk Ai" />
          </Link>
          <div className='user'>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
      </div>
      <main>
        <Outlet/>
      </main>
    </ClerkProvider>

  )
}

export default RootLyout
