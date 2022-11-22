import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function NavLand() {

    const dispatch = useDispatch()
    const navigation =useNavigate();
    const back=()=>{
        navigation('/login')
        dispatch()
      }
  return (
    <div className='all22'>
    <nav className='nav22'> 
     
  <div className='icon22'>
<img className='editicon22' src="https://res.cloudinary.com/felixces/image/upload/v1668817046/Retogithub/iconoblue_ls9toh.png" alt=""/>

 </div>
 <div className='namewith'>
 <h1 className='evalu'>Welcome people</h1>
 </div>
 <div className='navmenu22'>

      <ul className='ulspace'>
          <li className='submenu2'><a href="##">Evaluador sesion</a>
              <ul>
              <li onClick={() => dispatch()}><Link to='/login'>Cerra sesion</Link></li>
                  <li onClick={()=>{back()}}>Volver</li>
              </ul>
          </li>
        </ul>              

  </div>
</nav>
</div>
  )
}

export default NavLand