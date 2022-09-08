
import { useFormik } from 'formik';
import { useDispatch} from 'react-redux';
import { Cambio, Firstdiv2, Firstdiv5, FormAll2, FormAllH, FormIn2, FormIn6, Frase2,Frase6,IconGit2, IconGit5, LabeName2, LabeName6, LettersR2, RegisterButton, RegisterButton2, RegisterButton6, RegisterButton8, Seconddiv2, Seconddiv6, TitleMain2, TitleMain6 } from "../styled/StyledComponents";
import { addUser } from "../redux/actions/userSave";
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';

//import { useEffect } from "react";
//import { Table } from "../components/home/Table";

const RegisterSave = ({ edit }) => {
   // const {saveUser} = useSelector( state => state)
   //const datos = useSelector( state => state.saveUser)

  /* useEffect(()=>{
     const dato =  datos.find((data)=>data.email === edit)
     console.log(dato)
   },[edit])*/
   
  
    
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            pass: '',
            phone: '',
            gituser: '',
            idcard:'',
            date:''
        },
        onSubmit: ( data ) => {
            dispatch(addUser(data))
         
        },
    
    })



    return (
       <>
                
        <Firstdiv5>
    
        <IconGit5 src="https://res.cloudinary.com/felixces/image/upload/v1661614263/Retogithub/icono2_ubwqaw.png" alt="" />
        <Frase6>Your information closes Github to you</Frase6>
        <Seconddiv6>
        <TitleMain6>User information</TitleMain6>
        <FormAllH onSubmit={formik.handleSubmit} >
            
          
            
                <LabeName6>Name and last name</LabeName6>
                <FormIn6 type="text" name="name" onChange={formik.handleChange}  />
            
            
                <LabeName6>Email address</LabeName6>
                <FormIn6 type="email" placeholder="name@example.com" name="email" onChange={formik.handleChange}/>
          
                <LabeName6>Password</LabeName6>
                <FormIn6 type="password" name="pass" onChange={formik.handleChange} />
            
                <LabeName6>Phone</LabeName6>
                <FormIn6 type="tel" name="phone"  onChange={formik.handleChange}/>
           
                <LabeName6>Github user</LabeName6>
                <FormIn6 type="text"  placeholder="@examplename"  name="gituser"  onChange={formik.handleChange}  />
                <LabeName6>Id card</LabeName6>
                <FormIn6 type="number" name="idcard"  onChange={formik.handleChange}  />
                <LabeName6>birthday date</LabeName6>
                <FormIn6 type="date" name="date"  onChange={formik.handleChange}  />

            
            <RegisterButton6 type="submit"  >
              <LettersR2>Save</LettersR2> 
                </RegisterButton6>


        </FormAllH>
        
        <RegisterButton8  >
            <Link to='/verinfo'>  <Cambio>pasar a la tabla</Cambio></Link>  
        </RegisterButton8>
                <RegisterButton8  >
            <Link to='/register'>  <Cambio>pasar a registro</Cambio></Link>  
                </RegisterButton8>
        </Seconddiv6>
           
            
    </Firstdiv5>
    </>
    );
  

};

export default RegisterSave;