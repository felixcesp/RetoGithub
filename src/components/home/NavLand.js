import React from 'react'
import { Link,} from 'react-router-dom';
import '../../styled/navland.css'


function NavLand() {


 
  return (
    <div className='all88'>
    <nav className='nav88'> 
     
  <div className='icon88'>
<img className='editicon88' src="https://res.cloudinary.com/felixces/image/upload/v1668817046/Retogithub/iconoblue_ls9toh.png" alt=""/>

 </div>
 <div className='namewith88'>
 <h1 className='evalu88'>Welcome people</h1>
 </div>
 <div className='navmenu88'>

      <ul className='ulspace88'>
          <li className='submenu88'><Link to='/register'>Create account</Link>
          </li>
        </ul>  


      <ul className='ulspace87'>
          <li className='submenu87'><a href="##">Logged actions</a>
              <ul>
              <li><Link to='/pag1'>&nbsp;Login</Link></li>
              <li ><Link to='/phone'>Phone login</Link></li>   
              </ul>
          </li>
        </ul>    
  </div>
</nav>
</div>
  )
}

export default NavLand