// El componente App es el padre de:
import React, {useState} from 'react';
import Cabecera from './components/Cabecera.js';
import Listado from './components/Listado.js';

// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App(props) {
  const [elementosComprados, setElementosComprados] = useState(0);
  const enviarCarrito = () => {
    setElementosComprados(elementosComprados+1);
  }

  return (
    <div className="App">
      <Cabecera comprados={elementosComprados}/>
      <Listado carrito={enviarCarrito}/>
      
    </div>
  );
}



export default App;
