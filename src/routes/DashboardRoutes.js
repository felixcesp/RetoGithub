import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AddEdit from '../components/AddEdit'
import NavBar from '../components/home/NavBar'
import NavbarUser from '../components/home/NavbarUser'
import ListEdit from '../components/ListEdit'
import Repos from '../components/Repos'



const DashboardRoutes = () => {
  return (
    <>
    <Routes>  
   
        <Route path="/editar3" element={<AddEdit />} /> 
        <Route path="/editar" element={<ListEdit />} />
        <Route path="/repos" element={<Repos/>} />
        <Route path="/nav" element={<NavBar/>} />
        <Route path="/nav2" element={<NavbarUser/>} />
        <Route path="*" element={<Navigate to="/editar3"/>} />
  
    </Routes>
    </>
  );
};

export default DashboardRoutes;