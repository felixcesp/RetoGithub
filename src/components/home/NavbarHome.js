import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { actionLogoutAsyn } from '../../redux/actions/actionLogin';
import { keepNameAsyncEval } from '../../redux/actions/actionLogPhone';
import { actionAsyncStadistic } from '../../redux/actions/actionStadistic';
import '../../styled/navbar.css'


function NavbarHome() {
  const dispatch = useDispatch()
  const navigation =useNavigate();
  const nombreHome= useSelector(state => state.keepName);
  console.log(nombreHome)
  useEffect(() => {
    dispatch(keepNameAsyncEval())
}, [dispatch])


  const back=()=>{
    navigation('/login')
    dispatch(actionAsyncStadistic())
  }
  return (
    <div className='all22'>
    <nav className='nav22'> 
     
  <div className='icon'>
<img className='editicon22' src="https://res.cloudinary.com/felixces/image/upload/v1668817046/Retogithub/iconoblue_ls9toh.png" alt=""/>

 </div>
 <div className='namewith'>
 <h1 className='evalu'>Welcome {nombreHome.keepName}</h1>
 </div>
 <div className='navmenu'>

      <ul className='ulspace'>
          <li className='submenu2'><a href="##">Evaluador sesion</a>
              <ul>
              <li onClick={() => dispatch(actionLogoutAsyn())}><Link to='/login'>Cerra sesion</Link></li>
                  <li onClick={()=>{back()}}>Volver</li>
              </ul>
          </li>
        </ul>              

  </div>
</nav>
</div>
  )
}

export default NavbarHome