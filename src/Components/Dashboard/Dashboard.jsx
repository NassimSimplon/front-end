import React from 'react'
import Eduction from './Eduction/Eduction'
import Navbar from './Navbar/Navbar'
 
const Dashboard = () => {
  const isAuthenticated = localStorage.getItem('token');
  if(!isAuthenticated){
    window.location.pathname = '/log'
  }
  return (
    <div>  
        <Navbar />
     <Eduction/>
    </div>
  )
}

export default Dashboard