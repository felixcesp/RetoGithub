

import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where} from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { saveUserTypes } from "../types/storeUser"



export const addUser = ( userNew, navigation ) => {
    
   
       return (dispatch) => {
        addDoc(collection(db, "estadisticUser"), userNew)
        .then((resp)=>{
        
            dispatch( addUserSync( userNew ) )
           alert('Thanks for your help, your data is saved')
           navigation('/verinfo');

        })
    }
}
//PARA REDUX GUARDAR
export const addUserSync = ( userNew ) => ({
    type: saveUserTypes.add,
    payload: userNew
})
//REVISAR LOS DATOS O LEER o capturar
export const readInfoUser = () => {
    return async (dispatch)=>{
     try { 
        const datausers=[]
        const resp= await getDocs(collection(db, "estadisticUser"))
        resp.forEach((doc)=> datausers.push (doc.data()))
        dispatch(readInfoUserSync(datausers))
     } catch (error) {
        alert('Server is lost, please try again later')
     }
    }
}
const readInfoUserSync = (datausers) => ({
    type: saveUserTypes.read,
    payload: datausers
})
//BORRAR DATOS USAURIO ASINCRONICOS
export const deleteUserData = (email) => {
   
    return async(dispatch) => {
        const q = query( collection(db, 'estadisticUser'), where("email", "==", email) );
        const userRaw = await getDocs(q)
        userRaw.forEach(async(info)=>{
            try {
                await deleteDoc( doc(db, "estadisticUser", info.id))
                dispatch(deleteUserDataSync(email))
                alert('tus datos han sido borrado con exito')
            } catch (error) {
                alert('hay problemas en elservidor por intenta nuevamente')
                
            }
        })
    
    }}
//BORRAR DATOS SINCRONICO EN REDUX
const deleteUserDataSync = (email) => ({
    type: saveUserTypes.delete,
    payload: email
})

//EDITAR O PUT

export const editUserData =(data, edit)=>{
    return async(dispatch)=>{
        const q = query( collection(db, 'estadisticUser'), where("email", "==", edit) );
        const userRaw = await getDocs(q)
        let id='';
        userRaw.forEach((info)=>{
          id= info.id
    
        })
        try{
        await updateDoc(doc(db, "estadisticUser", id ), data)
    }catch(error){
        console.log(error)
    }
    }
}

