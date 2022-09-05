import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { typesLoginPhone } from "../types/types"

export const actionLogPhoneSync = (phone)=>{
    return {
        type: typesLoginPhone.verificarPhone,
        payload:{
            phone,
        }
    }
    }
    //ayncronico
    export const regisPhoneUserAsync =(phone)=>{
        return (dispatch)=>{
            const auth = getAuth()
            createUserWithEmailAndPassword(auth, phone)
            .then(async({user})=>{
                    
                    await updateProfile(auth.currentUser, { phoneNumber: phone})
                    dispatch(actionLogPhoneSync(phone))
                    alert(user, 'registrado')
            })
            .catch(err=>{
                alert.warn(err, 'usuario No registrado')
            })
    
        }
    }