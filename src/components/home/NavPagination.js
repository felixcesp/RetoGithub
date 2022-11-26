import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { actionLogoutAsyn } from '../../redux/actions/actionLogin';
import { actionAsyncStadistic } from '../../redux/actions/actionStadistic';
import { actionRepoSync } from '../../redux/actions/actionRepo';
import '../../styled/pagination.css'
import { evalGituserAsync, listGituserAsync } from '../../redux/actions/actionEdit';
import { keepNameAsyncEval, listEvaluatorAsync } from '../../redux/actions/actionLogPhone';

function NavPagination() {
  const  currentUser  = useSelector(store => store.listaUsers.listUsers)
  const dispatch = useDispatch()
  const navigation =useNavigate();
  
  const back=()=>{
    navigation('/home')
    dispatch(actionAsyncStadistic())
  }
  const form=()=>{
    navigation('/antesrepo')
    dispatch(actionAsyncStadistic())
    dispatch(actionRepoSync())
  }



  return (
    <div className='all845'>
    <nav className='nav845'> 
  <div className='icon845'>
<img className='editicon845' src="https://res.cloudinary.com/felixces/image/upload/v1662595256/Retogithub/iconogit3_iaqj6l.png" alt=""/>
 </div>
 <div className='navmenu845'>
      <ul>
          <li className='submenu845'><a href="##">Evaluator session</a>
              <ul>
              <li onClick={() => dispatch(actionLogoutAsyn())}><Link to='/login'>Log out</Link></li>
                  <li onClick={()=>{back()}}>Home</li>
                  <li onClick={()=>{form()}}>Back</li>
              </ul>
          </li>
        </ul>              

  </div>
</nav>
</div>
  )
}

export default NavPagination