import React from 'react'
import '../Styles/AdminBody.css'
import { useEffect, useState } from 'react'
import PostCatalogo from '../Services/PostCatalogo'
import GetCatalogo from '../Services/GetCatalogo'

function AdminBody() {

    const [article, setArticle] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [fileImage, setFileImage] = useState('');
    const [listaProductos, setProductos] = useState([]);

    useEffect(() => {
        const fetchTask = async () => {
          const data = await GetCatalogo();
          setProductos(data);
        };
        fetchTask();
      }, []);

    function cargaArticulo(event) {
        setArticle(event.target.value)
    }
    function cargaPrecio(event) {
        setPrice(event.target.value)
    }
    function cargarQuantity(event) {
        setQuantity(event.target.value)
    }
    function cargaDescription(event) {
        setDescription(event.target.value)
    }
    function cargaFiles(event) {
        setFileImage(event.target.value)
    }

    const cargar = () => {
const product = [
    article,
    price,
    quantity,
    description,
    fileImage
]


PostCatalogo(product)
    }



  return (
    <div>
        <div id='adminBody'>
        <input type="text" name="" id="article" value={article} onChange={cargaArticulo} placeholder='Nombre del producto'/>
        <input type="text" name="" id="price" value={price} onChange={cargaPrecio} placeholder='Precio del producto'/>
        <select name="" id="selector" >
            <option value="">Escoja el tipo de producto</option>
            <option value="servicio">Servicio</option>
            <option value="producto">Producto</option>
        </select>
        <input type="text" name="" id="quantity" value={quantity} onChange={cargarQuantity} placeholder='Cantidad'/>
        <input type="text" name="" id="description" value={description} onChange={cargaDescription} placeholder='Descripción del producto'/>
        <input type="file" name="" id="fileImage" value={fileImage} onChange={cargaFiles}/>
        <button id='btnAdd' onClick={cargar}>Enviar</button>
        </div>
        <div id='mapArticle'>
        <ul>
            {listaProductos.map((product) => (
                <li key={product.id}>
                  <p>{product.product} </p>
                  <button id="btnE">Editar</button>
                  <button id="btnD" onClick={e=>{eliminar(product.id)}}>Eliminar</button>
                </li>
            ))} 
        </ul>

        </div>
    </div>
  )
}

export default AdminBody
