
import { useEffect } from 'react';
import  Navbar  from '../home/NavBar';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteUserData, readInfoUser } from '../../redux/actions/userSave';
import { Cambio2, ImgTables, ImgTables2, RegisterButton3, Table2, TableInfo, TableTd, TableTh } from '../../styled/StyledComponents';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { actionRepoSync } from '../../redux/actions/actionRepo';
            


//import { deleteDate, readDate } from '../../Redux/Actions/citasAction';

const Table = ({ setEdit }) => {
  

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

  /*const actionEdit = (email) => {
    setEdit( email )
    
  }*/

  useEffect(() => {
    dispatch(readInfoUser())
   }, [dispatch])
   

  return (
    <>
 
    <TableInfo>
    <Navbar/>
      <h1>Bienvenido nombre admin</h1>
 
  <Table2>
    {/* <!-- head --> */}
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
        <tr onClick={()=>{getRepos(gituser)}} key={ idx }>
          <TableTd>{ name }</TableTd>
          <TableTd>{ email }</TableTd>
          <TableTd>{ phone }</TableTd>
          <TableTd>{ gituser }</TableTd>
          <TableTd>{ idcard }</TableTd>
          <TableTd>{ date }</TableTd>
          <TableTh>
              <ImgTables /*onClick={()=> actionEdit(email)}*/><AiOutlineEdit/></ImgTables>
              <ImgTables2  onClick={() => actionDelete(email) }><BsFillTrashFill/></ImgTables2>
          </TableTh>
          
        </tr>
      ))
      
    }  
    </tbody>
  </Table2>
  
</TableInfo>
              <RegisterButton3>
                  <Link to='/saveuser'><Cambio2>pasar salvar datos</Cambio2></Link>  
              </RegisterButton3>
</>
  )
}

export default Table