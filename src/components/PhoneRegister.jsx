//import { getAuth } from "firebase/auth";
//import { collection, getDocs} from "firebase/firestore";
import { useDispatch} from "react-redux";
import { Link, /*useNavigate*/} from "react-router-dom";
//import { db } from "../firebase/firebaseConfig";
import useForm from "../hooks/useForm";
//import { actionLoginSync } from "../redux/actions/actionLogin";
import { actionLogPhoneSync} from "../redux/actions/actionLogPhone";
import {
  ButLoNext,
  Firstdiv4,
  FormAll2,
  FormIn2,
  Frase2,
  IconGit2,
  LabeName2,
  LettersR2,
  LettersR3,
  LoginConte,
  RegisterButton,
  Seconddiv3,
  TitleMain2,
} from "../styled/StyledComponents";

export default function PhoneRegister() {
 // const dispatch = useDispatch();
 // const openRegis=useNavigate();
  //const openuser=useNavigate();

  
  const [formValue, handleInputChange, reset] = useForm({
    phone: "",
  });



//nueva funcion para evaluar desde firebase









/*
  const veryTel = async (phone) => {
       const dataUsers=[]
       const resp= await getDocs(collection(db, "usuariosGit"))
        resp.forEach((doc)=> dataUsers.push (doc.data()))
        let nombre
        let elegido2
  
      dataUsers.forEach(async (element) => {    
      const elegido=element.phone
      if (elegido === phone){
        nombre=element.name
        elegido2=element.phone}
         });
         if (elegido2 === phone){
          dispatch(actionLoginSync("","",nombre))
          alert('Welcome again  ' + nombre ); 
         }else{
          alert('your phone is not register, please register')
          openRegis('/register')
         }
    }
    */
 // const { phone } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(formValue)
   // dispatch(actionLogPhoneSync(phone));
    reset();
  };
  return (
    <Firstdiv4>
      <IconGit2
        src="https://res.cloudinary.com/felixces/image/upload/v1661614263/Retogithub/icono2_ubwqaw.png"
        alt=""
      />
      <Frase2>
        If you have an account enter your phone number, in other hand click next
      </Frase2>
      <Seconddiv3>
        <FormAll2 onSubmit={handleSubmit}>
          <TitleMain2>User phone login</TitleMain2>
          <hr />
          <LabeName2>Phone</LabeName2>
          <FormIn2
            type="tel"
            name="phone"
            value={formValue.phone}
            onChange={handleInputChange}
          />

          <RegisterButton type="submit">
            <LettersR2 /* onClick={() =>veryTel(formValue.phone) }*/>Login</LettersR2>
          </RegisterButton>
        </FormAll2>
      </Seconddiv3>
      <LoginConte>
        <ButLoNext>
          <Link to="/pag1">
            <LettersR3>Next</LettersR3>
          </Link>
        </ButLoNext>
      </LoginConte>
    </Firstdiv4>
  );
}
