import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { typesUsuario } from "../types/types"

//-----------Registrar usuario Nuevo--------------/
export const registrarUserAsync =(email, pass, nombre)=>{
    return (dispatch)=>{
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, pass)
        .then(async({user})=>{
                
                await updateProfile(auth.currentUser, {displayName: nombre})
                dispatch(registrarUserSync(email, pass, nombre))
                alert('felicitaciones    '+ nombre + ' ahora estas ya registrado')
                
        })
        .catch(err=>{
            alert('no te pudiste registar llena bien los campos')
        })

    }
}

export const registrarUserSync =(email, pass, nombre)=>{
    return {
        type: typesUsuario.register,
        payload: {email, pass, nombre}
    }
}