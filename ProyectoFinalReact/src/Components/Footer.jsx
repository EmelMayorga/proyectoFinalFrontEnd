import React from 'react'
import '../Styles/Footer.css'
import { Link } from 'react-router-dom'
import LogoProyectoF from '../Img/LogoProyectoF.png'


function Footer() {
  return (
  <div id='footerDiv'>
<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4" id='footerFront'>
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between" id='footerFrontDiv'>
            <p>
            <Link to='/Main'>
            <img src={LogoProyectoF} alt="Ding Repairs Logo" id='logoFooter'/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ding Repairs</span>
            </Link>
            </p>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400" id='footerFrontList'>
                <li>
                  <p>
                  <Link to='/AboutUs'>
                  Acerca de Nosotros
                  </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link to='/Contact'>
                    Contacto
                    </Link>
                  </p>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024.
          Desarrollado por Emel Mayorga, todos los derechos reservados.
          </span>
    </div>
</footer>


  </div>
  )
}

export default Footer
