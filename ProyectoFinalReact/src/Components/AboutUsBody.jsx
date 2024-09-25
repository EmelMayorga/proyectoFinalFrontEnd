import React from 'react'
import '../Styles/AboutUsBody.css'
import ImagenProyecto1 from '../Img/ImagenProyecto1.jpg'
import ImagenProyecto6 from '../Img/ImagenProyecto6.jpg'
import ImagenProyecto7 from '../Img/ImagenProyecto7.jpg'

function AboutUsBody() {
  return (
    <div id="aboutUsDiv">
      <div id="aboutUsFondo">
        <section id="aboutUsText">
        <h2>Sobre Nosotros</h2>
        <p>Somos surfistas. Somos artesanos. Y somos locales. En Ding Repairs, nos
apasiona el surf tanto como a ti. Por eso, nos especializamos en la reparación de tablas de
surf, utilizando los mejores materiales y técnicas del mercado. Queremos que confíes en
que tu tabla está en las mejores manos, no importa si eres un surfista experimentado o
estás comenzando.
Nacimos en la costa, creciendo entre olas y sal. Cada tabla que pasa por nuestras manos
cuenta una historia, y nuestra misión es ayudar a que esas historias continúen. Ya sea que
tu tabla necesite una reparación completa o simplemente un retoque, nos encargamos de
dejarla lista para la próxima aventura.</p>
        </section>
      </div>
      <div className='cartImagenes'>
        <div className='divCardImagen'>
        <img src={ImagenProyecto1} alt="ClientesSatisfechos" className='divImagen'/>
        </div>
        <div className='divCardImagen'>
        <img src={ImagenProyecto6} alt="ProcesodeTrabajo" srcset="" className='divImagen'/>
        </div>
        <div className='divCardImagen'>
        <img src={ImagenProyecto7} alt="ClientesSatisfechos" srcset="" className='divImagen'  />
        </div>
      </div>

    </div>
  )
}

export default AboutUsBody
