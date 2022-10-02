import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { face, google} from "../../firebase/firebaseConfig"
import { typesLogin } from "../types/types"
import { actionLogPhoneAsync } from "./actionLogPhone"



//--------------Login con email y pass-----------------------/

export const actionLoginSync = (email, pass, nombre, uid)=>{
return {
    type: typesLogin.verificarLogin,
    payload:{
        email, pass, nombre, uid
    }
}
}

//METODO PROFES

//--------------Login con email y pass-----------------------/

export const actionLoginAsync = (email, pass)=>{

    
    return (dispatch)=>{
    const auth =getAuth()
    const phone='';
    signInWithEmailAndPassword(auth, email, pass, phone)
    
    .then(({user})=>{
      let uid=user.uid
      let nombre=user.displayName;

      alert(user.displayName + '   Welcome');
            dispatch(actionLoginSync(email, pass, nombre,  uid));
            if(phone){
              console.log(phone)
            dispatch(actionLogPhoneAsync(email, pass, nombre, uid))
            //alert(user.displayName + '   Welcome your phonr is ok');
          }
            /*else{
              alert(' User not found, please verify your data, or click on register')
            }*/
           // window.location="/saveuser";
    })
    .catch(error =>{
        
        alert(' User not found, please verify your data, or click on register')
      //  window.location="/register";
      

    })

}
}

//--------------Ingresar con Google-----------------------/
export const loginGoogle = ()=>{
  return (dispatch)=> {
         
         const auth = getAuth()
        signInWithPopup(auth, google)
        .then(({user})=>{
    
         // let uid=user.uid
           dispatch(actionLoginSync(user.email,"", user.displayName /*uid */))
          // dispatch(actionLogPhoneAsync(uid))
         alert('thanks   ' + user.displayName + '    Welcome')
        })
        .catch(({error})=>{
         alert("you dont have a valid google count, please register")
        })
        
  }
  }
  // ingresar con face
  export const loginFace = ()=>{
      return (dispatch)=> {
             const auth = getAuth()
            signInWithPopup(auth, face)
            .then(({user})=>{
              
               dispatch(actionLoginSync(user.email))
               alert('thanks   ' + user + '   welcome')
            })
            .catch(({error})=>{
              alert('you dont have a valid face count, please register')
            })
      }
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

      })
  }
}


export const actionLogoutSyn = ()=>{
  return {
      type: typesLogin.Logout
  }
}
