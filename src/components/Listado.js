import React from 'react';
import Datos from './data.json';
import Item from './Item.js';
//import App from './App.js';
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.



export default function Listado(props) {
  return (
    <div className='container' >
        {Datos.map((products) => {
        return <Item 
          key={products.id}
          id={products.id}
          nombre={products.producto.nombre}
          descripcion={products.producto.descripcion}
          stock={products.stock}
          carrito={props.carrito}
        />
       })}
    </div>
    )
};
