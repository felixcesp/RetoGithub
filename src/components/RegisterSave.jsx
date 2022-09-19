
import { useFormik } from 'formik';
import { useDispatch, useSelector} from 'react-redux';
import {Firstdiv5, FormAllH, FormIn6, Frase6,IconGit5, LabeName6, LettersR22, RegisterButton6, RegisterButton7, Seconddiv6, TitleMain6 } from "../styled/StyledComponents";

import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { addUser, editUserData } from '../redux/actions/userSave';




const RegisterSave = ({ edit }) => {
    const navigation=useNavigate();
   const usuarioName= useSelector(state => state.login);
   const saveUser = useSelector(state => state.saveUser);
   const [infoGit, setInfoGit] = useState()
   const dispatch = useDispatch();

  

   const addBtn = useRef();
   const editBtn = useRef();
   console.log(addBtn)
   console.log(editBtn)


   useEffect(() => {
    const datoCambiar = saveUser.find( (datos) => datos.email === edit)
    setInfoGit(datoCambiar);
    if (edit){
        addBtn.current.setAttribute('disabled', 'true');
       // editBtn.current.setAttribute('enable','true');
    }else{
        //addBtn.current.setAttribute('disabled','true');
        editBtn.current.setAttribute('disabled','true');   
    } 
   },[edit, saveUser, addBtn, editBtn]);
  
    
  //  const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name:'',
            email:'',
            pass:'',
            phone:'',
            gituser:'',
            idcard:'',
            date:'',
        },
        onSubmit: ( data ) => {
            if (edit){
                dispatch(editUserData(data, edit))
              //  console.log(edit)
              //dispatch(addUserSync(data, edit))
           
                navigation('/verinfo')
                
            }
            else{
           dispatch(addUser(data, navigation))
           //dispatch(addUserSync(data, edit))
           navigation('/verinfo')
        }
        },
    
    })



    return (
       <>
                
        <Firstdiv5>
    
        <IconGit5 src="https://res.cloudinary.com/felixces/image/upload/v1661614263/Retogithub/icono2_ubwqaw.png" alt="" />
        <Frase6>Your information closes Github to you</Frase6>
        <Seconddiv6>
        <TitleMain6>{usuarioName.nombre}&nbsp;&nbsp;information</TitleMain6>
        <FormAllH onSubmit={formik.handleSubmit} >
            
          
            
                <LabeName6>Name and last name</LabeName6>
                <FormIn6 required type="text" name="name" onChange={formik.handleChange}  defaultValue={infoGit?.name}  />
            
            
                <LabeName6>Email address</LabeName6>
                <FormIn6 required type="email" placeholder="name@proveedor" name="email" onChange={formik.handleChange} defaultValue={infoGit?.email} />
          
                <LabeName6>Password</LabeName6>
                <FormIn6 required type="password" name="pass" onChange={formik.handleChange} defaultValue={infoGit?.pass}/>
            
                <LabeName6>Phone</LabeName6>
                <FormIn6 required type="tel" name="phone"  onChange={formik.handleChange} defaultValue={infoGit?.phone}/> 
           
                <LabeName6>Github user</LabeName6>
                <FormIn6 required type="text"  placeholder="@examplename"  name="gituser"  onChange={formik.handleChange} defaultValue={infoGit?.gituser}  />
                <LabeName6>Id card</LabeName6>
                <FormIn6  type="number" name="idcard"  onChange={formik.handleChange} defaultValue={infoGit?.idcard}  />
                <LabeName6>birthday date</LabeName6>
                <FormIn6 required type="date" name="date"  onChange={formik.handleChange} defaultValue={infoGit?.date}  />

            
            <RegisterButton6 type="submit"   ref={addBtn}  >
              <LettersR22 >Save</LettersR22> 
                </RegisterButton6>
                <RegisterButton7 type="submit"  ref={editBtn}>
              <LettersR22  >Save edit</LettersR22> 
                </RegisterButton7>







        </FormAllH>
        </Seconddiv6>
 
            
    </Firstdiv5>
    </>
    );
  

};

export default RegisterSave;