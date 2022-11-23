import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionLogoutAsyn } from '../../redux/actions/actionLogin';
import { keepNameAsyncEval } from '../../redux/actions/actionLogPhone';
import '../../styled/navbarhome.css'


function NavbarHome() {
  const dispatch = useDispatch()
 
  const nombreHome= useSelector(state => state.keepName);
  console.log(nombreHome)
  useEffect(() => {
    dispatch(keepNameAsyncEval())
}, [dispatch])


 
  return (
    <div className='all18'>
    <nav className='nav18'> 
     
  <div className='icon18'>
<img className='editicon18' src="https://res.cloudinary.com/felixces/image/upload/v1668817046/Retogithub/iconoblue_ls9toh.png" alt=""/>

 </div>
 <div className='namewith18'>
 <h1 className='evalu18'>Welcome {nombreHome.keepName}</h1>
 </div>
 <div className='navmenu18'>

      <ul className='ulspace18'>
          <li className='submenu18'><a href="##">Evaluador sesion</a>
              <ul>
              <li onClick={() => dispatch(actionLogoutAsyn())}><Link to='/login'>Cerra sesion</Link></li>          
              </ul>
          </li>
        </ul>              

  </div>
</nav>
</div>
  )
}

export default NavbarHome