import React from "react";

const Product = ({ producto, carrito, saveProducts, productos }) => {
  //ACA VAMOS A HACER UN BOTON Y SE RECOMIENDA HACER LA FUNCION ANTES Y LA DECLARAMOS EN EL ONCLICK
  //AUNQUE TAMBIEN LA PODEMOS HACER EN EL ONCLICK PERO SE VERIA MAS SUCIO
  //AGREGAR ELEMENTOS AL CARRITO
  const selectProduct = (id) => {
    const product = productos.filter((data) => data.id === id);
    saveProducts([...carrito, ...product]);
  };
  //ELIMINAR PRODUCTO
  const deleteProduct = (id) => {
    const productos = carrito.filter((data) => data.id !== id);
    //COLOCAR PRODUCTOS EN EL STATE
    saveProducts(productos);
  };
  //DESTRUCTURING DE LOS DATOS QUE NOS PASA APP
  const { nombre, precio, id } = producto;
  return (
    <div>
      <h2>{nombre}</h2>
      <p>{precio}</p>
      {productos ? (
        <button
          type="button"
          onClick={() => {
            selectProduct(id);
          }}
        >
          COMPRAR
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            deleteProduct(id);
          }}
        >
          ELIMINAR
        </button>
      )}
    </div>
  );
};

export default Product;
