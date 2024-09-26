import React, { useEffect, useState } from 'react';
import GetCatalogo from '../Services/GetCatalogo';
import '../Styles/Catalogo.css'



function Catalogo() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [base64, setBase64] = useState('');
  const [productos, setProductos] = useState([]);
  const [editable, setEditable] = useState('');


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

return (
    <div>
      <div id="mapArticle">
        <div className="product">
          {productos.length > 0 ? (
            productos.map((producto, index) => (
              <div key={index} className="card">

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
              </div>
            ))
          ) : (
            <p>No hay producto(s)/servicio(s) disponibles.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Catalogo
