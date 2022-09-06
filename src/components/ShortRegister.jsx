import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { registrarUserAsync } from '../redux/actions/actionUsuario'
import { BotonImg, ButLogin, Cambio2,Firstdiv2, FormAll2, FormIn2, Frase2, IconGit2, LabeName2, LettersR2, LoginConte, RegisterButton, RegisterButton3, Seconddiv2, TitleMain2 } from '../styled/StyledComponents'

const ShortRegister=() =>{

    const dispatch = useDispatch()
    const [formValue, handleInputChange, reset] = useForm({
     email: '',
     pass: '',
     nombre: '',
   
 })

 const {email, pass, nombre} = formValue
 const handleSubmit = (e) => {
     e.preventDefault()
     console.log(email, pass, nombre)
     dispatch(registrarUserAsync(email, pass, nombre))
     reset()
 }


 return (
     <Firstdiv2>
     <IconGit2 src="https://res.cloudinary.com/felixces/image/upload/v1661614263/Retogithub/icono2_ubwqaw.png" alt="" />
     <Frase2>Your registration make us better</Frase2>
     <Seconddiv2>
     <FormAll2 onSubmit={handleSubmit} >
         <TitleMain2>User register</TitleMain2>
         <hr />
         
             <LabeName2>Name and last name</LabeName2>
             <FormIn2 type="text" name="nombre" value={formValue.nombre} onChange={handleInputChange} />

             <LabeName2>Email address</LabeName2>
             <FormIn2 type="email" placeholder="name@example.com" name="email"  value={formValue.email} onChange={handleInputChange}/>
       
             <LabeName2>Password</LabeName2>
             <FormIn2 type="password" name="pass" value={formValue.pass} onChange={handleInputChange} />
         
         <RegisterButton type="submit"  >
           <LettersR2>Register</LettersR2> 
             </RegisterButton>
     </FormAll2>
     <RegisterButton3>
                  <Link to='/saveuser'><Cambio2>pasar form datos</Cambio2></Link>  
              </RegisterButton3>
     </Seconddiv2>
          <LoginConte>
             <ButLogin >
            <Link to="/pag1"><BotonImg  src="https://res.cloudinary.com/felixces/image/upload/v1661617127/Retogithub/login_zsoqxp.png" alt="" /></Link> 
             </ButLogin>
         </LoginConte>
                        
 </Firstdiv2>
 
 );
};


export default ShortRegister