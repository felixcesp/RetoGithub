
import { useFormik } from 'formik';
import { useDispatch, useSelector} from 'react-redux';
import {Cambio9, Firstdiv5, FormAllH, FormIn6, Frase6,IconGit5, LabeName6, LettersR22, RegisterButton10, RegisterButton6, RegisterButton9, Seconddiv6, TitleMain6 } from "../styled/StyledComponents";
import { addUser } from "../redux/actions/userSave";
import { Link, useNavigate } from 'react-router-dom';




const RegisterSave = ({ edit}) => {
    const navigation=useNavigate();

   
   const usuarioName= useSelector(state => state.login);
   //const saverName= useSelector(state => state.saveUser);
  
    
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
            dispatch(addUser(data, navigation))
         
        },
    
    })



    return (
       <>
                
        <Firstdiv5>
    
        <IconGit5 src="https://res.cloudinary.com/felixces/image/upload/v1661614263/Retogithub/icono2_ubwqaw.png" alt="" />
        <Frase6>{usuarioName.nombre}....Your information closes Github to you</Frase6>
        <Seconddiv6>
        <TitleMain6>{usuarioName.nombre}...information</TitleMain6>
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
              <LettersR22>Save</LettersR22> 
                </RegisterButton6>


        </FormAllH>
       
        
        <RegisterButton9  >
            <Link to='/verinfo' style={{ textDecoration: 'none' }}>  <Cambio9>pasar a la tabla</Cambio9></Link>  
        </RegisterButton9>
        <RegisterButton10  >
            <Link to='/register' style={{ textDecoration: 'none' }}>  <Cambio9>pasar a registro</Cambio9></Link>  
        </RegisterButton10>
        </Seconddiv6>
 
            
    </Firstdiv5>
    </>
    );
  

};

export default RegisterSave;