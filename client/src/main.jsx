import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import RootLayout from './layouts/rootlayout/RootLayout.jsx'
import HomePage from './routes/homepage/HomePage.jsx'
import DashboardLayout from './layouts/dashboardlayout/DashboardLayout.jsx'
import DashboardPage from './routes/dashboardpage/DashboardPage.jsx'
import ChatPage from './routes/chatpage/Chatpage.jsx'
import SignInPage from './routes/signinpage/SignInPage.jsx'
import SignUpPage from './routes/signuppage/SignUpPage.jsx'


const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children:[
      {
        element:<HomePage/>,
        path:'/',
      },
      {
        element:<DashboardLayout/>,
        children:[
          {
            element:<DashboardPage/>,
            path:'/dashboard',
          },
          {
            element:<ChatPage/>,
            path:'/dashboard/chats/:id'
          },
        ]
      },
      {
        element:<SignInPage/>,
        path:'/sign-in/*'
      },
      {
        element:<SignUpPage/>,
        path:'/sign-up/*'
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
