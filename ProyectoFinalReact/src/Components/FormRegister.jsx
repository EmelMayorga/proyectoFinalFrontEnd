import React from 'react'
import { useEffect, useState } from 'react';
import PostUsers from '../Services/PostUsers'
import GetUsers from '../Services/GetUsers';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function FormRegister() {
  const [username, setUsername] = useState('');
  const [email, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  
      function cargaUsuario(event) {
          setUsername(event.target.value)
      };
  
      function cargaCorreo(event) {
          setCorreo(event.target.value)
      };
      function cargaPassword(event) {
          setPassword(event.target.value)
      };
  
  const [users, setUsers] = useState([]);
     
  useEffect(() => { // trae los datos y evita que se encicle (mantiene el control)
    const fetchUsers = async () => { //funcion asincronica
      const data = await GetUsers(); //elimina la promesa
     
      setUsers(data); //
  
    };
    fetchUsers(); //
  }, []); //
  
      const cargar = () => {
        console.log('Nombre:', username);
        console.log('Email:', email);
        console.log('Password:', password);
          if (username.trim()==="" || email.trim()==="" || password.trim()==="") {
            console.log("Campos vacios");
          }else{
            console.log("Registro exitoso");
              PostUsers(username, email, password);
              const verificacion = true;
              PostVerificados(username, password, verificacion);
              navigate("/LogIn")
  
          }
          
    
      };


  return (
    <div>
          <div id="DivReg">
      <p>Registro de Usuarios</p>
      <br />
      <p>Nombre de Usuarios</p>
      <input type="text" name="" id="username" value={username} onChange={cargaUsuario} required/>
      <p>Correo Electronico</p>
      <input type="text" name="" id="correo" value={email} onChange={cargaCorreo} required/>
      <p>Contraseña</p>
      <input type="password" name="" id="pass" value={password} onChange={cargaPassword} required/>
      <br />
      <div id="DivReg2">
      <button id="btnR" onClick={cargar}>Registrar</button>
      <p> <Link to="/Login"> ¿Ya estas registrado? Inicio de Sesión</Link> </p>
      </div>
    </div>
    </div>
  )
}

export default FormRegister
