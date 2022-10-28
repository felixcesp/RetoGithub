import { getAuth } from "firebase/auth"
import { arrayUnion, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesUserStadistic } from "../types/typeUserStadistic"

export const actionAsyncStadistic = (stadistic, gitUserSta) => {
    console.log(gitUserSta)
    return async (dispatch)=> {
      //  const keepUsers = collection(db, "usuariosGit")
     // const stadisticUser = await getDocs(collection(db, "usuariosGit"))
     
    // const lookinFor = query(stadisticUser, where('gituser', '==', gitUserSta));


    /* const stadisticUser = collection(db, "usuariosGit")
     console.log('guardar')
     const lookingFor = query(stadisticUser, where('gituser', '==', gitUserSta))
     console.log('query')
     const oneStadistic = await getDocs(lookingFor)
     console.log('pasaget')
     console.log(oneStadistic)
        
      //  const lookinFor = query(keepUsers, where('gituser', '==',gitUserSta));
      console.log('pasaquery')
      console.log(oneStadistic)
      await updateDoc(oneStadistic, stadistic)*/
      const collectionListarb = collection(db, "usuariosGit")
      const datosQk = await getDocs(collectionListarb)
      let id
      datosQk.forEach(async(docu)=>{
        id= docu.id
    })
    console.log(id)
    await updateDoc(doc(db, "usuariosGit", id),{    
           estadistic: [0].arrayUnion({
             totapages:stadistic.totalPages,
             totarepso:stadistic.totalRepos,
             totalsi:stadistic.vistasPage,
     
            } ),
          });
          


     /*  await updateDoc(doc(db,'usuariosGit', gitUserSta ), {
        
           estadistic: arrayUnion({
             stadistic
          
            }
            ),
           })*/
      // await updateDoc(oneStadistic, {
     //   stadistic}
    //  );
       // const stadisticUser = await getDocs(lookinFor)
      /*  console.log(stadisticUser)
        await updateDoc(stadisticUser, 
            stadistic
          );*/
        
      // await updateDoc(stadisticUser, dataUserNow )/* {
        
        /*    estadistic: arrayUnion(
             dataUserNow
            ),
          })*/
       // .then(resp =>{ 
           // dispatch(actionSyncStadistic(dataUserNow))
          //  dispatch(listGituserAsync()); 
          //  dispatch(listEvaluatorAsync())
          //  dispatch(evalGituserAsync());
//})
      //  .catch(error => alert('no se actualizo'))

      


    }
}
/*
export const actionSyncStadistic = (dataUserNow) => {
    return{
        type: typesUserStadistic.typeUserStadistic,
        payload: dataUserNow

    }
}*/

