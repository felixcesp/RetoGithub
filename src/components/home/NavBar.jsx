import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { actionLogoutAsyn } from '../../redux/actions/actionLogin';
import '../../styled/navbar.css'

function NavBar() {
  const dispatch = useDispatch()
  const navigation =useNavigate();
  const back=()=>{
    navigation('/saveuser')
  }
  
 


  return (
    <div className='all2'>
          <nav> 
        <div className='icon'>
      <img className='editicon' src="https://res.cloudinary.com/felixces/image/upload/v1662595256/Retogithub/iconogit3_iaqj6l.png" alt=""/>
       </div>
       <div className='navmenu'>
            <ul>
                <li className='submenu2'><a href="##">Usuario</a>
                    <ul>
                        <li onClick={() => dispatch(actionLogoutAsyn())}><Link to='/login'> Cerra sesion</Link></li>
                        <li onClick={()=>{back()}}>Volver</li>
                    </ul>
                </li>
              </ul>              

        </div>
    </nav>
    </div>
  )
}

export default NavBar