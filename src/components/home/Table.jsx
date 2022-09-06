
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUserData, readInfoUser } from '../../redux/actions/userSave';
import { Cambio2, RegisterButton3, Table2, TableInfo } from '../../styled/StyledComponents';


//import { deleteDate, readDate } from '../../Redux/Actions/citasAction';

const Table = ({ setEdit }) => {
  

  //forma vacana
 // const usardatos = useSelector( state => state.saveUser)
 // console.log(usardatos)
 //forma desestructurada
 const {saveUser} = useSelector( state => state)



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
    <TableInfo>
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
        <tr key={ idx }>
          <th>{ name }</th>
          <td>{ email }</td>
          <td>{ phone }</td>
          <td>{ gituser }</td>
          <td>{ idcard }</td>
          <td>{ date }</td>
          <th>
              <button /*onClick={()=> actionEdit(email)}*/  className="btn btn-outline btn-warning">Edit</button>
              <button onClick={() => actionDelete(email) }  className="btn btn-outline btn-error">Delete</button>
          </th>
          
        </tr>
      ))
      
    }  
    </tbody>
  </Table2>
  <RegisterButton3>
                  <Link to='/saveuser'><Cambio2>pasar salvar datos</Cambio2></Link>  
              </RegisterButton3>
</TableInfo>
  )
}

export default Table