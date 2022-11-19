
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
  Frase22,
  IconGit2,
  IconGit52,
  LabeName2,
  LettersR2,
  LettersR3,
  LoginConte,
  RegisterButton,
  Seconddiv3,
  Seconddiv33,
  TitleMain2,
} from "../styled/StyledComponents";
import NavbarHome from "./home/NavbarHome";

export default function Home() { 
    
  return (
    <>
    <NavbarHome/>
    
      <Frase22>
        evaluator these are your options
      </Frase22>
    <Firstdiv44>  
      <Seconddiv33> 
        <img src="" alt="" />
      </Seconddiv33>
      <Seconddiv33> 
      </Seconddiv33>
      <Seconddiv33> 
      </Seconddiv33>
      <Seconddiv33> 
      </Seconddiv33>
      
    </Firstdiv44>
    </>
  );
}
