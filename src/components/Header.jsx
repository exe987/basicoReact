import React from "react";


//LOS PROPS SON PROPIEDADES QUE LE PASAMOS A ESTE COMPONENTE DESDE APP.JS. AL CUAL LE PASAMOS EL TITULO y UN NUMERO
//LAS TRAEMOS CON EL DESTRUCTURING OSEA PONEMOS ESAS PROPS ENTRE LLAVES.
//TAMBIEN SE PUEDEN TRAER COMOPROPS ENTRE () PERO LAS TENDRIAMOS QUE UTILIZAR COMO EN ESTE CASO props.title
//AL PONERLOS ENTRE LLAVES LAS PODEMOS USAR DIRECTAMENTE
function Header({title, numero}) {
  //♠ANTES DEL RETURN PODEMOS CREAR CUANQUIER CONTENIDO EN JS
  //♠LO QUE ESTA EN RETURN VA A SER LO QUE SE VE EN PANTALLA
  //♠CUANDO QUERRAMOS APLICAR UNA CLASE A UN ELEMENTO EN LA ETIQUETA PONER CLASSNAME YA QUE CLASS ES UNA PALABRA
  //RESERVADA DE JS- CON LOS ID NO PROBLEM
    
  const age = numero;
  let mensaje;
  if (age > 20) {
    mensaje = "Sos viejo";
  } else {
    mensaje = "Sos pibe";
  }
  return (
    <div>
      <h1 className="encabezado">{title}</h1>
      <h2>
        Tenes {age} años, {mensaje}
      </h2>
    </div>
  );
}

export default Header;
