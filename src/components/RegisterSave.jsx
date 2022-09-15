
import { useFormik } from 'formik';
import { useDispatch, useSelector} from 'react-redux';
import {Firstdiv5, FormAllH, FormIn6, Frase6,IconGit5, LabeName6, LettersR22, RegisterButton6, Seconddiv6, TitleMain6 } from "../styled/StyledComponents";
import { addUser } from "../redux/actions/userSave";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';




const RegisterSave = ({ edit }) => {
    const navigation=useNavigate();

   
   const usuarioName= useSelector(state => state.login);
   const saveUser = useSelector(state => state.saveUser);
   const [infoGit, setInfoGit] = useState()
   
   useEffect(() => {
    const datoCambiar = saveUser.find( (datos) => datos.email === edit)
    setInfoGit(datoCambiar)
   },[edit]);
  
    
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: infoGit ? infoGit.name : '',
            email: infoGit ? infoGit.email : '',
            pass: infoGit ? infoGit.pass : '',
            phone: infoGit ? infoGit.phone : '',
            gituser: infoGit ? infoGit.gituser : '',
            idcard:infoGit ? infoGit.idcard : '',
            date:infoGit ? infoGit.date : '',
        },
        onSubmit: ( data ) => {
            dispatch(addUser(data, navigation))
         
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
                <FormIn6 type="text" name="name" onChange={formik.handleChange} value={formik.values.name}  />
            
            
                <LabeName6>Email address</LabeName6>
                <FormIn6 type="email" placeholder="name@example.com" name="email" onChange={formik.handleChange} value={formik.values.email}/>
          
                <LabeName6>Password</LabeName6>
                <FormIn6 type="password" name="pass" onChange={formik.handleChange} value={formik.values.pass}/>
            
                <LabeName6>Phone</LabeName6>
                <FormIn6 type="tel" name="phone"  onChange={formik.handleChange} value={formik.values.phone}/>
           
                <LabeName6>Github user</LabeName6>
                <FormIn6 type="text"  placeholder="@examplename"  name="gituser"  onChange={formik.handleChange} value={formik.values.gituser}  />
                <LabeName6>Id card</LabeName6>
                <FormIn6 type="number" name="idcard"  onChange={formik.handleChange} value={formik.values.idcard}  />
                <LabeName6>birthday date</LabeName6>
                <FormIn6 type="date" name="date"  onChange={formik.handleChange} value={formik.values.date}  />

            
            <RegisterButton6 type="submit"  >
              <LettersR22>Save</LettersR22> 
                </RegisterButton6>


        </FormAllH>
       
     
        </Seconddiv6>
 
            
    </Firstdiv5>
    </>
    );
  

};

export default RegisterSave;