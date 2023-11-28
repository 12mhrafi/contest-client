import React, { useContext, useState } from 'react'
import useAuth from "../hooks/useAuth"
import {Navigate, useLocation} from "react-router-dom"

import { AuthContext } from '../Provider/AuthProvider';
const PrivateRoute = ({children}) => {  

    const location = useLocation();

    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <h2>Loading</h2>
    }
    if(user?.email){
        return children;
    }
    
  return <Navigate state={location?.pathname} to="/login"></Navigate>
}

export default PrivateRoute