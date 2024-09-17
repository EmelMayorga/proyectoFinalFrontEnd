import React from 'react'
import MapaContact from './MapaContact'
import ContactForm from './ContactForm'
import '../Styles/ContactBody.css'




function ContactBody() {
  return (
    <div id="contactBody">
      <div id="contactDiv">
      <h2 id="contactTittle">Sobre Nosotros</h2>
      <p id="contactText">
      En Ding Repairs, queremos que sepas que siempre estamos disponibles para
ayudarte con cualquier pregunta o consulta que tengas sobre la reparación de tu tabla de
surf. No importa si estás cerca o vienes de lejos, nos encanta recibir tanto a los locales
como a los visitantes. ¡Escríbenos y te responderemos lo antes posible!
      </p>
      </div>
      <div id="contactForm1">
        <MapaContact />
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactBody
