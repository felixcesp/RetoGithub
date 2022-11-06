import arrayUnion from 'array-union';
import Moment from 'react-moment';
import React, { Fragment, useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import { deletGituserAsync, listGituserAsync } from "../redux/actions/actionEdit";
import { keepNameAsyncEval } from "../redux/actions/actionLogPhone";
import { actionRepoSync } from "../redux/actions/actionRepo";
//import { actionAsyncStadistic } from "../redux/actions/actionStadistic";
import { ImgTables, ImgTables2, LisitImg, Table22, TableInfo22, TableT25, TableTd22, TableTd223, TableThn, TitleTable55 } from "../styled/StyledComponents";
import EditNew from "./EditarNew";
import moment from 'moment';

export default function UserAllGitEsta() {

    const nombre= useSelector(state => state.keepName);
    const dispatch = useDispatch()
    //manejo el estado del modal activo o no
    const [modal, setModal] = useState(false);
    //manejar para enviar los datos
    const [datos, setDatos] = useState([]);
    const navigation =useNavigate();
    const  showUsers2  = useSelector(store => store.listaUsers.listUsers)
    //ESTADO PARA REVISION O COMPLETADO O IMCOMPLETO
    const [checked, setChecked] = useState('')
    //ESTADO DE PORCENTAJE CHEQUEADO
    const [percent, setPercent] = useState('')







    //PROCESO PARA LA CREACION DE ESATDISTICAS Y GRAFICAS
    //1 LLAMAMOS AL HOOK QUE CREAMOS USEFORM PARA METER EL OBJETO, USANDO LOS ESTADO 
    //CREADOS ANTERIORMENTE METEREMOS LOS DATOS QUE TENGAMOS
 

    const [formValue, handleInputChange, reset]= useForm({
      pagesRepos: '',
      ReposCount:'',
      checkPages: '',
      leftPages: '',
      pageSeenNumbers:'',
      pagesLeftNumber:'',
      gituser:'',
      checkSate: '',
      checkSatePercent: '',
      dateCreation:'',
      lastCheckDate: '',
      checkedTime:{
        lastTime:'',
        generalTime:''
      },
      languagesDevRepo:{
        phyton:'',
        java:'',
        javaScrypt:'',
        undifined:''
      },
      BranchRepos:{
        master:'',
        main:'',
        other:''
      }
  

  })



    //creamos funcion nueva para almacenar un objeto con todas las estadisticas
    //aca usaremos el useForm
    const getStadistic=(p)=>{
      //el boton ver envia la data del ususario que esta en el estado showusers
      //creamos una variable que nos va a resivir solo ese array de redux
      let pagesIn=p.estadistic
      console.log(pagesIn)
     //EXTRAER VALOR VARIABLES 1 CATIDAD DE PAGINAS
     let pagesOut= pagesIn.map((elemnt)=>{  
       let allPages=elemnt.totapages
       return (
        allPages
       )
      })
      console.log(pagesOut);
       //EXTRAER VALOR VARIABLES 2 CATIDAD DE REPOS
     let reposOut= pagesIn.map((elemnt)=>{  
      let allRepos=elemnt.totarepso
      return (
       allRepos  
      )
     })
     console.log(reposOut);
   

  //VARIABLES DE PAGINAS VISTAS Y FALTANTES
  //paginas vistas guardar en arreglo
  let pagesCurrentin=p.currentPage
      let runPages=[];  
      pagesCurrentin.map((elemnt1)=>{
        return (
         runPages.push(elemnt1.vistapage)  
        )
       })
      //VARIABLE PAGINAS cantidad vistas
      let seenP= pagesCurrentin.length
      //variables pagina cantidad faltantes
      let leftPages= pagesOut-seenP; 
      console.log(pagesCurrentin)
      console.log(seenP)
      console.log(leftPages)
    //CONSOLE PARA VER LAS PAGINA QUE HA VISTO ES DECIR ARREGLO CON LAS PAGINAS
    console.log(runPages)

    //variable paginas que no han visto
    //PRIMERO CREAMOS ARRAY CON EL NUMERO DE PAGINAS TOTALES DEL USUSARIO
    let pagesTotal= [...Array(pagesOut[0]).keys()].map((_,i)=>{
      return(
        i+1
      )
    })
   console.log(pagesTotal)
        //tenemos ya dos arreglos con todas las paginas y las paginas vistas
     //para hallar las paginas que nos han visto se debe hacer la diferencias
     //de conjuntos en este caso de array
   let difference = pagesTotal.filter(x => !runPages.includes(x))
   console.log(difference)
     
//estado de paginas chequeadas variable
//se hace una funcion con regla de tres resive solo las paginas que quedan
const stateSeen=(leftPages )=>{

    if(leftPages===0){
       setChecked('COMPLETED')
    }else{
      setChecked('INCOMPLETED')
    }

}
stateSeen(leftPages);
console.log(checked)

//variable del porcentaje del estado chekeado
const statePercent=(pagesOut, seenP )=>{
let percentFinal= (seenP*100)/pagesOut;
setPercent(percentFinal)
}
statePercent(pagesOut,seenP);
console.log(percent +'%')


const dateya=moment()
const fecha = new Date();
console.log(dateya)
console.log(dateya._d)
console.log(fecha)

let day = fecha.getDate();
 
// `getMonth()` devuelve el mes (de 0 a 11)
let month = fecha.getMonth() + 1;
 
// `getFullYear()` devuelve el año completo
let year = fecha.getFullYear();
 
// muestra la fecha de hoy en formato `MM/DD/YYYY`
console.log(`${month}/${day}/${year}`);


          



/*const dateTimeAgo = moment(Date.now()).fromNow(dateya);

console.log(dateTimeAgo);*/


     // const difference1 = pagesTotal.filter(x => !runPages.includes(x));
     // const difference2 = runPages.filter(x => !pagesTotal.includes(x))
      //const symmetric = difference1.concat(difference2)
    
     // console.log(difference1)
     // console.log(difference2)
     // console.log(symmetric)

      


   

    
  




      
  
     
    }
   




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
       

    }, [dispatch])


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
              <th>User Name</th>
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
                <TableT25  onClick={()=>{getStadistic(p)}}>ver</TableT25>
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
        <div>
          







        </div>

        {modal === true ? <EditNew datos={datos} setModal={setModal} /> : ""}
      </TableInfo22>
    </div>
  );
}
