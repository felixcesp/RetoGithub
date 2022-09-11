import React from 'react'
import '../../styled/navbar.css'

function NavbarUser() {
  return (
    <div className='all2'>
    <nav> 
  <div className='icon'>
<img className='editicon' src="https://res.cloudinary.com/felixces/image/upload/v1662595256/Retogithub/iconogit3_iaqj6l.png" alt=""/>
 </div>
 <div className='navmenu'>
      <ul>
          <li><a href="#apagina">Herramientas</a></li>
          <li class="submenu"><a href="#menu">Soluciones</a>
              <ul>
                  <li>Voz Datos</li>
                  <li>Electricas</li>
                  <li>Diseño
                  </li>
              </ul>
          </li>
          <li className='submenu'><a href="#menu">Consultas</a>
              <ul>
                  <li>Telefonica</li>
                  <li>Correo</li>
                  <li>Cita online</li>
              </ul>
          </li>
          <li><a href="#apagina">Contactanos</a></li>
          <li className='submenu2'><a href="#mneu">Registro</a>
              <ul>
                  <li>Registro</li>
                  <li>Inicio secion</li>
              </ul>
          </li>
        </ul>              

  </div>
</nav>
</div>
  )
}

export default NavbarUser