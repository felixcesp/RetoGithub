//import { getAuth } from "firebase/auth";

import { getAuth } from "firebase/auth";
import {addDoc, collection, deleteDoc, doc, getDocs,query,updateDoc, where } from "firebase/firestore"

import { db } from "../../firebase/firebaseConfig"
import { typesUsergit } from "../types/typesEdit"

//----------------Agregar usaurio-------------------------//
export const addGituserAsync = (gitdata) => {
    const auth = getAuth();
    let evalId = auth.currentUser?.uid

let uidEval = { uid: evalId };
Object.assign(gitdata, uidEval);

    return (dispath) => {
 
     addDoc(collection(db, "usuariosGit"), gitdata)    
          .then(resp => {   
             dispath(addGituserSync(gitdata))
             dispath(listGituserSync()) 
          })

    }
}

export const addGituserSync = (gitdata) => {
   
    return {
        type: typesUsergit.add,
        payload: gitdata
        
        
    }
}














//editar

export const editGituserAsync = (idcard, gitdata) => {
    return async (dispatch)=> {
        const collectionListar = collection(db, "usuariosGit")
        const q = query(collectionListar, where('idcard', '==', idcard))
        const datosQ = await getDocs(q)
        let id

        datosQ.forEach(async(docu)=>{
            id= docu.id
        })
        console.log(id)

        const docRef = doc(db, "usuariosGit", id)

        await updateDoc(docRef, gitdata)

        .then(resp =>{ 
            dispatch(editGituserSync(gitdata))
        })
        .catch(error => alert('no se actualizo'))

      


    }
}

export const editGituserSync = (gitdata) => {
    return{
        type: typesUsergit.edit,
        payload: gitdata

    }
}


//----------------------Listar ususarios------------------------------//
export const listGituserAsync = () => {
    return async (dispath) => {
        const collectionListar = await getDocs(collection(db, "usuariosGit"))
        const showUsers = []
        collectionListar.forEach(lista => {
            showUsers.push({
                ...lista.data()
            })
        })
        dispath(listGituserSync(showUsers))

    }

}

export const listGituserSync = (showUsers) => {
    return {
        type: typesUsergit.list,
        payload: showUsers
    }
}

//-----------------------Eliminar usuario-------------------------------------------///

export const deletGituserAsync = (idcard) => {
    return async (dispatch) => {

        const collectionListar = collection(db, "usuariosGit")
        const q = query(collectionListar, where('idcard', '==', idcard))
        const datosQ = await getDocs(q)
        datosQ.forEach(docu => {
            deleteDoc(doc(db, 'usuariosGit', docu.id))

        })
        dispatch(deletGituserSync(idcard))
     


    }

}

export const deletGituserSync = (idcard) => {
    return {
        type: typesUsergit.delete,
        payload: idcard
    }

}

