import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AddEdit from '../components/AddEdit'
import Home from '../components/Home'
import Pagefeet from '../components/home/Pagefeet.JS'
import ListEdit from '../components/ListEdit'
import Repos from '../components/Repos'
import UserAllGitEsta from '../components/UserAllGitEsta'



const DashboardRoutes = () => {
  return (
    <>
    <Routes>  
   
        <Route path="/editar3" element={<AddEdit />} /> 
        <Route path="/editar" element={<ListEdit />} />
        <Route path="/repos" element={<Repos/>} />
        <Route path="/all" element={<UserAllGitEsta/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/foot" element={<Pagefeet/>} />
        <Route path="*" element={<Navigate to="/editar3"/>} />
  
    </Routes>
    </>
  );
};

export default DashboardRoutes;