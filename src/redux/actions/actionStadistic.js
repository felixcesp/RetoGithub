import { arrayUnion, collection, doc,getDocs, query, updateDoc, where} from "firebase/firestore"
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
});



    }};


export const actionSyncStadistic = (stadistic) => {

    return{
        type: typesUserStadistic.typeUserStadistic,
        payload: stadistic
                
    }
}




//accion para solo la pginacion y enviar estadisticas
export const actionAsyncStadDynamic = (repouser) => {
  console.log(repouser)
   return async (dispatch)=> {

     const mathArray = collection(db, "usuariosGit")
     const arrayToItinerar = query(mathArray, where('gituser', '==', repouser))
     const finalArray = await getDocs(arrayToItinerar )
     console.log(finalArray)   
     if (finalArray.exists()) {
      console.log("Document data:", finalArray.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
   //  let allArray=[];
 
     // console.log(otro);
 
    /* finalArray.forEach(async(pages)=>{
       allArray= pages.query
       ;
   })
   console.log(allArray);*/
   
  /* await updateDoc(doc(db, "usuariosGit", id),{    
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
});

//let arrayActual=[];


/*dataIndicated.map(async(document)=>{
 arrayActual= document.id;
 console.log(arrayActual)
})*/


   }};
