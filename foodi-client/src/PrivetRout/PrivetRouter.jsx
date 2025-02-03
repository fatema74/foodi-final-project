import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import {Navigate, useLocation} from 'react-router-dom'
import LoadingSpinner from '../componentes/LoadingSpinner';


const PrivetRouter = ({children}) => {
    
    const {user, loding} = useContext(AuthContext);
    const location = useLocation();

    if(loding){
      return (
        <LoadingSpinner/>
      )
    }
    if(user){
      return children;
    }


  return (
    <Navigate to='/signup' state={{from: location}} replace></Navigate>
  );
};

export default PrivetRouter;