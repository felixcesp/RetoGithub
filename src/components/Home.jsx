
import { useDispatch} from "react-redux";
import { Link} from "react-router-dom";
import useForm from "../hooks/useForm";
import { actionStatePhoneAsync } from "../redux/actions/actionStatePhone";
import {
  ButLoNext,
  EvalOptions,
  Firstdiv4,
  Firstdiv44,
  FormAll2,
  Frase10,
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
import FooterAll from "./home/Pagefeet.JS";
import NavbarHome from "./home/NavbarHome";
import Pagefeet from "./home/Pagefeet.JS";

export default function Home() { 
    
  return (
    <>
    <NavbarHome/>
    
      <Frase22>
        evaluator these are your options
      </Frase22>

    <Firstdiv44>  
      <Seconddiv33> 
    
        <EvalOptions src="https://res.cloudinary.com/felixces/image/upload/v1668864882/Retogithub/registrar_tgboot.jpg" alt="" />
        <Frase10>
        Create Gituser
      </Frase10>
      </Seconddiv33>

      <Seconddiv33>      
       <EvalOptions src="https://res.cloudinary.com/felixces/image/upload/v1668864896/Retogithub/tususers_jt4teq.jpg" alt="" />
       <Frase10>
        These are your users
      </Frase10>
      </Seconddiv33>

      <Seconddiv33> 
      <EvalOptions src="https://res.cloudinary.com/felixces/image/upload/v1668864890/Retogithub/todosusers_tiqd71.jpg" alt="" />
      <Frase10>
        these are all app evaluators
      </Frase10>
      </Seconddiv33>

      <Seconddiv33> 
      <EvalOptions src="https://res.cloudinary.com/felixces/image/upload/v1668864857/Retogithub/alluserestadis_rmaqlg.jpg" alt="" />
      <Frase10>
      these are all gituser stadistics
      </Frase10>
      </Seconddiv33>
      
    </Firstdiv44>
   
    </>
  );
}
