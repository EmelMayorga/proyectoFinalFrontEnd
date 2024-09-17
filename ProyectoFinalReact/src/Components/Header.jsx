import React from 'react'
import LogoProyectoF from '../Img/LogoProyectoF.png'
import PerfilIcono from '../Img/PerfilIcono.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../Styles/Header.css'




function Header() {
  const navigate =useNavigate()
const perfil = () => {
  navigate("/Login")
}

  return (
    <div id="header">
      <div id="logos">
        <img src={LogoProyectoF} alt="Logo" srcset="" id="logo" />
      </div>
      <div id="pages">
      <h2> <Link to="/Services" id='navText' >Catalogo</Link></h2>
      <h2> <Link to="/Contact" id='navText'>Contacto</Link></h2>
      <h2> <Link to="/AboutUs" id='navText'>Sobre Nosotros</Link></h2>
      </div>
      <img src={PerfilIcono} alt="Perfil" srcset="" onClick={perfil} id="perfil"/>
    </div>
  )
}

export default Header
