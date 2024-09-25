async function PostCatalogo(formProduct) {
    try {
     
        const listaProductos = { 
            formProduct
        };

        const response = await fetch("http://localhost:3007/catalogo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(listaProductos)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export default PostCatalogo