import React, {Component} from 'react';
import './App.css';
import tasks from './example/tasks.json';
import Tasks from './components/Tasks';
import Taskform from './components/Taskform';

class App extends Component{
  state ={
    tasks: tasks
  }

  addTask = (title, description)=>{
    /* console.log(title1, description) */
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

render (){
 
  return <div>
    <Taskform addTask={this.addTask}/>
  <Tasks  tasks={this.state.tasks}/>
  </div>
 }
}

export default App;
