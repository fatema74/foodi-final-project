import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../componentes/Navber';
import '../App.css';
import Footer from '../componentes/Footer';
import { AuthContext } from '../contexts/AuthProvider';
import LoadingSpinner from '../componentes/LoadingSpinner';

const Main = () => {

  const {loding} = useContext(AuthContext);
  if(loding){
    return <p>
      ...........
    </p>
  }


  return (
    <div>
      <Navber></Navber>
        <div className='min-h-screen'>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default Main;