import React, { useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

//import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';


import { deletGituserAsync,evalGituserAsync,listGituserAsync} from '../redux/actions/actionEdit';
import { actionRepoSync } from '../redux/actions/actionRepo';
import { ImgTables, ImgTables2, LisitImg, Table22,TableInfo22, TableT25, TableTd22,TableTd223,TableThn, TitleTable55 } from '../styled/StyledComponents';
import EditNew from './EditarNew';
import NavBarUser from '../components/home/NavbarUser'
import { useNavigate } from 'react-router-dom';
import { keepNameAsyncEval, listEvaluatorAsync } from '../redux/actions/actionLogPhone';
import { actionAsyncStadistic } from '../redux/actions/actionStadistic';
import moment from 'moment';




const ListEdit = () => {
    const nombre= useSelector(state => state.keepName);
    //console.log(nombre)
  

    const dispatch = useDispatch()
    //manejo el estado del modal activo o no
    const [modal, setModal] = useState(false);
    //manejar para enviar los datos
    const [datos, setDatos] = useState([]);
    const navigation =useNavigate();

    const  showUsers  = useSelector(store => store.listaUsers.listUsers)
    const showEvaluators= useSelector(state => state.allEvaluators.seeAll)
    const yourUsers= useSelector(state=> state.userEspecific.finalGitGotten)
    //console.log(yourUsers)
    //esatdo de fechas de chequeo
    
   


    //para accionar las acciones ya que no resiven parametros y para algunas veces retear el anterio dato
    useEffect(() => {
        dispatch(listGituserAsync()); 
        dispatch(listEvaluatorAsync())
        dispatch(evalGituserAsync())
        dispatch(keepNameAsyncEval())
        getData()
  
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
      const aluser=(gitUser )=>{
        //  dispatch(actionRepoSync(gitUser))
          navigation('/all')   
        } 
        
       /* let arrayCheched=[]
          console.log(arrayCheched)
        const hola =()=>{
        if (arrayCheched.lenght === 0){
         console.log(arrayCheched)
        }else{
          let checkedDateIn =moment().format('MMMM Do YYYY, h:mm:ss a');
          console.log(checkedDateIn)
        arrayCheched.push([].concat(checkedDateIn))
        }}*/
       
       // console.log(arrayCheched)
     
      /* const getData = async()=>{
        let res = await fetch (url);
        let data= await res.json();
        console.log(data)
       }*/
  /*
       let url= '../dataFechas/checkedDates.json'
       
        fetch(url)
        .then((resolve)=>{ 
            resolve.json()  
            console.log(resolve)}) 
        .then(data=> console.log(data))*/
       // .catch('NO HAY DATA')     
      // ala()
    /*  const getData=()=>{
        fetch('../data.JSON'
       /* ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }*/
     /*   )
          .then(function(response){
            console.log(response)
           
            return response.json();
          })     
         .then(function(myJson) {
          let siisis = JSON.parse(myJson);
           console.log(siisis);
          });*/
    //  }
  
    async function getData(){
    
      try{
        const response =  await import('../jsons/checkedDates.json')
        console.log(response.checkeddates)
        return response.json();
        
      }catch(err){
        return err
      }
    }
     
   
    fetch( '../jsons/checkedDates.json')  
.then((response) => {response.json()
  console.log(response)
}).catch((reject)=>{
  console.log(reject)
}).finally(()=>console.log('peticio terminada'))




        


    return (
        <>
             <TableInfo22>
        <NavBarUser/>
            <>
              <TitleTable55>
Evaluator {nombre.keepName} these are your users</TitleTable55>
            </>
            <Table22>
                <thead>
                <tr>
        <th>Name</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Github user</th>
        <th>Id card</th>
        <th>Birthdate</th>
        <th>Photo</th>
      </tr>
                </thead>
                <tbody>
                    {
                        yourUsers?.map((y, index) => (
                          
                            <tr key={index}>
                                   
                                <TableTd22>{y.name}</TableTd22>
                                <TableTd22>{y.lastname}</TableTd22>
                                <TableTd22>{y.email}</TableTd22>
                                <TableTd22>{y.phone}</TableTd22>
                                <TableT25  onClick={()=>{getRepos(y.gituser)}}>{y.gituser}</TableT25>
                                <TableTd22>{y.idcard}</TableTd22>
                                <TableTd22>{y.date}</TableTd22>
                                <TableTd223><LisitImg src={y.foto} alt="" /></TableTd223>
                             
                               

          <TableThn>
              <ImgTables  onClick={() => editar(y)} ><AiOutlineEdit/></ImgTables><br />
              <ImgTables2 onClick={() => dispatch(deletGituserAsync(y.idcard))} ><BsFillTrashFill/></ImgTables2>
          </TableThn>
                            </tr>
                        ))
                    }

                </tbody>
            </Table22>

            {
                modal === true ? <EditNew datos={datos} setModal={setModal} /> : ''
            }

        </TableInfo22>







        <TableInfo22>
 
            <>
              <TitleTable55>
Evaluator {nombre.keepName} these all the register users</TitleTable55>
            </>
            <Table22>
                <thead>
                <tr>
        <th>Name</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Github user</th>
        <th>Id card</th>
        <th>Birthdate</th>
        <th>Photo</th>
        
      </tr>
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
                                <TableTd22  onClick={()=>{aluser()}}>{p?.idcard}</TableTd22>
                                <TableTd22>{p?.date}</TableTd22>
                                <TableTd223><LisitImg src={p.foto} alt="" /></TableTd223>
                             
                               

          <TableThn>
              <ImgTables  onClick={() => editar(p)} ><AiOutlineEdit/></ImgTables><br />
              <ImgTables2 onClick={() => dispatch(deletGituserAsync(p.idcard))} ><BsFillTrashFill/></ImgTables2>
          </TableThn>
                            </tr>
                        ))
                    }

                </tbody>
            </Table22>

            {
                modal === true ? <EditNew datos={datos} setModal={setModal} /> : ''
            }

        </TableInfo22>


        <TableInfo22>
 
            <>
              <TitleTable55>
{nombre.keepName} these are all the evaluators who are registered</TitleTable55>
            </>
            <Table22>
                <thead>
                <tr>
        <th>Name and last name</th>
        <th>Email</th>
        <th>pass</th>
        <th>phone</th>
        <th>Photo</th>
      </tr>
                </thead>
                <tbody>
                    {
                        showEvaluators?.map((eva, idx) => (
                            <tr key={idx}>
                            
                                <TableTd22>{eva?.nombre}</TableTd22>
                                <TableTd22>{eva?.email}</TableTd22>
                                <TableTd22>{eva?.pass}</TableTd22>
                                <TableTd22>{eva?.phone}</TableTd22>
                              {/*  <TableT25  onClick={()=>{getRepos(p.gituser)}}>{eva.phone}</TableT25>*/}
                                <TableTd223><LisitImg src={eva?.foto} alt="" /></TableTd223>
                             
                               

                            </tr>
                        ))
                    }

                </tbody>
            </Table22>


        </TableInfo22>
        </>
    );
};

export default ListEdit;