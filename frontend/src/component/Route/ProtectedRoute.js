import React from "react";
import {  Navigate, Outlet, useLocation} from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, loading, user, isAdmin }) => {
    const location = useLocation();

    if(loading===false){
    if(isAuthenticated === false)
    {
        return <Navigate to={"/login"} state={{from: location}} replace/>;    
    }

    if(isAdmin === true && user.role !== "admin"){
      return <Navigate to={"/login"} state={{from: location}} replace/>;    
    }
  

  return <Outlet/>  
  }
};

export default ProtectedRoute;
