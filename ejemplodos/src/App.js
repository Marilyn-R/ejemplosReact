import React, { Component } from 'react';
import Buscador from './components/Buscador';


class App extends Component {
  render () {
  return (
    <div className="app container">
      <div className="jumbotron">
        <div className="lead text-center">
          <p>Buscador de productos </p>
          <Buscador/>
        </div>
      </div>
    </div>
  );
  }
}
export default App;
