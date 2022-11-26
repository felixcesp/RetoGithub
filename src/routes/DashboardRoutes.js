import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AddEdit from '../components/AddEdit'
import AllEval from '../components/AllEval'
import AlluserAll from '../components/AlluserAll'
import CheckRepos from '../components/CheckRepos'
import Home from '../components/Home'


import ListEdit from '../components/ListEdit'
import Repos from '../components/Repos'
import TableEstatis from '../components/TableEstatis'
import UserAllGitEsta from '../components/UserAllGitEsta'
import YourUsers from '../components/YourUsers'



const DashboardRoutes = () => {
  return (
    <>
    <Routes>  
   
        <Route path="/editar3" element={<AddEdit />} /> 
        <Route path="/editar" element={<ListEdit />} />
        <Route path="/repos" element={<Repos/>} />
        <Route path="/all" element={<UserAllGitEsta/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/tus" element={<YourUsers/>}/>
        <Route path="/evals" element={<AllEval/>}/>
        <Route path="/allusers" element={<AlluserAll/>}/>
        <Route path="/antesrepo" element={<CheckRepos/>}/>
        <Route path="/tortas" element={<TableEstatis/>}/> 
        <Route path="*" element={<Navigate to="/home"/>} />
        
    </Routes>
    </>
  );
};

export default DashboardRoutes;