import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesPlanta } from "../types/typesEdit"

//----------------Agregar Planta-------------------------//
export const addPlantaAsync = (planta) => {
    return (dispath) => {
        // addDoc recibe dos parametros(donde lo voy a guardar, que voy a guardar)
        //collection recibe dos parametros( la coneccion FirebaseConfig, Nombre de la colleccion)    
        addDoc(collection(db, "usuariosGit"), planta)
            .then(resp => {
                dispath(addPlantaSync(planta))
                dispath(listPlantasSync())

            })
            .catch(error => {
                console.warn(error)
            })

    }
}

export const addPlantaSync = (planta) => {
    return {
        type: typesPlanta.add,
        payload: planta
    }
}














//editar

export const editPlantaAsync = (codigo, planta) => {
    return async (dispatch)=> {
        const collectionListar = collection(db, "usuariosGit")
        const q = query(collectionListar, where('codigo', '==', codigo))
        const datosQ = await getDocs(q)
        let id

        datosQ.forEach(async(docu)=>{
            id= docu.id
        })
        console.log(id)

        const docRef = doc(db, "usuariosGit", id)

        await updateDoc(docRef, planta)

        .then(resp =>{ 
            dispatch(editPlantaSync(planta))
            console.log(resp)
        })
        .catch(error => console.warn(error))

       // dispatch(listPlantaAsync())


    }
}

export const editPlantaSync = (planta) => {
    return{
        type: typesPlanta.edit,
        payload: planta

    }
}


//----------------------Listar Plantas------------------------------//
export const listPlantaAsync = () => {
    return async (dispath) => {
        const collectionListar = await getDocs(collection(db, "usuariosGit"))
        console.log(collectionListar)
        const plantas = []
        collectionListar.forEach(lista => {
            plantas.push({
                ...lista.data()
            })
        })
        dispath(listPlantasSync(plantas))

    }

}

export const listPlantasSync = (planta) => {
    return {
        type: typesPlanta.list,
        payload: planta
    }
}

//-----------------------Eliminar Planta-------------------------------------------///

export const deletPlantaAsync = (codigo) => {
    return async (dispatch) => {

        const collectionListar = collection(db, "usuariosGit")
        const q = query(collectionListar, where('codigo', '==', codigo))
        const datosQ = await getDocs(q)
        console.log(datosQ)
        datosQ.forEach(docu => {
            deleteDoc(doc(db, 'usuariosGit', docu.id))

        })
        dispatch(deletPlantaSync(codigo))
        //dispatch(listPlantaAsync())


    }

}

export const deletPlantaSync = (codigo) => {
    return {
        type: typesPlanta.delete,
        payload: codigo
    }

}

