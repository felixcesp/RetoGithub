import React, { useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

//import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';


import { deletGituserAsync,evalGituserAsync,listGituserAsync} from '../redux/actions/actionEdit';
import { actionRepoSync } from '../redux/actions/actionRepo';
import { EstatisTics,ImgTables, ImgTables2, LisitImg, Table22,TableInfo52, TableT25, TableTd22,TableTd223,TableThn, TitleMainTh, TitleMainTr,TitleTable87, EstadisBoton, TitleTable97 } from '../styled/StyledComponents';
import EditNew from './EditarNew';
import NavBarUser from '../components/home/NavbarUser'
import { useNavigate } from 'react-router-dom';
import { keepNameAsyncEval, listEvaluatorAsync } from '../redux/actions/actionLogPhone';
import { actionAsyncStadistic } from '../redux/actions/actionStadistic';
import moment from 'moment';
import PiePage from './home/PiePage';




const AlluserAll = () => {
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
   

    let confirmed=[] 
    console.log(confirmed)



    const eliminarData =(idcard)=>{
   
        let idsAll=[]
        console.log(idsAll)
     yourUsers.forEach((element)=>{
        let idcard =element.idcard
        idsAll.push({
            idcard
        })})  
        idsAll.forEach((element)=>{ 
           let comapre=element.idcard
           console.log(comapre)
            if(comapre===idcard){    
            confirmed.push(idcard) 
            console.log(confirmed) 
            if( confirmed=== idcard){
                console.log(idcard) 
                dispatch(deletGituserAsync(idcard))
            }
            } 
            else{
                  alert('Couldnt do this action, it is not you user')
              }
           
             });
            

    }





   // const eliminar1=(idcard)=>{
         // let copareL=eliminarData();
        //  console.log(copareL)
   // }
 
    
   


    //para accionar las acciones ya que no resiven parametros y para algunas veces retear el anterio dato
    useEffect(() => {
        dispatch(listGituserAsync()); 
        dispatch(listEvaluatorAsync())
        dispatch(evalGituserAsync())
        dispatch(keepNameAsyncEval())
       // getData()
  
     //   dispatch(actionAsyncStadistic())
    }, [dispatch])


    
    const editar = (gitdata) => {
        setModal(true)
        setDatos(gitdata) 
    }
    const getRepos=(gitUser)=>{
      
      //  console.log(arrayCheched)
        dispatch(actionRepoSync(gitUser))
        navigation('/repos');
        dispatch(actionAsyncStadistic())
      
       // checkedDate.push([].concat(creationDateP))
       //  dispatch(dateGituserAsync(checkedDate))
      
      }
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
                                <TableT25  onClick={()=>{getRepos(p?.gituser)}}>{p?.gituser}</TableT25>
                                <TableTd22>{p?.idcard}</TableTd22>
                                <TableTd22>{p?.date}</TableTd22>
                                <TableTd223><LisitImg src={p.foto} alt="" /></TableTd223>
                             
                               

          <TableThn>
              <ImgTables  onClick={() => editar(p)} ><AiOutlineEdit/></ImgTables><br />
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