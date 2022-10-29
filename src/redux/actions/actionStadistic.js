import { arrayUnion, collection, doc,getDocs, query, updateDoc, where} from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesUserStadistic } from "../types/typeUserStadistic"

export const actionAsyncStadistic = (stadistic) => {
   // console.log(stadistic)
    return async (dispatch)=> {
    
      const collectionListarb = collection(db, "usuariosGit")
      const datosQk = await getDocs(collectionListarb)
      console.log(datosQk.id)  
     
      let id
      datosQk.forEach(async(docu)=>{
        id= docu.id;
    })
   // console.log(id)
    await updateDoc(doc(db, "usuariosGit", id),{    
           estadistic: arrayUnion({        
             totapages:stadistic.pagesAll,
             totarepso:stadistic.reposAll,
        }),});
          
          await updateDoc(doc(db, "usuariosGit", id),{    
            currentPage: arrayUnion({        
              vistapage:stadistic.actualPage, 
         } ),
        })
           .then(resp =>{ 
            dispatch(actionSyncStadistic(stadistic)) ;        
});
const collectionId = collection(db, "usuariosGit")
const pagesForLeft = query(collectionId, where('id', '==', id))
const pagesLeft = getDocs(pagesForLeft)  
console.log(pagesLeft)  

    }};


export const actionSyncStadistic = (stadistic) => {

    return{
        type: typesUserStadistic.typeUserStadistic,
        payload: stadistic

    }
}

