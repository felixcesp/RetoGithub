

import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

import Landing from '../components/Landing';


import Login from '../components/Login';
import PhoneRegister from '../components/PhoneRegister';
import ShortRegister from '../components/ShortRegister';
import Repos from '../components/Repos';
import { useSelector } from 'react-redux';
import { PrivatePath, PublicPath } from '../components/home/isLogged';
import ListEdit from '../components/ListEdit';

import AddEdit from '../components/AddEdit';



export default function AppRoutes() {
 
  const logged= useSelector(state=>state.login.isLogged);
//<Route path='/saveuser' element={<RegisterSave/>}/>

  return (
    <div>
    <BrowserRouter>
       <Routes>
       <Route path='/editar' element={<ListEdit/>}/>
        <Route path='/editar3' element={<AddEdit/>}/>
        <Route path='/repos' element={<Repos/>}/>

       
        <Route path='/' element={<PublicPath auth={logged}><Landing/></PublicPath>}/>
        <Route path='/land' element={<PublicPath auth={logged}><Landing/></PublicPath>}/>
        <Route path='/phone' element={<PublicPath auth={logged}><PhoneRegister/></PublicPath>}/>
        <Route path='/pag1' element={<PublicPath auth={logged}><Login/></PublicPath>}/>
        <Route path='/register' element={<PublicPath auth={logged}><ShortRegister/></PublicPath>}/>


        <Route path='/editar3' element={<PrivatePath auth={logged}><AddEdit/></PrivatePath>}/>
        <Route path='/editar' element={<PrivatePath auth={logged}><ListEdit/></PrivatePath>}/>
        <Route path='/repos' element={<PrivatePath auth={logged}><Repos/></PrivatePath>}/>
        
        <Route path='*' element={<Navigate to="/"/>}/>

        

       </Routes>
    </BrowserRouter>
    </div>
  )
}
