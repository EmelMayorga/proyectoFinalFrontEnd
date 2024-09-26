import React from 'react'
import '../Styles/MainBody.css'
import ImagenProyecto7 from '../Img/ImagenProyecto7.jpg'



function MainBody() {
  return (
    <div >
      <div className='bienvenida'>
        <h2 className='bienvenidaText'>Ven y conocenos</h2>
        <p id='dingrepairsHome'>Sabemos lo que es... Estás en pleno surf, la ola perfecta se forma, y ¡zas!, tu tabla termina
chocando con algo que no era agua. No te preocupes, en Ding Repairs estamos
aquí para salvar el día. Con años de experiencia y un montón de resinas de primera, nos
encargamos de dejar tu tabla lista para la próxima aventura. No importa si eres un pro o
estás en tu primera ola, tu tabla siempre será nuestra prioridad</p>
      </div>
<div className='linea'>

</div>
<div id='divPalancho'>
      <div className='palancho'>
        <div className='palanchoImg'>
        <img src={ImagenProyecto7} alt="ClientesSatisfechos" srcset="" className='palanchoImagen'  />
        </div>
        <div className='palanchoInfo'>
        <p className='palanchoText'>
        Hola!. 
        Mi nombre es Alexander Córdoba Palavicini, A.K.A Palancho.
        Soy un local de Nosara y  me encanta el surf. Me gusta ayudar a mis clientes a seguir su pasión por este deporte.
        Asi que dejame ayudarte para que sigas disfrutando al maximo posible de este!
      </p>
        </div>
      </div>
</div>
<div className='bienvenida'>
        <h2 className='bienvenidaText'>Nuestros Productos y Servicios</h2>
</div>
    </div>
  )
}

export default MainBody
