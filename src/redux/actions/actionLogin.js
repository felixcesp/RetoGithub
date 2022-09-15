import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

import { face, google} from "../../firebase/firebaseConfig"
import { typesLogin } from "../types/types"



//--------------Login con email y pass-----------------------/
/*
export const actionLoginAsync = (email, pass)=>{
    
    return (dispatch)=>{
    const auth =getAuth()
    signInWithEmailAndPassword(auth, email, pass)
    .then(({user})=>{
            dispatch(actionLoginSync(email, pass))
            alert(user.displayName + '   Welcome')
           // window.location="/saveuser";
    })
    .catch(error =>{
        
        alert(error, ' User not found, please verify your data, or click on register')
      //  window.location="/register";

    })

}
}
*/
export const actionLoginSync = (email, pass, nombre, isLogged)=>{
return {
    type: typesLogin.verificarLogin,
    payload:{
        email, pass, nombre, isLogged
    }
}
}/*
//--------------Ingresar con Google-----------------------/
export const loginGoogle = (navigation)=>{
return (dispatch)=> {
       
       const auth = getAuth()
      signInWithPopup(auth, google)
      .then(({user})=>{
      
         dispatch(actionLoginSync(user.email))
       // alert('thanks   ' + user.displayName + '    Welcome')
          // window.location="/saveuser";
       window.location="/saveuser";
       //navigation('/saveuser')
      })
    /*  .catch(({error})=>{
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
    }*/

  //--------------Login con email y pass-----------------------/
    export const actionLoginAsync = (dispatch, navigation, email, pass)=>{
    
   
        const auth =getAuth()
        signInWithEmailAndPassword(auth, email, pass)
        .then(({user})=>{
                const nombre =user.displayName
                dispatch(actionLoginSync(email, pass, nombre, true))             
                navigation("/saveuser")
                alert(user.displayName + '   Welcome')
               
        })
        .catch(error =>{ 
          alert("usuario no registrado, por favor registrate")
          navigation("/register")
           // window.location="/register";
        })
    
    
    }

    //google
    //--------------Ingresar con Google-----------------------/
export const loginGoogle = (dispatch, navigation)=>{
    
           
           const auth = getAuth()
          signInWithPopup(auth, google)
          .then(({user})=>{
            console.log(user)
            const nombre =user.displayName
             dispatch(actionLoginSync(user.email,"", nombre, true))
            
            // window.location="/saveuser";
            navigation("/saveuser")
             alert('thanks   ' + user.displayName + '    Welcome')
          })
        .catch(({error})=>{
           alert("please, register")
            window.location="/register";
          })
    
    }
    //face
    export const loginFace = (dispatch, navigation)=>{
      
                alert("estoy dentro de face")
               const auth = getAuth()
              signInWithPopup(auth, face)
              .then(({user})=>{
                const nombre =user.displayName
                 dispatch(actionLoginSync(user.email, "", nombre, true))
                 alert('gracias   ' + user + '   Bienvenido')
                 navigation('/saveuser')
              })
              .catch(({error})=>{
                alert('No autorizado')
                navigation('/register')

              })
        }
        
        //--------------Logout---------------------------//
export const actionLogoutAsyn = ()=>{

  return (dispatch)=>{
      const auth = getAuth();
      signOut(auth)
      .then(()=>{
          dispatch(actionLogoutSyn())
          alert('saliste de la sesion')
      })
      .catch(({error})=>{
        alert('No autorizado')
       // navigation('/register')

      })
  }
}


export const actionLogoutSyn = ()=>{
  return {
      type: typesLogin.Logout
  }
}