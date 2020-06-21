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

toogleShow = () => {
  this.setState({show: false})
}


  render (){
    if (this.state.show){
    return (
    <div id= "hello"> 
    <h3>{this.props.subtitle}</h3>
    {this.props.mytext}
    <button onClick= {() => this.toogle}>Toogle</button>
  
</div>
    )
  } else{
    return <h1>no hay nada</h1>
  }
}
}


function App() {
  return (
   <div>
     hj  <Hello mytext="Holi" subtitle="lorem ispum"/> <Hello mytext="holaa" subtitle="lorem ispum"/> <Hello mytext="holas"subtitle="lorem ispum"/></div>
  );
}

export default App;
