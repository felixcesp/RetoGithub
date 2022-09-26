

import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesLoginPhone } from "../types/types"



export const actionLogPhoneAsync = (email, pass, nombre, phone)=>{
    console.log(email, pass, nombre, phone)
    return (dispatch)=>{
      addDoc(collection(db, "evaluadores"), {email:email, pass:pass, nombre:nombre, phone: phone})
        
       .then((resp) => {
           dispatch(actionLogPhoneSync(email, pass, nombre, phone))
       })
           
         
            }
            }
           
      
        
    
    
   



export const actionLogPhoneSync = (email, pass, nombre, phone)=>{
    console.log(phone)
    return {
        
        type: typesLoginPhone.verificarPhone,
        payload:{
            email, pass, nombre, phone
            
        }
    }
    }
   
    //rutas internas 
    


