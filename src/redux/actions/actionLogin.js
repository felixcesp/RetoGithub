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
            alert(user.displayName + '   Welcome')
            window.location="/saveuser";
    })
    .catch(error =>{
        
        alert(error, ' User not found, please verify your data, or click on register')
        window.location="/register";

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
       
       const auth = getAuth()
      signInWithPopup(auth, google)
      .then(({user})=>{
        
         dispatch(actionLoginSync(user.email))
       // alert('thanks   ' + user.displayName + '    Welcome')
        window.location="/saveuser";
      })
      .catch(({error})=>{
       // alert(error,"please, register")
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
         
             dispatch(actionLoginSync(user.email))
             alert('gracias   ' + user + '   Bienvenido')
          })
          .catch(({error})=>{
            alert(error, 'No autorizado')
          })
    }
    }