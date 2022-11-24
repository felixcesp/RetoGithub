
import { useDispatch} from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import useForm from "../hooks/useForm";
import { evalGituserAsync } from "../redux/actions/actionEdit";
import { actionStatePhoneAsync } from "../redux/actions/actionStatePhone";
import {
  EvalOptions,
  Firstdiv44,
  Frase10,
  Frase22,
  Seconddiv33,
} from "../styled/StyledComponents";

import NavbarHome from "./home/NavbarHome";
import PiePage from "./home/PiePage";


export default function Home() { 
const dispatch =useDispatch;



  const navigation =useNavigate();
  const create=()=>{
    navigation('/editar3')
   /* dispatch(actionAsyncStadistic())*/
  }
  const tusUsers=()=>{
    navigation('/tus')
   /* dispatch(actionAsyncStadistic())*/
  }
  const tusEvals=()=>{
    navigation('/evals')
   /* dispatch(actionAsyncStadistic())*/
  }
  const allUsers=()=>{
    navigation('/allusers')
    dispatch(evalGituserAsync())
   /* dispatch(actionAsyncStadistic())*/
  }

  return (
    <>
    <NavbarHome/> 
      <Frase22>
        evaluator these are your options
      </Frase22>

    <Firstdiv44>  
      <Seconddiv33 onClick={()=>{create()}}> 
    
        <EvalOptions src="https://res.cloudinary.com/felixces/image/upload/v1668864882/Retogithub/registrar_tgboot.jpg" alt=""
                           />
        <Frase10>
        Create Gituser
      </Frase10>
      </Seconddiv33>

      <Seconddiv33 onClick={()=>{tusUsers()}}>      
       <EvalOptions src="https://res.cloudinary.com/felixces/image/upload/v1668864896/Retogithub/tususers_jt4teq.jpg" alt="" />
       <Frase10>
        These are your users
      </Frase10>
      </Seconddiv33>

      <Seconddiv33 onClick={()=>{tusEvals()}}> 
      <EvalOptions src="https://res.cloudinary.com/felixces/image/upload/v1668864890/Retogithub/todosusers_tiqd71.jpg" alt="" />
      <Frase10>
        these are all app evaluators
      </Frase10>
      </Seconddiv33>

      <Seconddiv33 onClick={()=>{allUsers()}}> 
      <EvalOptions src="https://res.cloudinary.com/felixces/image/upload/v1668864857/Retogithub/alluserestadis_rmaqlg.jpg" alt="" />
      <Frase10>
      these are all gituser statistics
      </Frase10>
      </Seconddiv33>
      
    </Firstdiv44>
    <PiePage/> 
    </>
  );
}
