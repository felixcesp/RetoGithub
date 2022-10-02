import { createUserWithEmailAndPassword, getAuth, updateProfile} from "firebase/auth"
//import { addDoc, collection } from "firebase/firestore"
//import { db } from "../../firebase/firebaseConfig"
import {typesUsuario} from "../types/types"

import { actionLogPhoneAsync } from "./actionLogPhone"


//-----------Registrar usuario Nuevo--------------/
export const registrarUserAsync =(email, pass, nombre, phone)=>{
    return (dispatch)=>{
 
        const auth = getAuth()
        //console.log(auth)
        createUserWithEmailAndPassword(auth, email, pass)
        .then(async({user})=>{
                await updateProfile(auth.currentUser, {displayName: nombre})
                const uid=auth.currentUser.uid;
                console.log(uid)
                dispatch(registrarUserSync(email, pass, nombre, phone, uid))
                dispatch(actionLogPhoneAsync(email, pass, nombre, phone, uid))
                alert('felicitaciones    '+ nombre + ' ahora estas ya registrado')
            
        })
        .catch(err=>{
            alert('no te pudiste registar llena bien los campos')
        })
        
        ;
     

    }
}

export const registrarUserSync =(email,pass,nombre,phone, uid )=>{
    return {
        type: typesUsuario.register,
        payload:{email, pass, nombre, phone,uid} 
    }
}