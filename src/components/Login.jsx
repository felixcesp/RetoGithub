import { useDispatch } from "react-redux";
import { Link} from "react-router-dom";
import useForm from "../hooks/useForm";
import { actionLoginAsync, loginFace, loginGoogle } from "../redux/actions/actionLogin";
import { Boton, BotonAll, BotonF, BotonImg, BotonR, FaceImg, Firstdiv, FormAll, FormIn, Frase, IconGit, LabeName, LettersR, Seconddiv, TitleMain } from "../styled/StyledComponents";

const Login = () => {
 
    const dispatch =useDispatch()

const [formValue, handleInputChange, reset] = useForm({
        email: '',
        pass: '',
      
})

const {email, pass}= formValue

const handleSubmit=(e)=>{
    e.preventDefault()
   console.log(formValue)
   dispatch(actionLoginAsync(email, pass))
    reset()
}

return (
    
    <Firstdiv>
        <IconGit src="https://res.cloudinary.com/felixces/image/upload/v1661614263/Retogithub/icono2_ubwqaw.png" alt="" />
        <Frase>We want to know more about you, you are very impontant for us</Frase>

        <Seconddiv>
        <FormAll onSubmit ={handleSubmit}>
        <TitleMain>Iniciar Sesion</TitleMain>
        <hr/>
            
                <LabeName>Email </LabeName>
                <FormIn type="email" placeholder="name@example.com" name="email" value={formValue.email} onChange={handleInputChange} />        
                <LabeName>Password</LabeName>
                <FormIn type="password" name="pass" value={formValue.pass} onChange={handleInputChange}/>
           
           
            <BotonAll>
            <Boton type="submit"  >
            <BotonImg  src="https://res.cloudinary.com/felixces/image/upload/v1661617127/Retogithub/login_zsoqxp.png" alt="" />
            
            </Boton>

            <Boton type="submit"  >
            <BotonImg src="https://res.cloudinary.com/felixces/image/upload/v1661617120/Retogithub/google_plros1.png" alt="" onClick={()=> dispatch(loginGoogle())}/>
            </Boton>

            <BotonF type="submit" >
            <FaceImg src="https://res.cloudinary.com/felixces/image/upload/v1661617116/Retogithub/face_ussxn0.png" alt="" onClick={()=> dispatch(loginFace
            ())} />
            </BotonF>
            </BotonAll>
            <div >
            <BotonR type="submit">
                 <Link  to="/register"><LettersR>Nuevo Usuario - Registrate</LettersR></Link> 
            </BotonR>
            </div>
              
        </FormAll>
        </Seconddiv>
    </Firstdiv>
);
};

export default Login;