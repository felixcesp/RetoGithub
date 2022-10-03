

import { addDoc, collection, getDocs} from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesLoginPhone } from "../types/types"
import { typesUsergit } from "../types/typesEdit"



export const actionLogPhoneAsync = (email, pass, nombre, phone, uid)=>{
    console.log(uid)
    return (dispatch)=>{
      addDoc(collection(db, "evaluadores"), {email:email, pass:pass, nombre:nombre, phone: phone, uid: uid})
       
       .then((resp) => {
           dispatch(actionLogPhoneSync(email, pass, nombre, phone, uid))
       });         
            }
            }
        

export const actionLogPhoneSync = (email, pass, nombre, phone, uid)=>{
    console.log(phone)
    return {
        
        type: typesLoginPhone.verificarPhone,
        payload:{
            email, pass, nombre, phone, uid          
        }
    }
    }



        //listar evaluadores
        //----------------------Listar ususarios------------------------------//
export const listEvaluatorAsync = () => {
    return async (dispath) => {
        const collectionListar = await getDocs(collection(db, "evaluadores"))
        const showEvaluators = []
        collectionListar.forEach(lista => {
            showEvaluators.push({
                ...lista.data()
            })
        })
        dispath(listEvaluatorSync(showEvaluators))

    }

}

export const listEvaluatorSync = (showEvaluators) => {
    return {
        type: typesUsergit.listEva,
        payload: showEvaluators
    }
}