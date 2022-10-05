

import { addDoc, collection, doc, getDocs, setDoc} from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesEvaluadores, typesLoginPhone } from "../types/types"




export const actionLogPhoneAsync = (email, pass, nombre, phone, uid)=>{
    console.log(uid)
    return (dispatch)=>{
      setDoc(doc(db, "evaluadores", uid), {email:email, pass:pass, nombre:nombre, phone: phone, uid: uid})
       
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
        const seeAllevalu = []
        collectionListar.forEach(lista => {
            seeAllevalu.push({
                ...lista.data()
            })
        })
        dispath(listEvaluatorSync(seeAllevalu))

    }

}

export const listEvaluatorSync = (seeAllevalu) => {
    return {
        type: typesEvaluadores.verEvaluadores,
        payload: seeAllevalu
    }
}

