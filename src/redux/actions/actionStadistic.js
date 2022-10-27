import { arrayUnion, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesUserStadistic } from "../types/typeUserStadistic"

export const actionAsyncStadistic = (stadistic, gitUserSta) => {
   // console.log(dataUserNow.userGit)
    return async (dispatch)=> {
      //  const keepUsers = collection(db, "usuariosGit")
      const stadisticUser = await getDocs(collection(db, "usuariosGit"))
     const lookinFor = query(stadisticUser, where('gituser', '==',gitUserSta));
        
      //  const lookinFor = query(keepUsers, where('gituser', '==',gitUserSta));
       console.log('gituser')
       await updateDoc(lookinFor, {
        stadistic}
      );
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

