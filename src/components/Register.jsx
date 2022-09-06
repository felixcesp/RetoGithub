import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import { registrarUserAsync } from "../redux/actions/actionUsuario";
import {useDispatch} from 'react-redux'
import { BotonImg, ButLogin, Firstdiv2, FormAll2, FormIn2, Frase2,IconGit2, LabeName2, LettersR2, LoginConte, RegisterButton, Seconddiv2, TitleMain2 } from "../styled/StyledComponents";

const Register = () => {
    
    const dispatch = useDispatch()
    
       const [formValue, handleInputChange, reset] = useForm({
        nombre: '',
        email: '',
        pass: '',
        phone: '',
        gituser: '',
        cedula:'',
        date:''
    })

    const {nombre, email, pass, phone, gituser, cedula, date} = formValue
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nombre, email, pass, phone, gituser, cedula, date )
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
            
                <LabeName2>Phone</LabeName2>
                <FormIn2 type="tel" name="phone" value={formValue.phone} onChange={handleInputChange}/>
           
                <LabeName2>Github user</LabeName2>
                <FormIn2 type="email"  placeholder="@examplename"  name="gituser" value={formValue.gituser} onChange={handleInputChange}  />
                <LabeName2>Id card</LabeName2>
                <FormIn2 type="number" name="cedula" value={formValue.cedula} onChange={handleInputChange}  />
                <LabeName2>Date birthday</LabeName2>
                <FormIn2 type="date" name="date" value={formValue.date} onChange={handleInputChange}  />

            
            <RegisterButton type="submit"  >
              <LettersR2>Register</LettersR2> 
                </RegisterButton>
        </FormAll2>
        </Seconddiv2>
             <LoginConte>
                <ButLogin >
               <Link to="/pag1"><BotonImg  src="https://res.cloudinary.com/felixces/image/upload/v1661617127/Retogithub/login_zsoqxp.png" alt="" /></Link> 
                </ButLogin>
            </LoginConte>
       
    </Firstdiv2>
    );
};

export default Register;