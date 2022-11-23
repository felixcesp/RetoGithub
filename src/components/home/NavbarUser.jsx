import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { actionLogoutAsyn } from '../../redux/actions/actionLogin';
import { actionAsyncStadistic } from '../../redux/actions/actionStadistic';
import '../../styled/navbar.css'

function NavbarUser() {
  const dispatch = useDispatch()
  const navigation =useNavigate();
  
  const back=()=>{
    navigation('/home')
    dispatch(actionAsyncStadistic())
  }
  return (
    <div className='all2'>
    <nav> 
  <div className='icon'>
<img className='editicon' src="https://res.cloudinary.com/felixces/image/upload/v1662595256/Retogithub/iconogit3_iaqj6l.png" alt=""/>
 </div>
 <div className='navmenu'>
      <ul>
          <li className='submenu2'><a href="##">Evaluator session</a>
              <ul>
              <li onClick={() => dispatch(actionLogoutAsyn())}><Link to='/login'>Log out</Link></li>
                  <li onClick={()=>{back()}}>Home</li>
              </ul>
          </li>
        </ul>              

  </div>
</nav>
</div>
  )
}

export default NavbarUser