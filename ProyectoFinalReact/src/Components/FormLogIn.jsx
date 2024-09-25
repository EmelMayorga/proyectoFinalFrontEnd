import React from 'react'
import { useEffect, useState } from 'react';
import GetUsers from '../Services/GetUsers';
import {  useNavigate } from "react-router-dom";

function FormLogIn() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate()

function cargaUsuario(event) {
    setUsername(event.target.value)
};

function cargaPassword(event) {
    setPassword(event.target.value)
};

const [userData, setUsers] = useState([]);
useEffect(() => {
  const fetchUsers = async () => {
    const data = await GetUsers();
    setUsers(data);
  };
  fetchUsers();
}, []);

const cargar = async () => {
    const lista = await GetUsers();
     
      for (let index = 0; index < lista.length; index++) {
 
         if (lista[index].username === username && lista[index].password === password) {
          localStorage.setItem("Autenticado", 'true')
          console.log("Usuario registrado")
          navigate("/Admin")

          }else{
           console.log("¡Usuario no registrado!");
           
          }
       }



}
  return (
    <div>
            <p>Inicio de Sesión</p>
      <p>Usuario</p>
      <input type="text" name="" id="user" onChange={cargaUsuario} required/>
      <p>Contraseña</p>
      <input type="password" name="" id="pass" onChange={cargaPassword} required/>
      <br />
      <button onClick={cargar} type="submit">Iniciar Sesión</button>
    </div>
  )
}

export default FormLogIn
