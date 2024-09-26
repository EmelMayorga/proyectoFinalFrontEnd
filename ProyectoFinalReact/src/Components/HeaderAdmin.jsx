import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoProyectoF from '../Img/LogoProyectoF.png'
import '../Styles/HeaderAdmin.css'
import { Link } from 'react-router-dom';

function HeaderAdmin() {
const eliminarLocal = () => {
  localStorage.clear()
}

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src={LogoProyectoF} alt="" srcset="" className='logoAdmin' />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li >
          <p> <Link to='/' className="nav-item" onClick={eliminarLocal}> Inicio </Link></p>
        </li>


      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default HeaderAdmin
