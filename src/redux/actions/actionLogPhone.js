
import { typesLoginPhone } from "../types/types"




export const actionLogPhoneSync = (phone)=>{
    return {
        type: typesLoginPhone.verificarPhone,
        payload:{
            phone,
        }
    }
    }
   
    //rutas internas 
    


