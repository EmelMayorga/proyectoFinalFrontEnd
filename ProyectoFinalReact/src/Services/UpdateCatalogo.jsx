const UpdateCatalogo = async (id, body) => {//metodo put para esperar cambios
  try {
    const response = await fetch("http://localhost:3007/catalogo/"+id, {
      method: "PUT",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default UpdateCatalogo