import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoProyectoF from '../Img/LogoProyectoF.png'
import '../Styles/HeaderAdmin.css'
import { Link } from 'react-router-dom';

function HeaderAdmin() {


  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <p> <Link to='/Admin'> Inicio </Link></p>
        </li>
        <li class="nav-item">
          <p><Link to='/AdminCatalogo'> Catalogo</Link></p>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default HeaderAdmin
