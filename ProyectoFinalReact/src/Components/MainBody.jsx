import React from 'react'
import '../Styles/MainBody.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ImagenProyecto8 from '../Img/ImagenProyecto8.jpg'
import ImagenProyecto9 from '../Img/ImagenProyecto9.jpg'
import ImagenProyecto10 from '../Img/ImagenProyecto10.jpg'
import ImagenProyecto11 from '../Img/ImagenProyecto11.jpg'
import ImagenProyecto12 from '../Img/ImagenProyecto12.jpg'
import ImagenProyecto13 from '../Img/ImagenProyecto13.jpg'



function MainBody() {
  return (
    <div id='Body'>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={ImagenProyecto8} alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={ImagenProyecto9} alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={ImagenProyecto10} alt="Third slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={ImagenProyecto11} alt="Third slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={ImagenProyecto12} alt="Third slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={ImagenProyecto13} alt="Third slide" />
    </div>

  </div>
</div>
</div>
  )
}

export default MainBody
