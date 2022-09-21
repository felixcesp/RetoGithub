/*
import { useEffect } from 'react';
import  Navbar  from '../home/NavBar';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { deleteUserData, readInfoUser } from '../../redux/actions/userSave';
import { ImgTables, ImgTables2, Table2, TableInfo, TableT25, TableTd, TableTh, TitleTable55} from '../../styled/StyledComponents';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { actionRepoSync } from '../../redux/actions/actionRepo';



const Table = ({ setEdit }) => {
  
  const nombre= useSelector(state => state.login);
  //forma vacana
 // const usardatos = useSelector( state => state.saveUser)
 // console.log(usardatos)
 //forma desestructurada
 const {saveUser} = useSelector( state => state)
 const navigate=useNavigate();


 const getRepos=(gitUser)=>{
   dispatch(actionRepoSync(gitUser))
    navigate('/repos')

 }



  const dispatch = useDispatch();

  const actionDelete = (email) => {
    dispatch( deleteUserData(email) )
  }

  const actionEdit = (email) => {
    setEdit( email )
    navigate("/saveuser");
    
  }

  useEffect(() => {
    dispatch(readInfoUser())
   }, [dispatch])
   

  return (
    <>
 
    <TableInfo>
    <Navbar/>
      <>
      <TitleTable55>Bienvenido   {nombre.nombre} </TitleTable55>
       </>
  <Table2>
    /*
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Github user</th>
        <th>Id card</th>
        <th>Birthdate</th>
      </tr>
    </thead>
    <tbody>
        
    {
        
      saveUser.map( ({ name, email,phone, gituser, idcard, date}, idx) => (
        <tr  key={ idx }>
          <TableTd>{ name }</TableTd>
          <TableTd>{ email }</TableTd>
          <TableTd>{ phone }</TableTd>
          <TableT25 onClick={()=>{getRepos(gituser)}}>{ gituser }</TableT25>
          <TableTd>{ idcard }</TableTd>
          <TableTd>{ date }</TableTd>
          <TableTh>
              <ImgTables onClick={()=> actionEdit(email)}><AiOutlineEdit/></ImgTables>
              <ImgTables2  onClick={() => actionDelete(email) }><BsFillTrashFill/></ImgTables2>
          </TableTh>
          
        </tr>
      ))
      
    }  
    </tbody>
  </Table2>
  
</TableInfo>
            
</>
  )
}

export default Table*/