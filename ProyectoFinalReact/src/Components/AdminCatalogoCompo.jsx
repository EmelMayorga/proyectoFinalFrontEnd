import React, { useEffect, useState } from 'react';
import '../Styles/AdminCatalogoCompo.css'
import PostCatalogo from '../Services/PostCatalogo';
import GetCatalogo from '../Services/GetCatalogo';
import UpdateCatalogo from '../Services/UpdateCatalogo';
import DeleteCatalogo from '../Services/DeleteCatalogo';

function AdminCatalogoCompo() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [base64, setBase64] = useState('');
  const [productos, setProductos] = useState([]);
  const [editable, setEditable] = useState('');

  const formProduct = {
    name: nombre,
    price: precio,
    description: descripcion,
    category: categoria,
    imageUrl: base64,
    Quantity: cantidad,
  };

  useEffect(() => {
    getUsuario();
  }, [productos]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    convertToBase64(file);
  };

  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBase64(reader.result);
    };
  };

  const getUsuario = async () => {
    const dataProductos = await GetCatalogo();
    setProductos(dataProductos);
  };

  const cargar = () => {
    PostCatalogo(formProduct);
    console.log(formProduct + ' esto es lo que llega a la función');
  };

  const Eliminar = (id) => {
    DeleteCatalogo(id);
  };
const Editar = (id, nombre, precio, cantidad, categoria, descripcion, image) => {

    setNombre(nombre)
    setPrecio(precio)
    setDescripcion(descripcion)
    setCategoria(categoria)
    setBase64(image)
    setCantidad(cantidad)

  setEditable(id)
  console.log(id);

}
const GuardarCambio = (id) => {


  const formProduct = {
    name: nombre,
    price: precio,
    description: descripcion,
    category: categoria,
    imageUrl: base64,
    Quantity: cantidad,
  };


  const updateFormProduct = {
formProduct
  };

  UpdateCatalogo(id, updateFormProduct);
  getUsuario();
  setEditable(0); // Reset editable state to 0
};


  return (
    <div >
      <div id='adminBody'>
<div className="cardForm">
  <div className="card-header">
    <p>Formulario del Producto</p>
  </div>
  <div className="formBody">
    <div id='formBody'>
      <input type="text" onChange={(e) => setNombre(e.target.value)} placeholder="Nombre del producto" className="form-control"/>
    </div>

    <div id='formBody'>
      <input type="number" onChange={(e) => setPrecio(e.target.value)} placeholder="Precio del producto" className="form-control"/>
    </div>

    <div id='formBody'>
      <select id="selector" value={formProduct.category} onChange={(e) => setCategoria(e.target.value)} required className="form-control" >
        <option value="">Escoja el tipo de producto</option>
        <option value="servicio">Servicio</option>
        <option value="producto">Producto</option>
      </select>
    </div>

    <div id='formBody'>
      <input type="text" onChange={(e) => setCantidad(e.target.value)} placeholder="Cantidad" className="form-control"/>
    </div>

    <div id='formBody'>
      <input type="text" onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción del producto" className="form-control"/>
    </div>

    <div id='formBody'>
      <input id="agregarimg" type="file" onChange={handleFileChange} className="form-control"/>
    </div>

    <button id="btnAdd" onClick={cargar} className="btnE">Enviar</button>

  </div>
  </div>

</div>
<div id='mapeo'>

      <div id="mapArticle">
        <div className="product-grid">
          {productos.length > 0 ? (
            productos.map((producto, index) => (
              <div key={index} className="card" style={{ width: '18rem' }}>

                {producto.formProduct && (<img src={producto.formProduct.imageUrl} className="card-img-top" alt="imagen de producto"/>)}
                
                <div className="card-body">

                  { editable==producto.id ? <input type="text" onChange={(e) => setNombre(e.target.value)} placeholder="Nombre del producto"/>:<h5 className="card-title">{producto.formProduct.name}</h5>}

                  { editable==producto.id ? <input type="text" onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción del producto"/> : <p className="card-text"> {producto.formProduct.description}</p>}
                
                </div>

                <ul className="list-group list-group-flush">

                { editable==producto.id ? <input type="text" onChange={(e) => setCategoria(e.target.value)} placeholder="Categoria" /> : <li className="list-group-item">{producto.formProduct.category}</li>}
                
                { editable==producto.id ? <input type="number" onChange={(e) => setPrecio(e.target.value)} placeholder="Precio del producto" /> : <li className="list-group-item">Precio: ${producto.formProduct.price}</li>}

                { editable==producto.id ? <input type="text" onChange={(e) => setCantidad(e.target.value)} placeholder="Cantidad"/> : <li className="list-group-item">Cantidad: {producto.formProduct.Quantity}</li>}
                
                </ul>
                <div className="card-body">
                  {editable==producto.id ? <button className="card-link" onClick={()=>GuardarCambio(producto.id)}>Guardar</button>:<button className="card-link" onClick={()=>Editar(producto.id, producto.formProduct.name, producto.formProduct.price, producto.formProduct.Quantity, producto.formProduct.category, producto.formProduct.description, producto.formProduct.imageUrl)}>Editar</button>}
                  {editable==producto.id ? <button className="card-link" onClick={() => setEditable(0)}>Cancelar</button> : <button className="card-link" onClick={() => Eliminar(producto.id)}>Borrar</button>}
                </div>
              </div>
            ))
          ) : (
            <p>No hay producto(s)/servicio(s) disponibles.</p>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default AdminCatalogoCompo;
