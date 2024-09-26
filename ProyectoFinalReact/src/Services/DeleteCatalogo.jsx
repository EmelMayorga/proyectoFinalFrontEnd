async function DeleteCatalogo(id) {
  {//METHOD DELETE

   console.log("LLEGA a funcion para borrar");
   try {
       fetch('http://localhost:3007/catalogo/'+id, {
           method: 'DELETE',
       }) 
 
       console.log(`Se elimino el producto ${id}`);
   } catch (error) {
       alert("SYSTEM ERRROR "+Error)
       console.log(error);
   }
 }
}

export default DeleteCatalogo