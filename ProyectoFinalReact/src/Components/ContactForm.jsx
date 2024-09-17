import React from 'react'
import '../Styles/ContactForm.css'


function ContactForm() {
  return (
    <div id="contactForm">
      <h2>Contactenos</h2>
      <input type="text" name="" id="nombreForm" placeholder='Nombre Completo' />
      <input type="tel" name="" id="numeroForm" placeholder='Numero Telefonico'/>
      <input type="email" name="" id="correoForm" placeholder='Correo Electronico'/>
      <textarea name="" id="mensajeForm"placeholder='Mensaje o comentario'></textarea>
      <p id="contactFormText">Al completar el formulario acepta el contacto por parte del o de los administradores de esta pagina para estar con contacto con usted. Tampoco nos responsabilizamos ante el hecho de que no se realice la respuesta</p>
    </div>
  )
}

export default ContactForm
