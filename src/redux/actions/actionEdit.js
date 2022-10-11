//import { getAuth } from "firebase/auth";

import { getAuth } from "firebase/auth";
import {addDoc, collection, deleteDoc, doc, getDocs,query,updateDoc, where } from "firebase/firestore"

import { db } from "../../firebase/firebaseConfig"
import { typesSearch } from "../types/types";
import { typesAllUser, typesUsergit } from "../types/typesEdit"
import { listEvaluatorAsync } from "./actionLogPhone";

//----------------Agregar usaurio-------------------------//
export const addGituserAsync = (gitdata) => {
    const auth = getAuth();
    let evalId = auth.currentUser?.uid

let uidEval = { Euid: evalId };
Object.assign(gitdata, uidEval);

    return (dispath) => {
 
     addDoc(collection(db, "usuariosGit"), gitdata)    
          .then(resp => {   
             dispath(addGituserSync(gitdata))
             dispath(listGituserAsync()) 
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
            dispatch(listGituserAsync()); 
            dispatch(listEvaluatorAsync())
            dispatch(evalGituserAsync());
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
        const listUsers = []
        collectionListar.forEach(lista => {
            listUsers.push({
                ...lista.data()
            })
        })
        dispath(listGituserSync(listUsers))

    }

}

export const listGituserSync = (listUsers) => {
    return {
        type: typesAllUser.allList,
        payload: listUsers
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
        dispatch(listGituserAsync()); 
        dispatch(listEvaluatorAsync())
        dispatch(evalGituserAsync())
     


    }

}

export const deletGituserSync = (idcard) => {
    return {
        type: typesUsergit.delete,
        payload: idcard
    }

}




//usuarios de cada evaluador lista
export const evalGituserAsync = () => {
    const auth = getAuth();
    let evalId = auth.currentUser?.uid
    return async (dispath) => {
        const alluserGit =  collection(db, "usuariosGit")
       
        const usersGitGotten = query(alluserGit, where('Euid', '==', evalId))
        const usersQ = await getDocs(usersGitGotten)
       // console.log(usersQ)
        const finalGitGotten = []
       // console.log(finalGitGotten)
        usersQ.forEach(sellect => {
            finalGitGotten.push({
               ...sellect.data()
            })
        })
       //  .then(resp => {   
            dispath(evalGituserSync(finalGitGotten))
           
       //   })

    }
}

export const evalGituserSync = (finalGitGotten) => {
    //console.log(finalGitGotten)
   
    return {
        type: typesSearch.evaluadorUsers,
        payload: finalGitGotten
        
        
    }
};
