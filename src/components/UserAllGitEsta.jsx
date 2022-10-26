import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletGituserAsync, listGituserAsync } from "../redux/actions/actionEdit";
import { keepNameAsyncEval } from "../redux/actions/actionLogPhone";
import { actionRepoSync } from "../redux/actions/actionRepo";
import { ImgTables, ImgTables2, LisitImg, Table22, TableInfo22, TableT25, TableTd22, TableTd223, TableThn, TitleTable55 } from "../styled/StyledComponents";
import EditNew from "./EditarNew";

export default function UserAllGitEsta() {

    const nombre= useSelector(state => state.keepName);
    const dispatch = useDispatch()
    //manejo el estado del modal activo o no
    const [modal, setModal] = useState(false);
    //manejar para enviar los datos
    const [datos, setDatos] = useState([]);
    const navigation =useNavigate();
    const  showUsers2  = useSelector(store => store.listaUsers.listUsers)
    //inicio estadisticas
    //llamar al usuario que se esat revisando
    const gitUserSta = useSelector((state) => state.newGitUser.showUsers[0].gituser);
    //const gitUserSta2=[gitUserSta].gituser

    console.log(gitUserSta)
    
   // console.log(gitUserSta2)
    //cantidad de paginas del ususario actual
  //  const [allpages, setAllpages] = useState(0)
    //cantidad de repos de usuario actual
   // const [allrepos, setAllrepos] = useState(0)
    //paginas recorridas
   // const [seenPages, setSeenPages] = useState(0);



    /* let allInfo={
      totalPages:waitALLPages ,
      totalRepos:waitAllRepos ,
      vistasPage:waitPagePagi,
      userGit: gitUserSta,
    }*/


    const [stadistic, setStadistic] = useState({})
    console.log(setStadistic);
  
//llamar usuario para trabajarlo
//funcion para traer los datos de los repos por el local storage
//const seePagesEval=()=>{
  let waitPagePagi2 = localStorage.getItem('realPage');
  let waitALLPages2 = localStorage.getItem('allpages');
  let waitAllRepos2 = localStorage.getItem('allrepos');
  //convertir para leer
  let waitPagePagi = JSON.parse(waitPagePagi2)
  let waitALLPages = JSON.parse(waitALLPages2)
  let waitAllRepos = JSON.parse(waitAllRepos2)
  console.log(waitPagePagi);
  console.log(waitALLPages);
  console.log(waitAllRepos);
  const allInfo = () => {
    setStadistic({
      totalPages:waitALLPages ,
      totalRepos:waitAllRepos ,
      vistasPage:waitPagePagi,
      userGit: gitUserSta,
    });
}


 /* let allInfo={
    totalPages:waitALLPages ,
    totalRepos:waitAllRepos ,
    vistasPage:waitPagePagi,
    userGit: gitUserSta,*/
  //}
 

   //setStadistic(allInfo)

 

//}

//seePagesEval()
// crear OBJETO para enviarlo a firebase para usarlo CON UN 




/*

    const estadisticis = () => {
   
      const paginaVista=[currentPagination]
      console.log(paginaVista)
      let vistaSave=[]
      console.log(vistaSave)
    //  console.log(vistaSave)
       if (paginaVista > 0){
         let tempPage;
         tempPage= [paginaVista].filter((element)=>{
           return !element.includes(tempPage)
                 
         }
         )
         vistaSave.splice(currentPagination, 0,...tempPage);
         tempPage=tempPage.length++
         console.log(tempPage) 
         
         console.log(currentPagination)
   
       } 
     };
   
   /* let userSearch = event.target.value;
   if (userSearch.length >= 3) {
     let temporal = repos.filter((element) => {
       return element.name.includes(userSearch);
     });
     console.log(temporal);
     setFilterRepos([...temporal]);
     setCurrentPagination(1);
   } else {
     setFilterRepos([...repos]);
   }*/



    //const matriz = [];
   /* let k = 0;
    for (k; k<=totalPages; ++k) {   
      matriz.push(k);
      break
     }*/
    /* let arr = [];
    arr[currentPagination][arr.length]= currentPagination;
   
    console.log(arr);*/
 
    // console.log(matriz)
    
   /*  let removeItemFromArr = ( matriz, currentPagination ) => {
      var i = arr.indexOf( item );
      i !== -1 && arr.splice( i, 1 );
  };*/
   /*  const copyMatriz = [].concat(matriz)
     if (copyMatriz){
      let copyMatriz2=[].concat(copyMatriz)
      localStorage.setItem('myArray', JSON.stringify(copyMatriz2));
      let esperoArray = localStorage.getItem('myArray');
      let esperoArray2 = JSON.parse(esperoArray);*/
    /*  let m=currentPagination;
      const h=[];
     // console.log(h)
      for(m; m<=totalPages; m++){
         h.push(m)
         if (m===totalPages){
         break
        }*/

      
      
   //   delete(esperoArray2[currentPagination])

   //  console.log(esperoArray2)
   //   console.log(copyMatriz)
      
     //}
   
    // let si = matriz.splice(currentPagination, 1)
      
   //delete(ojala[currentPagination])
  // if(copyMatriz){
  //  delete(copyMatriz[currentPagination])}
   // delete(matriz[paginaVista++])
   //ojala.splice(currentPagination, 1);

 //   console.log(ojala)
 //  }
   //  console.log(matriz)
   // console.log(copyMatriz)
   //console.log(nose)


   /* let pagesTotal= [...Array(totalPages).keys()].map((_,i)=>{
      return(
        i+1
      )
    })
     
    let seeTotal= [...Array(paginaVista).keys()].map((_,i)=>{
      return(
        i+1
      )
    })*/
    //console.log(seeTotal)


   // let seenPages=(pagesTotal.filter(element => !paginaVista.includes(element)))
    //let quedan=[seenPages-currentPagination]
   // let cantudad=seenPages.lenght;
    //console.log(cantudad)
   // if(seenPages.length < pagesTotal.lenght){
      
    //  let seenPagesMenor=seenPages;
     // let seenPagesMenor2=(seenPages.filter(element => !paginaVista.delete(element)))
    //  console.log(seenPagesMenor2)
   // }







    useEffect(() => {

        dispatch(listGituserAsync()); 
        dispatch(keepNameAsyncEval());
        
    }, [dispatch, stadistic ])


    const editar = (gitdata) => {
        setModal(true)
        setDatos(gitdata) 
       
    }
    const getRepos=(gitUser )=>{
        dispatch(actionRepoSync(gitUser))
        navigation('/repos')   
      }
     
      const aluser=(gitUser )=>{
      //  dispatch(actionRepoSync(gitUser))
        navigation('/editar')   
      }
     

  return (
    <div>
      <TableInfo22>
        <>
          <TitleTable55>
            Evaluator {nombre.keepName} these all the register users
          </TitleTable55>
        </>
        <Table22>
          <thead>
            <tr>
              <th>GituserName</th>
              <th>Revition state</th>
              <th>Evaluator Name</th>
              <th>Global Stadestics</th>
              <th>Individual stadistic</th>
              <th>Repos number</th>
           
            </tr>
          </thead>
          <tbody>
            {showUsers2?.map((p, index) => (
              <tr key={index}>
                <TableTd22>{p?.name}</TableTd22>
                <TableTd22>{p?.lastname}</TableTd22>
                <TableTd22>{p?.eval}</TableTd22>
                <TableTd22>{p?.phone}</TableTd22>
                <TableT25
                  onClick={() => {getRepos(p?.gituser); }}>{p?.gituser}
                </TableT25>
                <TableTd22  onClick={() => {aluser(); }}>{p?.idcard}</TableTd22>
                <TableTd22>{p?.date}</TableTd22>
                <TableTd223>
                  <LisitImg src={p.foto} alt="" />
                </TableTd223>

                <TableThn>
                  <ImgTables onClick={() => editar(p)}>
                    <AiOutlineEdit />
                  </ImgTables>
                  <br />
                  <ImgTables2
                    onClick={() => dispatch(deletGituserAsync(p.idcard))}
                  >
                    <BsFillTrashFill />
                  </ImgTables2>
                </TableThn>
              </tr>
            ))}
          </tbody>
        </Table22>

        {modal === true ? <EditNew datos={datos} setModal={setModal} /> : ""}
      </TableInfo22>
    </div>
  );
}
