//IMPORTANTE PONER TODO EL CONTENIDO DENTRO DE ESTA ETIQUETA FRAGMENT. HACELO NO PREGUNTES PARA Q
import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import Product from "./components/products";
import Carrito from './components/carrito'


function App() {
  //OBTENEMOS EL AÑO A MODO DE EJEMPLO PARA PASAR COMO PROPS
  const year = new Date().getFullYear();

  //CREAR LISTADO DE PRODUCTOS
  //donde productos es el array y set products es la funcion que va a agregar o eliminar
  //osea que productos es el state normal ysetproducts es la funcion que lo modifica
  const [productos, setProducts] = useState([
    { id: 1, nombre: "Camisa React", precio: 50 },
    { id: 2, nombre: "Camisa Node", precio: 5 },
    { id: 3, nombre: "Camisa Vue", precio: 25 },
    { id: 4, nombre: "Camisa Angular", precio: 40 },
  ]);

  //STATE PARA CARRITO DE COMPRAS
  const [carrito, saveProducts] = useState([]);
  //A LO QUE ESCUPE EL MAP LE PONGO DATA PARA Q SE VEA BIEN como funca
  return (
    <Fragment>
      <Header title="Tienda Virtual" numero={20} />
      <h1>Lista de productos</h1>
      {productos.map((data) => {
        return (
          <Product
            key={data.id}
            producto={data}
            productos={productos}
            carrito={carrito}
            saveProducts={saveProducts}
          />
        );
      })};
      <Carrito 
       carrito={carrito}
       saveProducts={saveProducts}
       />
      <Footer year={year} />
    </Fragment>
  );
}
//key={data.id} esto es para que cada componente recorrido tenga un id diferente y no nos tire error la consola
//VEMOS QUE EN LA ETIQUETA HEADER LE PASAMOS LAS PROPS PARA UTILIZARLAS
export default App;
