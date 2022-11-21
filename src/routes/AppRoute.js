import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
//import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../components/Landing'
import LandingPage from '../components/LandingPage'
import Login from '../components/Login'
import PhoneRegister from '../components/PhoneRegister'
import ShortRegister from '../components/ShortRegister'
import DashboardRoutes from './DashboardRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

const AppRoute = () => {
    const [checking, setChecking]=useState(true)
    const [isLoggedIn, setIsLoggedIn]= useState(false);
   // let logPhonelast=useSelector(state => state.statePhone.phoneState)
    //console.log(logPhonelast);
    //console.log(isLoggedIn)
    //veryPHone();

    useEffect(() => {
        const auth =getAuth();
        onAuthStateChanged(auth, (user)=>{
           if(user?.uid /*|| logPhonelast*/){
               setIsLoggedIn(true)
           }else{
               setIsLoggedIn(false)
           }
     
          setChecking(false)
        });

     /* veryPHone=((logPhonelast)=>{
          if (logPhonelast) {
            console.log(logPhonelast);
            setIsLoggedIn(true)
           } else {
            setIsLoggedIn(false)
            console.log(logPhonelast);
           }   setChecking(false)
    //    })*/
        
   }, [setIsLoggedIn,setChecking, /*logPhonelast*/])
/*
   //    const veryPHone=((logPhonelast)=>{
        if (logPhonelast) {
          console.log(logPhonelast);
          setIsLoggedIn(true)
         } else {
          setIsLoggedIn(false)
          console.log(logPhonelast);
         }   setChecking(false)
  //   })*/


   if (checking){
    return (
        <h1>Espere....</h1>
    )
   }





  return (
    <div>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<PublicRoutes isAuth={isLoggedIn}><Landing/></PublicRoutes>} />
          <Route path="/landhome" element={<PublicRoutes isAuth={isLoggedIn}><LandingPage/></PublicRoutes>} />
          <Route path="/land" element={<PublicRoutes isAuth={isLoggedIn}><Landing/></PublicRoutes>} />
          <Route path="/phone" element={<PublicRoutes isAuth={isLoggedIn}><PhoneRegister/></PublicRoutes>} />
          <Route path="/pag1" element={<PublicRoutes isAuth={isLoggedIn}><Login/></PublicRoutes>} />
          <Route path="/register" element={<PublicRoutes isAuth={isLoggedIn}><ShortRegister/></PublicRoutes>} />


          <Route path="/*" element={<PrivateRoutes isAuth={isLoggedIn}><DashboardRoutes/></PrivateRoutes>} />
          </Routes>  
        </BrowserRouter>





    </div>
  )
}

export default AppRoute