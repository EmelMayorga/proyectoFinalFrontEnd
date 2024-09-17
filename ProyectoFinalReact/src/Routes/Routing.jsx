import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../Pages/Main';
import AboutUs from '../Pages/AboutUs';
import Contact from '../Pages/Contact';
import Services from '../Pages/Services';
import Perfil from '../Pages/Perfil';
import Admin from '../Pages/Admin';
import ProtectedRoute from './ProtectedRoute';

function Routing() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Main" element={<Main />}/>
                <Route path="/AboutUs" element={<AboutUs />}/>
                <Route path="/Contact" element={<Contact />}/>
                <Route path="/Services" element={<Services />}/>
                <Route path="/Perfil" element={<Perfil />} />
                <Route path="/Admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
            </Routes>
      </Router>
    </div>
  )
}

export default Routing
