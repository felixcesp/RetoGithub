import React from 'react'
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Landing from '../components/Landing';
import Login from '../components/Login';
import PhoneRegister from '../components/PhoneRegister';
import Register from '../components/Register';

export default function AppRoutes() {
  return (
    <div>
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/land' element={<Landing/>}/>
        <Route path='/phone' element={<PhoneRegister/>}/>
        <Route path='/pag1' element={<Login/>}/>
        <Route path='*' element={<Navigate to="/pag1"/>}/>
        <Route path='/register' element={<Register/>}/>
       </Routes>
    </BrowserRouter>
    </div>
  )
}
