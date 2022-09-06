
import { useFormik } from 'formik';
import { useDispatch} from 'react-redux';
import { Cambio, Firstdiv2, FormAll2, FormIn2, Frase2,IconGit2, LabeName2, LettersR2, RegisterButton, RegisterButton2, Seconddiv2, TitleMain2 } from "../styled/StyledComponents";
import { addUser } from "../redux/actions/userSave";
import { Link } from 'react-router-dom';
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
       

        <Firstdiv2>
           
        <IconGit2 src="https://res.cloudinary.com/felixces/image/upload/v1661614263/Retogithub/icono2_ubwqaw.png" alt="" />
        <Frase2>Your information closes Github to you</Frase2>
        <Seconddiv2>
        <FormAll2 onSubmit={formik.handleSubmit} >
            <TitleMain2>User information</TitleMain2>
            <hr />
            
                <LabeName2>Name and last name</LabeName2>
                <FormIn2 type="text" name="name" onChange={formik.handleChange}  />
            
            
                <LabeName2>Email address</LabeName2>
                <FormIn2 type="email" placeholder="name@example.com" name="email" onChange={formik.handleChange}/>
          
                <LabeName2>Password</LabeName2>
                <FormIn2 type="password" name="pass" onChange={formik.handleChange} />
            
                <LabeName2>Phone</LabeName2>
                <FormIn2 type="tel" name="phone"  onChange={formik.handleChange}/>
           
                <LabeName2>Github user</LabeName2>
                <FormIn2 type="text"  placeholder="@examplename"  name="gituser"  onChange={formik.handleChange}  />
                <LabeName2>Id card</LabeName2>
                <FormIn2 type="number" name="idcard"  onChange={formik.handleChange}  />
                <LabeName2>birthday date</LabeName2>
                <FormIn2 type="date" name="date"  onChange={formik.handleChange}  />

            
            <RegisterButton type="submit"  >
              <LettersR2>Save</LettersR2> 
                </RegisterButton>

                <RegisterButton2  >
            <Link to='/verinfo'>  <Cambio>pasar a la tabla</Cambio></Link>  
                </RegisterButton2>
                <RegisterButton2  >
            <Link to='/register'>  <Cambio>pasar a registro</Cambio></Link>  
                </RegisterButton2>

        </FormAll2>
        </Seconddiv2>
           
            
    </Firstdiv2>
    );
  

};

export default RegisterSave;