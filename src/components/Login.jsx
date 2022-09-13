import { useDispatch } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import useForm from "../hooks/useForm";
import { actionLoginAsync, loginFace, loginGoogle } from "../redux/actions/actionLogin";
import { Boton, BotonAll, BotonImg, BotonR35, Cambio9, FaceImg, Firstdiv, FormAll, FormIn, Frase, IconGit, LabeName, LettersR, RegisterButton8, Seconddiv, TitleMain } from "../styled/StyledComponents";

const Login = () => {
 const navigation = useNavigate();
    const dispatch =useDispatch()

const [formValue, handleInputChange, reset] = useForm({
        email: '',
        pass: '',
      
})

const {email, pass}= formValue

const handleSubmit=(e)=>{
    e.preventDefault()
   actionLoginAsync(dispatch,navigation,email, pass)
    reset()
}

return (
    
    <Firstdiv>
     
        <IconGit src="https://res.cloudinary.com/felixces/image/upload/v1661614263/Retogithub/icono2_ubwqaw.png" alt="" />
        <Frase>We want to know more about you, you are very impontant for us</Frase>

        <Seconddiv>
        <FormAll onSubmit ={handleSubmit}>
        <TitleMain>sign in</TitleMain>
        <hr/>
            
                <LabeName>Email </LabeName>
                <FormIn type="email" placeholder="name@example.com" name="email" value={formValue.email} onChange={handleInputChange} />        
                <LabeName>Password</LabeName>
                <FormIn type="password" name="pass" value={formValue.pass} onChange={handleInputChange}/>
           
           
            <BotonAll>
            <Boton type="submit"  >
            <BotonImg  src="https://res.cloudinary.com/felixces/image/upload/v1661617127/Retogithub/login_zsoqxp.png" alt="" />
            
            </Boton>

       
            <BotonImg src="https://res.cloudinary.com/felixces/image/upload/v1661617120/Retogithub/google_plros1.png" alt="" onClick={()=> loginGoogle(dispatch ,navigation)}/>
          

       
            <FaceImg src="https://res.cloudinary.com/felixces/image/upload/v1661617116/Retogithub/face_ussxn0.png" alt="" onClick={()=> loginFace(dispatch, navigation)} />
           
            </BotonAll>
            <div > 
                 <BotonR35 type="submit">
       
                 <Link  to="/register" style={{ textDecoration: 'none' }}><LettersR>New user - Register</LettersR></Link> 
                 </BotonR35>
            </div>
      
              
        </FormAll>
     
        </Seconddiv>
        <RegisterButton8  >
            <Link to='/phone' style={{ textDecoration: 'none' }}>  <Cambio9>pasar a phone</Cambio9></Link>  
                </RegisterButton8>
    </Firstdiv>
);
};

export default Login;