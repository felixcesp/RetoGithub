

import { addDoc, collection} from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesLoginPhone } from "../types/types"



export const actionLogPhoneAsync = (email, pass, nombre, phone, uid)=>{
    console.log(uid)
    return (dispatch)=>{
      addDoc(collection(db, "evaluadores"), {email:email, pass:pass, nombre:nombre, phone: phone, uid: uid})
       
       .then((resp) => {
       // const user = { name: "Juan", city: "Valencia", country: "Spain" };
       // db.collection("evaluadores").doc("sus users").set(user);
           dispatch(actionLogPhoneSync(email, pass, nombre, phone, uid))
       });
       
      /*const introduceUser = collection(db, "evaluadores")
       const userEVa = query(introduceUser, where('uid', '==', uid))
       const datosUsers = getDocs(userEVa)
       console.log(datosUsers)
       datosUsers.forEach(docu => {
           setDoc(doc(db, 'evaluadores', 'users'),{
            user: JSON.parse(JSON.stringify(docu))
           })

       })*/
           
         
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



   
    //agregar una subcoleccion a un usuario
   /* export const eachEvaluatorUsers=(email, pass, nombre, phone, uid)=>{
        return (dispatch)=>{
       // Add a new document with a generated id
     const newEvaluatorRef = doc(collection(db, "evaluators", "userGittoCheck"));
     .then((resp)=> {
     await   setDoc(newEvaluatorRef, {email:email, pass:pass, nombre:nombre, phone: phone});
    })
        }}*/

