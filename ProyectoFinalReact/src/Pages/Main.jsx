import React from 'react'
import MainBody from '../Components/MainBody'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Carrousel from '../Components/Carrousel'

function Main() {
  return (
    <div>
      <NavBar />
      <Carrousel/>
      <MainBody />
      <Footer/>
    </div>
  )
}

export default Main
