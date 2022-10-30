import { useDispatch} from "react-redux";
import { Link} from "react-router-dom";
import useForm from "../hooks/useForm";
import { actionStatePhoneAsync } from "../redux/actions/actionStatePhone";
import {
  ButLoNext,
  Firstdiv4,
  Firstdiv44,
  FormAll2,
  Frase2,
  IconGit2,
  LabeName2,
  LettersR2,
  LettersR3,
  LoginConte,
  RegisterButton,
  Seconddiv3,
  Seconddiv33,
  TitleMain2,
} from "../styled/StyledComponents";

export default function Home() { 
    
  return (
    <Firstdiv44>
      <IconGit2
        src="https://res.cloudinary.com/felixces/image/upload/v1661614263/Retogithub/icono2_ubwqaw.png"
        alt=""
      />
      <Frase2>
        evaluator If you have an account enter your phone number, in other hand click next
      </Frase2>
      <Seconddiv33> 
      </Seconddiv33>
      <Seconddiv33> 
      </Seconddiv33>
      <Seconddiv33> 
      </Seconddiv33>
      <Seconddiv33> 
      </Seconddiv33>
      
    </Firstdiv44>
  );
}
