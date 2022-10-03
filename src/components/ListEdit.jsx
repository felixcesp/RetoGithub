import React, { useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

//import ReactImageMagnify from 'react-image-magnify';
import { useDispatch, useSelector } from 'react-redux';


import { deletGituserAsync,listGituserAsync} from '../redux/actions/actionEdit';
import { actionRepoSync } from '../redux/actions/actionRepo';
import { ImgTables, ImgTables2, LisitImg, Table22,TableInfo22, TableT25, TableTd22,TableTd223,TableThn, TitleTable55 } from '../styled/StyledComponents';
import EditNew from './EditarNew';
import NavBarUser from '../components/home/NavbarUser'
import { useNavigate } from 'react-router-dom';
import { listEvaluatorAsync } from '../redux/actions/actionLogPhone';


const ListEdit = () => {
    const nombre= useSelector(state => state.login);
  

    const dispatch = useDispatch()
    //manejo el estado del modal activo o no
    const [modal, setModal] = useState(false);
    //manejar para enviar los datos
    const [datos, setDatos] = useState([]);
    const navigation =useNavigate();

    const  showUsers  = useSelector(store => store.newGitUser.showUsers)
    localStorage.setItem('showUsers2', JSON.stringify(showUsers));
  
    let showUsuarios=localStorage.getItem('showUsers2');
    console.log(showUsuarios);

    /*let userSave = [];
    for(let x = 0; x <= showUsuarios.length; x++) {
    userSave.push(showUsuarios.key(x));
}
    console.log(showUsuarios)*/




    const showEvaluators= useSelector(state => state.logPhone.showEvaluators)
    localStorage.setItem('showEvaluators2', JSON.stringify(showEvaluators));
  
    let showEvaluator=localStorage.getItem('showEvaluators2');
  //  let userEval = [];
    showEvaluator.foreach((elemnt)=>{
       console.log(elemnt)
    })
    //for(let x = 0; x <= showEvaluator.length; x++) {
    //userEval.push((x.name));
    //console.log(userEval)
//}
 //  console.log(userEval)
   



    useEffect(() => {
        dispatch(listGituserAsync()); 
        dispatch(listEvaluatorAsync())
    }, [dispatch])


    
    const editar = (gitdata) => {
        setModal(true)
        setDatos(gitdata) 
    }
    const getRepos=(gitUser )=>{
        dispatch(actionRepoSync(gitUser))
        navigation('/repos')


        
        
      }
     


    return (
        <>
      
        <TableInfo22>
        <NavBarUser/>
            <>
              <TitleTable55>
Evaluator {nombre.nombre} these are your users</TitleTable55>
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
                        showUsers.map((p, index) => (
                            <tr key={index}>
                            
                                <TableTd22>{p.name}</TableTd22>
                                <TableTd22>{p.lastname}</TableTd22>
                                <TableTd22>{p.email}</TableTd22>
                                <TableTd22>{p.phone}</TableTd22>
                                <TableT25  onClick={()=>{getRepos(p.gituser)}}>{p.gituser}</TableT25>
                                <TableTd22>{p.idcard}</TableTd22>
                                <TableTd22>{p.date}</TableTd22>
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
{nombre.nombre} these are all the evaluators who are registered</TitleTable55>
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
                        showEvaluators.map((eva, idx) => (
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