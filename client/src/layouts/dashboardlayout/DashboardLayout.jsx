import React from 'react'
import "./DashboardLayout.css"
import {Outlet,useNavigate} from 'react-router-dom'
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";

const DashboardLayout = () => {

  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);
  if (!isLoaded) return "Loading...";


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