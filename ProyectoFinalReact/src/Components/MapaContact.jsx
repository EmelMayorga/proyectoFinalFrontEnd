import React from 'react';

// Componente para el mapa de Google Maps
const MapaContact = () => {
  // URL del iframe del mapa de Google Maps
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d972.0081369366201!2d-85.63578855000964!3d9.9788961480171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTgnNDUuMCJOIDg1wrAzOCcwOS4yIlc!5e1!3m2!1ses!2scr!4v1726162442566!5m2!1ses!2scr";

  // Estilo para hacer que el iframe sea responsive
  const iframeStyle = {
    width: '100%',
    height: '450px',
    border: '0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={{ width: '100%', padding: '0 15px' }}>
      <iframe
        title="Google Map"
        src={mapUrl}
        style={iframeStyle}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapaContact;
