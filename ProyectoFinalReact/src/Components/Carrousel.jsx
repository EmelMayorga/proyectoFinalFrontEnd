import React from 'react';
import '../Styles/Carrousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagenProyecto8 from '../Img/ImagenProyecto8.jpg';
import ImagenProyecto9 from '../Img/ImagenProyecto9.jpg';
import ImagenProyecto10 from '../Img/ImagenProyecto10.jpg';
import ImagenProyecto11 from '../Img/ImagenProyecto11.jpg';
import ImagenProyecto12 from '../Img/ImagenProyecto12.jpg';
import ImagenProyecto13 from '../Img/ImagenProyecto13.jpg';

function Carrousel() {
  return (
    <div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>

        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img className="d-block-w-100" src={ImagenProyecto8} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img className="d-block-w-100" src={ImagenProyecto9} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block-w-100" src={ImagenProyecto10} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block-w-100" src={ImagenProyecto11} alt="Fourth slide" />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block-w-100" src={ImagenProyecto12} alt="Fifth slide" />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block-w-100" src={ImagenProyecto13} alt="Sixth slide" />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
}

export default Carrousel;
