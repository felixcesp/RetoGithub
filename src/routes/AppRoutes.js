import React, { useState } from 'react'
import  Table  from '../components/home/Table';
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import BigForm from '../components/home/BigForm';
import Landing from '../components/Landing';

import Login from '../components/Login';
import PhoneRegister from '../components/PhoneRegister';
import Register from '../components/Register';
import RegisterSave from '../components/RegisterSave';
import ShortRegister from '../components/ShortRegister';
import Repos from '../components/Repos';


export default function AppRoutes() {
  const [edit, setEdit] = useState()
  return (
    <div>
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/land' element={<Landing/>}/>
        <Route path='/phone' element={<PhoneRegister/>}/>
        <Route path='/pag1' element={<Login/>}/>
        <Route path='/register' element={<ShortRegister/>}/>
        <Route path='/saveuser' element={< RegisterSave edit={ edit }/>}/>
        <Route path='/verinfo' element={< Table setEdit={ setEdit }/>}/>
        <Route path='/regisformik' element={<BigForm/>}/>
        <Route path='/register2' element={<Register/>}/>
        <Route path='/repos' element={<Repos/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
       </Routes>
    </BrowserRouter>
    </div>
  )
}
