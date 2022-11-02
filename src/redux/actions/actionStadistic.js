import { arrayUnion, collection, doc,getDoc,getDocs, query, updateDoc, where} from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesUserStadistic } from "../types/typeUserStadistic"
//accion para guardar datos de las paginas y repos
export const actionAsyncStadistic = (stadistic, repouser) => {
   //console.log(stadistic)
   
    return async (dispatch)=> {

      
      const collectionListarb = collection(db, "usuariosGit")
      const docIndicated = query(collectionListarb, where('gituser', '==', repouser))
      const dataIndicated = await getDocs(docIndicated)
     // console.log(dataIndicated)  
      
      let id
      dataIndicated.forEach(async(docu)=>{
        id= docu.id;
        
    })
    //console.log(id)
   
      let uidEval = { araryId: id };
    Object.assign(stadistic, uidEval);

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
            dispatch(actionSyncStadistic(stadistic)) ; 
            dispatch(actionAsyncStadDynamic(stadistic)) ; 
               
});

    }};


export const actionSyncStadistic = (stadistic) => {

    return{
        type: typesUserStadistic.typeUserStadistic,
        payload: stadistic,              
    }
}








//accion para solo la pginacion y enviar estadisticas
export const actionAsyncStadDynamic = (stadistic) => {
  console.log(stadistic.araryId)
 
   return async (dispatch)=> {

    const dinamicArray=await getDoc(doc(db, "usuariosGit",stadistic.araryId ));
    const dinamicFinalArray= dinamicArray.data()
   await dispatch(actionsyncStadDynamic(dinamicFinalArray)) ; 
    

   }};


   export const actionsyncStadDynamic  = (dinamicFinalArray) => {

    return{
        type: typesUserStadistic.typeUserDinaStadistic,
        payload: dinamicFinalArray.currentPage,              
    }
}
