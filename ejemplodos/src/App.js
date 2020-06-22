import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component {

state={
  termino : '',
  imagenes : []
}

consultarApi = ()=>{
 

  const url= `https://pixabay.com/api/?key=17154799-8706e3c6f5433d0a0af8a31da&q=$(termino)`; 
  
   fetch(url)
  .then(respuesta => respuesta.json())
  .then(resultado => this.setState({imagenes:resultado.hits}));
}

datosBusqueda =(termino) =>{
  this.setState({
    termino
  }, () =>{
    this.consultarApi();
  })
}

  render () {
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">
          Buscador de productos </p>
          <Buscador
          datosBusqueda={this.datosBusqueda}
          />
        </div>
    <Resultado
    imagenes ={this.state.imagenes}/>
      </div>
    
  );
  }
}
export default App;
