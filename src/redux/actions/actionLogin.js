import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { face, google} from "../../firebase/firebaseConfig"
import { typesLogin } from "../types/types"

//--------------Login con email y pass-----------------------/
export const actionLoginAsync = (email, pass)=>{
    return (dispatch)=>{
    const auth =getAuth()
    signInWithEmailAndPassword(auth, email, pass)
    .then(({user})=>{
            dispatch(actionLoginSync(email, pass))
            console.log(user.displayName, 'Bienvenido')
    })
    .catch(error =>{
        console.warn('NO encontrado')
    })

}
}

export const actionLoginSync = (email, pass)=>{
return {
    type: typesLogin.verificarLogin,
    payload:{
        email, pass
    }
}
}
//--------------Ingresar con Google-----------------------/
export const loginGoogle = ()=>{
return (dispatch)=> {
        console.log("estoy dentro de google")
       const auth = getAuth()
      signInWithPopup(auth, google)
      .then(({user})=>{
        console.log(user, 'Bienvenido')
         dispatch(actionLoginSync(user.email))
      })
      .catch(({error})=>{
        console.warn(error, 'No autorizado')
      })
}
}
// ingresar con face
export const loginFace = ()=>{
    return (dispatch)=> {
            console.log("estoy dentro de face")
           const auth = getAuth()
          signInWithPopup(auth, face)
          .then(({user})=>{
            console.log(user, 'Bienvenido')
             dispatch(actionLoginSync(user.email))
          })
          .catch(({error})=>{
            console.warn(error, 'No autorizado')
          })
    }
    }