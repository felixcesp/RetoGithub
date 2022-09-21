import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesUsergit } from "../types/typesEdit"

//----------------Agregar usaurio-------------------------//
export const addGituserAsync = (gitdata, navigation) => {
    return (dispath) => {
        // addDoc recibe dos parametros(donde lo voy a guardar, que voy a guardar)
        //collection recibe dos parametros( la coneccion FirebaseConfig, Nombre de la colleccion)    
        addDoc(collection(db, "usuariosGit"), gitdata)
            .then(resp => {
                dispath(addGituserSync(gitdata))
                dispath(listGituserSync())
                navigation('/editar3')

            })
            .catch(error => {
                console.warn(error)
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
            console.log(resp)
        })
        .catch(error => console.warn(error))

      


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
        console.log(collectionListar)
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
        console.log(datosQ)
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

