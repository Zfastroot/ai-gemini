import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import RootLyout from './layouts/rootlayout/RootLyout.jsx'
import HomePage from './routes/homepage/HomePage.jsx'
import DashboardLayout from './layouts/dashboardlayout/DashboardLayout.jsx'
import DashboardPage from './routes/dashboardpage/DashboardPage.jsx'
import ChatPage from './routes/chatpage/Chatpage.jsx'
import SignInPage from './routes/signinpage/SignInPage.jsx'
import signUpPage from './routes/signuppage/signUpPage.jsx'


const router = createBrowserRouter([
  {
    element: <RootLyout/>,
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
        path:'/signin/*'
      },
      {
        element:<signUpPage/>,
        path:'/signup/*'
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
