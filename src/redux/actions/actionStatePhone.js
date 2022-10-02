import { collection, getDocs} from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
//import { typesEstadoPhone } from "../types/types"
import { actionLoginAsync } from "./actionLogin"


export const actionStatePhoneAsync=(phone)=> {
    return async (dispatch)=> {

       const evaluadorPhone=[]
       const resp= await getDocs(collection(db, "evaluadores"))
        resp.forEach((doc)=> evaluadorPhone.push (doc.data()))
        let phoeEvalu
        let elegido2
        let email
        let pass
  
      evaluadorPhone.forEach(async (element) => {    
      const elegido=element.phone
      if (elegido === phone){
        phoeEvalu=element.nombre
        elegido2=element.phone
        email=element.email
        pass=element.pass 
    
    }
         });
         console.log(phoeEvalu)
         console.log(elegido2)
         console.log(email)
         console.log(pass)
         console.log(elegido2)
        // let authstate;
       if (elegido2 === phone){
        //authstate=true;
       // dispatch(actionStatePhonesync(authstate))
        dispatch(actionLoginAsync(email, pass))
       // alert('Welcome again evaluator  ' + phoeEvalu ); 
       }else{
           // authstate=false;
     //   dispatch(actionStatePhonesync(authstate))
      alert('evaluator your phone is not register, please click next')
        
        }
    
    }
}

/*const actionStatePhonesync=(authstate)=> {
    return {
        type: typesEstadoPhone.estadoPhone,
        payload:{
            authstate,
        }
    }
}*/