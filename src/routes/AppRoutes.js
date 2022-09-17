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
import { useSelector } from 'react-redux';
import { PrivatePath, PublicPath } from '../components/home/isLogged';


export default function AppRoutes() {
  const [edit, setEdit] = useState()
  const logged= useSelector(state=>state.login.isLogged);
//<Route path='/saveuser' element={<RegisterSave/>}/>

  return (
    <div>
    <BrowserRouter>
       <Routes>
       
        <Route path='/' element={<PublicPath auth={logged}><Landing/></PublicPath>}/>
        <Route path='/land' element={<PublicPath auth={logged}><Landing/></PublicPath>}/>
        <Route path='/phone' element={<PublicPath auth={logged}><PhoneRegister/></PublicPath>}/>
        <Route path='/pag1' element={<PublicPath auth={logged}><Login/></PublicPath>}/>
        <Route path='/register' element={<PublicPath auth={logged}><ShortRegister/></PublicPath>}/>


        <Route path='/saveuser' element={<PrivatePath auth={logged}><RegisterSave edit={ edit }/></PrivatePath>}/>
        <Route path='/verinfo' element={<PrivatePath auth={logged}>< Table setEdit={ setEdit }/></PrivatePath>}/>
        <Route path='/regisformik' element={<PrivatePath auth={logged}><BigForm/></PrivatePath>}/>
        <Route path='/register2' element={<PrivatePath auth={logged}><Register/></PrivatePath>}/>
        <Route path='/repos' element={<PrivatePath auth={logged}><Repos/></PrivatePath>}/>
        
        <Route path='*' element={<Navigate to="/"/>}/>
       </Routes>
    </BrowserRouter>
    </div>
  )
}
