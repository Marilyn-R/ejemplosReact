import React from 'react';

import './assets/css/App.css';


import Micomponente from './componets/Micomponente';


function holamundo(nombre, edad){
    var presen = <div>
        <h2> hola, soy {nombre}</h2>
        <h3> tengo {edad} años </h3>
    </div>;
    return presen;
}

function App() {
    var nombre ="marilyn arlette ";
    
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Haciendo el curso React  
        </p>
      {holamundo (nombre, 20)}
      


<section className="componentes">                                         
    <Micomponente />
  
    
          
       </section>
      </header>

      

    </div>
  );
}

export default App;
