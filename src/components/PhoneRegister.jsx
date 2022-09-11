import { collection, getDocs} from "firebase/firestore";
import { useDispatch} from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import useForm from "../hooks/useForm";
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
  const dispatch = useDispatch();
  const openRegis=useNavigate();

  
  const [formValue, handleInputChange, reset] = useForm({
    phone: "",
  });
  const veryTel = async (phone) => {
       const dataUsers=[]
       const resp= await getDocs(collection(db, "estadisticUser"))
        resp.forEach((doc)=> dataUsers.push (doc.data()))

       dataUsers.forEach(async (element) => {
        const elegido=element.phone
        const nombre=element.name;
       if (elegido === phone){
        alert('Welcome   ' + nombre ); 

        window.location="/saveuser";
      
      }else{
        funcion();
      }
         });
     
        function funcion(){
        openRegis('/pag1');
      }
    }
  const { phone } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(formValue)
    dispatch(actionLogPhoneSync(phone));
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
            <LettersR2  onClick={() =>veryTel(formValue.phone) }>Login</LettersR2>
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
