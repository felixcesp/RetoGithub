
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
   /* export const regisPhoneUserAsync =(phone)=>{
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
    }*/

   /* export const regisPhoneUserVeryfy =( phone )=>{
        
     
        return (dispatch)=>{
            //const phoredux = useSelector( state => state.saveUser);
          // const referencia='3143429466'
            const {logPhone} = useSelector( state => state);
            //console.log(logPhone);
            //console.log(referencia);
            const veryPh=[]
            logPhone.forEach((tel)=> veryPh.push (tel.phone))
            console.log(veryPh)
            dispatch(actionLogPhoneSync(phone))     
              /*  if (phone === referencia){
                    dispatch(actionLogPhoneSync(phone))
                    alert('bienvenido')
                }else{
                 alert('no estas registrado')
                }
            }
        

        }*/
    
    