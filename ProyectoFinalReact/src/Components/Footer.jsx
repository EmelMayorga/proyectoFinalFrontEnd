import React from 'react'
import '../Styles/Footer.css'
import LogoProyectoF from '../Img/LogoProyectoF.png'
import WhatsAppIcono from '../Img/WhatsAppIcono.png'
import FacebookIcono from '../Img/FacebookIcono.png'
import InstagramIcono from '../Img/InstagramIcono.png'
import { useNavigate } from 'react-router-dom'

function Footer() {
const navigate = useNavigate()
const whatsApp = () => {
  navigate("/Contact")
};
const facebook = () => {
  navigate("/Contact")
};
const instagram = () => {
  navigate("/Contact")
};

  return (
    <div id="footer">
      <div id="logos">
        <img src={LogoProyectoF} alt="Logo" srcset="" id="logo" />
        <h2 id="footerText">Somos Ding Repairs!</h2>
      </div>
      <div id="footerContact">
        <h2 id="contatcText">Contactanos</h2>
        <img src={WhatsAppIcono} alt="" srcset="" id="redes" onClick={whatsApp}/>
        <img src={FacebookIcono} alt="" srcset="" id="redes" onClick={facebook}/>
        <img src={InstagramIcono} alt="" srcset="" id="redes" onClick={instagram}/>
      </div>
    </div>
  )
}

export default Footer
