import { createUserWithEmailAndPassword, getAuth, updateProfile} from "firebase/auth"
//import { addDoc, collection } from "firebase/firestore"
//import { db } from "../../firebase/firebaseConfig"
import { typesEstadoPhone} from "../types/types"


//-----------Registrar usuario Nuevo--------------/
export const registrarUserAsync =(email, pass, nombre, phone)=>{
    return (dispatch)=>{
 
        const auth = getAuth()
        //console.log(auth)
        createUserWithEmailAndPassword(auth, email, pass)
        .then(async({user})=>{
                await updateProfile(auth.currentUser, {displayName: nombre})
                dispatch(registrarUserSync(email, pass, nombre, phone))
                alert('felicitaciones    '+ nombre + ' ahora estas ya registrado')
            
        })
        .catch(err=>{
            alert('no te pudiste registar llena bien los campos')
        });
     

    }
}

export const registrarUserSync =(stateAuth)=>{
    return {
        type: typesEstadoPhone,
        payload: {stateAuth}
    }
}