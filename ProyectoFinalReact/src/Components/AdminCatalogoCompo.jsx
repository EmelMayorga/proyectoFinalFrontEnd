import React from 'react'
import PostCatalogo from '../Services/PostCatalogo'
import GetCatalogo from '../Services/GetCatalogo'
import UpdateCatalogo from '../Services/UpdateCatalogo'
import DeleteCatalogo from '../Services/DeleteCatalogo'
import { useEffect, useState } from 'react'


function AdminCatalogoCompo() {
const [productsServices, setProductsServices] = useState([]);
const [formProduct, setFormProduct]  = useState({
  name: '',
  price: '',
  description: '',
  category: '',
  imageUrl: ''
});

useEffect(() =>{
  fetchedProdServ();
})

const inputChange = (e) => {
  const { name, value } = e.target;
  setFormProduct({ ...formProduct, [name]: value});
}

const fetchedProdServ = async () => {
  try{
    const fetchedProdServ = await GetCatalogo();
        setProduct(fetchedProdServ);
    } catch (error) {
      
    }
  }



const cargar = () => {
PostCatalogo(formProduct)
}


  return (


    <div>
        <div id='adminBody'>
<div id='formBody'>
<input type="text"
        name=""
        id="article"
        value={formProduct.name}
        onChange={inputChange}
        placeholder='Nombre del producto'/>
</div>
<div id='formBody'>
<input type="number"
        name="" 
        id="price"
        value={formProduct.price}
        onChange={inputChange}
        placeholder='Precio del producto'/>
</div>
<div id='formBody'>
<select name="" id="selector" value={formProduct.category} onChange={inputChange} required>
            <option value="">Escoja el tipo de producto</option>
            <option value="servicio">Servicio</option>
            <option value="producto">Producto</option>
        </select>
</div>
<div id='formBody'>
<input type="text"
        name=""
        id="quantity"
        value={formProduct.quantity}
        onChange={inputChange}
        placeholder='Cantidad'/>
</div>
<div id='formBody'>
<input type="text"
        name=""
        id="description"
        value={formProduct.description} 
        onChange={inputChange}
        placeholder='Descripción del producto'/>
</div>
        <button id='btnAdd' onClick={cargar}>Enviar</button>
        </div>


        <div id='mapArticle'>
        <div className="product-grid">
        {formProduct.length > 0 ? (
          formProduct.map((formProduct) => (
            <div key={formProduct.id} className="product-card">
              <h3>{formProduct.name}</h3>
              <p>Precio: ${formProduct.price}</p>
              <p>Cantidad: {formProduct.quantity}</p>
              <p>Descripción: {formProduct.description}</p>
              <p></p>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>

        </div>
    </div>
  )
}

export default AdminCatalogoCompo
