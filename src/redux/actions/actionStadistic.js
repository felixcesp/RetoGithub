import { arrayUnion, collection, doc,getDocs, query, updateDoc, where} from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesUserStadistic } from "../types/typeUserStadistic"

export const actionAsyncStadistic = (stadistic) => {
   console.log(stadistic)
    return async (dispatch)=> {

    if(stadistic.idUserNow===undefined){
      const collectionListarb = collection(db, "usuariosGit")
      const datosQk = await getDocs(collectionListarb)
      console.log(datosQk.id)  
     
      let id
      datosQk.forEach(async(docu)=>{
        id= docu.id;
    })
    console.log(id)
    
    await updateDoc(doc(db, "usuariosGit", id),{    
           estadistic: arrayUnion({        
             totapages:stadistic.pagesAll,
             totarepso:stadistic.reposAll,
             proveid:id
        }),});
          
          await updateDoc(doc(db, "usuariosGit", id),{    
            currentPage: arrayUnion({        
              vistapage:stadistic.actualPage, 
         } ),
        })
           .then(resp =>{ 
let newId=stadistic.idUserNow;
newId=id
            dispatch(actionSyncStadistic(stadistic, newId)) ;        
});}
/*const collectionId = collection(db, "usuariosGit")
const pagesForLeft = query(collectionId, where('id', '==', id))
const pagesLeft = await getDocs(pagesForLeft)  
console.log(pagesLeft)  
     
let arrayVistas
pagesLeft.forEach(async(docu)=>{
  arrayVistas= docu.email;
})
console.log(arrayVistas)  */

    }};


export const actionSyncStadistic = (stadistic) => {
  console.log(stadistic)
    return{
        type: typesUserStadistic.typeUserStadistic,
        payload: stadistic
                
    }
}

