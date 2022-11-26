import React, { useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

//import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';


import { addGituserAsync, deletGituserAsync,evalGituserAsync,listGituserAsync} from '../redux/actions/actionEdit';
import { actionRepoSync } from '../redux/actions/actionRepo';
import { EstatisTics,ImgTables, ImgTables2, LisitImg, Table22,TableInfo52, TableT25, TableTd22,TableTd223,TableThn, TitleMainTh, TitleMainTr,TitleTable87, EstadisBoton, TitleTable97 } from '../styled/StyledComponents';
import EditNew from './EditarNew';
import NavBarUser from '../components/home/NavbarUser'
import { useNavigate } from 'react-router-dom';
import { keepNameAsyncEval, listEvaluatorAsync } from '../redux/actions/actionLogPhone';
import { actionAsyncStadistic } from '../redux/actions/actionStadistic';
import moment from 'moment';
import PiePage from './home/PiePage';




const AlluserAll = (setShow) => {
    const nombre= useSelector(state => state.keepName);
    //console.log(nombre)
   

    const dispatch = useDispatch()
    //manejo el estado del modal activo o no
    const [modal, setModal] = useState(false);
    //manejar para enviar los datos
    const [datos, setDatos] = useState([]);
    const navigation =useNavigate();

    const  showUsers  = useSelector(store => store.listaUsers.listUsers)
   
 //   const showEvaluators= useSelector(state => state.allEvaluators.seeAll)
    const yourUsers= useSelector(state=>state.userEspecific.finalGitGotten) 
    //eliminar con filtro
   

   /* let confirmed=[] 
    console.log(confirmed)*/
/*
    const searching = (event) => {
      let userSearch = event.target.value;
      if (userSearch.length >= 3) {
        let temporal = repos.filter((element) => {
          return element.name.includes(userSearch);
        });
      //  console.log(temporal);
        setFilterRepos([...temporal]);
        setCurrentPagination(1);
      } else {
        setFilterRepos([...repos]);
      }
      setPageNumber(Math.ceil(filterRepos.length / 5));
      setCurrentPage(
        filterRepos.slice(currentPagination * 5 - 5, currentPagination * 5)
      );
    };*/

    const eliminarData =(idcard)=>{
      let idsAll=[]
      let confirmed
      yourUsers.forEach((element)=>{
      let idcard =element.idcard
      idsAll.push({
        idcard
        })})  
        console.log(idsAll)  
      idsAll.forEach((element)=>{ 
          let comapre=element.idcard
          console.log(comapre)
           if(comapre===idcard){    
         /*  confirmed.push(idcard) */
         confirmed=idcard
           console.log(confirmed) 
           }     })
           if( confirmed=== idcard){
            let last=confirmed
            console.log(last) 
            dispatch(deletGituserAsync(idcard))
             alert('Success action')
           } else{
                 alert('Couldnt do this action, it is not your user')
             }
    }

    
    const editar =(gitdata,idcardi)=>{
      console.log(idcardi)
      let idsAlle=[]
      let confirmede
      yourUsers.forEach((element)=>{
      let idcarde =element.idcard
      idsAlle.push({
        idcarde
        })})  
        console.log(idsAlle)  
      idsAlle.forEach((element)=>{ 
          let comapree=element.idcarde
          console.log(comapree)
           if(comapree===idcardi){    
         /*  confirmed.push(idcard) */
         confirmede=idcardi
           console.log(confirmede) 
           }     })
           if( confirmede=== idcardi){
            let laste=confirmede
            console.log(laste) 
             alert('Success action')
             setModal(true)
             setDatos(gitdata) 
          
            
           }
           else{
                 alert('Couldnt do this action, it is not your user')
             }
    }

    //reiniciar modal
  

    /*window.location.reload();*/
  

        
    const veryRepos =(gitUser,idcardo)=>{
      console.log(idcardo)
      let idsAllo=[]
      let confirmedo
      yourUsers.forEach((element)=>{
      let idcardo =element.idcard
      idsAllo.push({
        idcardo
        })})  
        console.log(idsAllo)  
      idsAllo.forEach((element)=>{ 
          let comapreo=element.idcardo
          console.log(comapreo)
           if(comapreo===idcardo){    
         /*  confirmed.push(idcard) */
         confirmedo=idcardo
           console.log(confirmedo) 
           }     })
           if( confirmedo=== idcardo){
            let lasto=confirmedo
            console.log(lasto) 
             alert('Success action')
             dispatch(actionRepoSync(gitUser))
             navigation('/repos');
             dispatch(actionAsyncStadistic())
            
           } else{
                 alert('Couldnt do this action, it is not your user')
             }
    }









    //para accionar las acciones ya que no resiven parametros y para algunas veces retear el anterio dato
    useEffect(() => {
        dispatch(listGituserAsync()); 
        dispatch(listEvaluatorAsync())
        dispatch(evalGituserAsync())
        dispatch(keepNameAsyncEval())
     
  

       // getData()
  
     //   dispatch(actionAsyncStadistic())
    }, [dispatch ])


    
  /*  const editar = (gitdata, idad) => {

        setModal(true)
        setDatos(gitdata) 
    }*/

   






    /*const getRepos=(gitUser)=>{
      
      //  console.log(arrayCheched)
        dispatch(actionRepoSync(gitUser))
        navigation('/repos');
        dispatch(actionAsyncStadistic())
      
       // checkedDate.push([].concat(creationDateP))
       //  dispatch(dateGituserAsync(checkedDate))
      
      }*/


      const estaUsers=(gitUser )=>{
        //  dispatch(actionRepoSync(gitUser))
          navigation('/all')   
        } 
  
  /*  async function getData(){
    
      try{
        const response =  await import('../jsons/checkedDates.json')
        console.log(response.checkeddates)
        return response.json();
        
      }catch(err){
        return err
      }
    }*/
    /* 
   
    fetch( '../jsons/checkedDates.json')  
.then((response) => {response.json()
  console.log(response)
}).catch((reject)=>{
  console.log(reject)
}).finally(()=>console.log('peticio terminada'))*/


    return (
        <>
        <TableInfo52>
        <NavBarUser/>
            <>
         
                <EstatisTics  src="https://res.cloudinary.com/felixces/image/upload/v1669219706/Retogithub/estadistica2_x0akac.jpg" alt="" 
                onClick={()=>{estaUsers()}}/>
                <EstadisBoton onClick={()=>{estaUsers()}}>check statistics</EstadisBoton>

              <TitleTable97>
           
Evaluator {nombre.keepName} these all the register users</TitleTable97>
            </>
            <Table22>
                <thead>
                <TitleMainTr>
        <TitleMainTh>Name</TitleMainTh>
        <TitleMainTh>Lastname</TitleMainTh>
        <TitleMainTh>Email</TitleMainTh>
        <TitleMainTh>Phone</TitleMainTh>
        <TitleMainTh>Github user</TitleMainTh>
        <TitleMainTh>Id card</TitleMainTh>
        <TitleMainTh>Birthdate</TitleMainTh>
        <TitleMainTh>Photo</TitleMainTh>
        <TitleMainTh>Act</TitleMainTh>
        
      </TitleMainTr>
                </thead>
                <tbody>
                    {
                        showUsers?.map((p, index) => (
                            <tr key={index}>
                            
                                <TableTd22>{p?.name}</TableTd22>
                                <TableTd22>{p?.lastname}</TableTd22>
                                <TableTd22>{p?.email}</TableTd22>
                                <TableTd22>{p?.phone}</TableTd22>
                                <TableT25  onClick={()=>{veryRepos(p?.gituser, p?.idcard)}}>{p?.gituser}</TableT25>
                                <TableTd22>{p?.idcard}</TableTd22>
                                <TableTd22>{p?.date}</TableTd22>
                                <TableTd223><LisitImg src={p.foto} alt="" /></TableTd223>
                             
                               

          <TableThn>
              <ImgTables  onClick={() => editar(p, p.idcard)} ><AiOutlineEdit/></ImgTables><br />
              <ImgTables2 onClick={() => eliminarData(p.idcard)}   ><BsFillTrashFill/></ImgTables2>
          </TableThn>
                            </tr>
                        ))
                    }

                </tbody>
            </Table22>

            {
                modal === true ? <EditNew datos={datos} setModal={setModal} /> : ''
            }

        </TableInfo52>

        <PiePage/>
 
        </>
    );
};

export default AlluserAll;