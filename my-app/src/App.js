import React, {Component} from 'react';
import './App.css';
import task from './example/taks.json';
import Tasks from './components/Tasks';

class App extends Component{
  state ={
    task: task
  }
render (){
  return <div>
  <Tasks  task={this.state.task}/>
  </div>
 }
}

export default App;
