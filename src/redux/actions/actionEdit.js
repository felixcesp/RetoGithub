//import { getAuth } from "firebase/auth";
import {addDoc, collection, deleteDoc, doc, getDocs, query,updateDoc, where } from "firebase/firestore"

import { db } from "../../firebase/firebaseConfig"
import { typesUsergit } from "../types/typesEdit"

//----------------Agregar usaurio-------------------------//
export const addGituserAsync = (gitdata) => {
   //  const auth = getAuth();
   //  let evalId = auth.currentUser?.uid
      //console.log(evalId)
   // console.log(auth.currentUser.uid)
    return (dispath) => {
       //set doc crea la coleccion con un id en este caso el uid del usuario registrado
       // setDoc(doc(db, "usuariosGit", auth.currentUser?.uid ), gitdata)
         //addDoc recibe dos parametros(donde lo voy a guardar, que voy a guardar)
        //collection recibe dos parametros( la coneccion FirebaseConfig, Nombre de la colleccion)  
        addDoc(collection(db, "usuariosGit"), gitdata)
            .then(resp => {
            
;
                dispath(addGituserSync(gitdata))
              // dispath(listGituserSync()) 
            })
           // db.collection("ususario").document(auth.currentUser.uid).setDoc(["Add" , "usuarios"], {merge: true})
            //db.collection("usuariosGit").document(auth.currentUser.uid).setData(["Add" : "Mentor"], merge: true)

          
      
    
           // db.collection("useriosGit").document(auth.currentUser?.uid).setData(["Add" : "Mentor"], merge: true)
           
           /* db.collection('usuariosGit').doc( auth.currentUser.uid).add({
              'usuarios ': {
                  gitdata
                }
              },{merge:true})*/
        

            //const docRef = doc(db, "usuariosGit",auth.currentUser.uid  );
          //  setDoc(docRef, { capital: true }, { merge: true });
          //  const data = {
         //   gitdata
         //    };
    
         //   setDoc(docRef, data) 


/*
            
       //con sebastian cambios 27 sept
       addDoc(collection(db, "evaluadores", "usuarios"), gitdata)
       const ususariosListar = collection(db, "usuarios")
       const u = query(ususariosListar, where('uid', '==', uid))
       const datosU = getDocs(u)
       let ident
       datosU.forEach(async(document)=>{
           ident= document.uid
       })
       console.log(ident)
       const documentRef = doc(db, "ususarios", uid)
       addDoc(documentRef, gitdata)
      /* updateDoc(doc(db, "ususarios", uid),{
        usuarios:arrayUnion(
            gitdata
        )
       })
       .then(resp => {
        dispath(addGituserSync(gitdata))
        dispath(listGituserSync()) 
    })*/

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

