import React from "react";
import "./carrito.css";
import Producto from './products'

const Carrito = ({ carrito, saveProducts }) => {
  return (
    <div className="carrito">
      <h2>Carrito</h2>
  
   { carrito.length === 0 
   ? 
   <p> Agregue algo al carro </p>
   : 
   carrito.map(producto => (
    <Producto 
      key={producto.id}
      producto={producto}
      carrito={carrito}
      saveProducts= {saveProducts}
    />
))
   }
    </div>
  );
};

export default Carrito;
