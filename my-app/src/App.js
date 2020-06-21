import React from 'react';

import './App.css';

/* function Hello(props) {
  console.log(props)
  return (
  <div id= "hello"> {props.mytext}
  <h3>{props.subtitle}</h3>
Compo</div>
  )
} */

class Hello extends React.Component{

  state ={
    show: true
  }

toogle = () => {
  this.setState({show: !this.state.show})
}


  render (){
    if (this.state.show){
    return (
    <div id= "hello"> 
    <h3>{this.props.subtitle}</h3>
    {this.props.mytext}
    <button onClick= { this.toogle}>Seguir</button>
  
</div>
    )
  } else{
    return <h1>no hay nada
      <button onClick= {this.toogle} > Dejar de seguir</button>
    </h1>
  }
}
}


function App() {
  return (
   <div>
     hj  <Hello mytext="Holi " subtitle="lorem ispum "/> <Hello mytext="holaa " subtitle="lorem ispum "/> <Hello mytext="holas "subtitle="lorem ispum "/></div>
  );
}

export default App;
