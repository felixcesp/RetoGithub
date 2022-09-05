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
            alert(user.displayName + '   Bienvenido')
    })
    .catch(error =>{
        alert('Usuario no encontrado, por verifica tus datos')
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
        alert("estoy dentro de google")
       const auth = getAuth()
      signInWithPopup(auth, google)
      .then(({user})=>{
        alert('gracias   ' + user + '    Bienvenido')
         dispatch(actionLoginSync(user.email))
      })
      .catch(({error})=>{
        alert(error, 'No autorizado')
      })
}
}
// ingresar con face
export const loginFace = ()=>{
    return (dispatch)=> {
            alert("estoy dentro de face")
           const auth = getAuth()
          signInWithPopup(auth, face)
          .then(({user})=>{
            alert('gracias   ' + user + '   Bienvenido')
             dispatch(actionLoginSync(user.email))
          })
          .catch(({error})=>{
            alert(error, 'No autorizado')
          })
    }
    }