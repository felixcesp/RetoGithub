import React, { useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { deletGituserAsync,evalGituserAsync,listGituserAsync} from '../redux/actions/actionEdit';
import { actionRepoSync } from '../redux/actions/actionRepo';
import { EstadisBoton, EstadisBoton46, EstatisTics, EstatisTics25, HideDive25, ImgTables, ImgTables2, LisitImg, Table22,TableInfo52, TableInfo59, TableT25, TableT67, TableTd22,TableTd223,TableThn, TitleMainTh, TitleMainTr, TitleTable27, TitleTable57 } from '../styled/StyledComponents';
import EditNew from './EditarNew';
import NavBarUser from '../components/home/NavbarUser'
import { useNavigate } from 'react-router-dom';
import { keepNameAsyncEval, listEvaluatorAsync } from '../redux/actions/actionLogPhone';
import { actionAsyncStadistic } from '../redux/actions/actionStadistic';
import PiePage from '../components/home/PiePage'
import NavBarEsta from './home/NavBarEsta';
import '../styled/main.css'



const CheckRepos = () => {
    const nombre= useSelector(state => state.keepName);
    const dispatch = useDispatch()
    //manejo el estado del modal activo o no
    const [modal, setModal] = useState(false);
    //manejar para enviar los datos
    const [datos, setDatos] = useState([]);
    const navigation =useNavigate();
    const yourUsers= useSelector(state=> state.userEspecific.finalGitGotten)
    const actualUser= useSelector(actual=> actual.newGitUser.showUsers)
   // console.log(actualUser)

    //PARA OCULTAR EL DIV
    const [hideWithCss, setHideWithCss] = useState('hidediv')
    const hidediv=()=>{
        setHideWithCss('hidediv')
      }
      const showdiv=()=>{
        setHideWithCss('showdiv')
      }
    //para accionar las acciones ya que no resiven parametros y para algunas veces retear el anterio dato
    useEffect(() => {
        dispatch(listGituserAsync()); 
        dispatch(listEvaluatorAsync())
        dispatch(evalGituserAsync())
        dispatch(keepNameAsyncEval())
       /* dispatch(editGituserAsync())*/
        
        
    }, [dispatch])


    
    const editar = (gitdata) => {
        setModal(true)
        setDatos(gitdata) 
    }
    const getRepos=(gitUser)=>{
        dispatch(actionRepoSync(gitUser))
        navigation('/repos');
        dispatch(actionAsyncStadistic())    
      }

    return (
        <>
             <TableInfo52>
             <NavBarEsta/>
            <>
              <TitleTable57>
Evaluator {nombre.keepName} check your actual user</TitleTable57>
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
                  
                          
                            <tr>
                                   
                                <TableTd22>{actualUser[0]?.name}</TableTd22>
                                <TableTd22>{actualUser[0]?.lastname}</TableTd22>
                                <TableTd22>{actualUser[0]?.email}</TableTd22>
                                <TableTd22>{actualUser[0]?.phone}</TableTd22>
                                <TableT25  onClick={()=>{getRepos(actualUser[0]?.gituser)}}>{actualUser[0]?.gituser}</TableT25>
                                <TableTd22>{actualUser[0]?.idcard}</TableTd22>
                                <TableTd22>{actualUser[0]?.date}</TableTd22>
                                <TableTd223><LisitImg src={actualUser[0]?.foto} alt="" /></TableTd223>
                             
                               

          <TableThn>
              <ImgTables  onClick={() => editar(actualUser[0])} ><AiOutlineEdit/></ImgTables><br />
              <ImgTables2 onClick={() => dispatch(deletGituserAsync(actualUser[0]?.idcard))} ><BsFillTrashFill/></ImgTables2>
          </TableThn>
                            </tr>
                        
                    

                </tbody>
            </Table22>

            {
                modal === true ? <EditNew datos={datos} setModal={setModal} /> : ''
            }
                <HideDive25>   
           
                <div>
                    <EstatisTics25  src="https://res.cloudinary.com/felixces/image/upload/v1669329474/Retogithub/open_sm3xrh.jpg" alt="" 
                onClick={()=>{showdiv()}}/>
                <EstadisBoton46>Check All users</EstadisBoton46>
                </div>
                <div>
                    <EstatisTics25  src="https://res.cloudinary.com/felixces/image/upload/v1669329927/Retogithub/close1_szzm6h.jpg" alt="" 
                onClick={()=>{hidediv()}}/>
                </div>
                </HideDive25> 
        </TableInfo52>




         <div className={hideWithCss}>
         <TableInfo59>
         <TitleTable27>
        Evaluator check all your users</TitleTable27>
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
                        yourUsers?.map((y, index) => (
                          
                            <tr key={index}>
                                   
                                <TableTd22>{y?.name}</TableTd22>
                                <TableTd22>{y?.lastname}</TableTd22>
                                <TableTd22>{y?.email}</TableTd22>
                                <TableTd22>{y?.phone}</TableTd22>
                                <TableT25  onClick={()=>{getRepos(y?.gituser)}}>{y?.gituser}</TableT25>
                                <TableTd22>{y?.idcard}</TableTd22>
                                <TableTd22>{y?.date}</TableTd22>
                                <TableTd223><LisitImg src={y?.foto} alt="" /></TableTd223>
                             
                               

          <TableThn>
              <ImgTables  onClick={() => editar(y)} ><AiOutlineEdit/></ImgTables><br />
              <ImgTables2 onClick={() => dispatch(deletGituserAsync(y?.idcard))} ><BsFillTrashFill/></ImgTables2>
          </TableThn>
                            </tr>
                        ))
                    }

                </tbody>
            </Table22>
        </TableInfo59>
         </div>
         




        <PiePage/>
        </>
    );
};

export default CheckRepos;