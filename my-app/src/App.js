import React, {Component} from 'react';
import {BrowserRouter as  Router, Route, Link} from 'react-router-dom';
import './App.css';
import tasks from './example/tasks.json';
import Tasks from './components/Tasks';
import Taskform from './components/Taskform';
import Posts from './components/Posts'

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

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    console.log(newTasks);
    this.setState({tasks: newTasks})
  }

  checkDone = (id) => {
     const newTasks =this.state.tasks.map(task =>{
       if (task.id === id){
        task.done = !task.done
       }
       return task;
       
     });
     this.setState({tasks: newTasks})
  }

        render (){
          return <div>
            <Router>
            
              <h1>Algunas caracteriticas que tiene REACT ROUTER</h1> 
            <Link to= "/">HOME</Link>
              <br/>
              <br/>
              <Link to= "/posts">POST</Link>
             
                <Route exact path="/" render={() =>{
                 return ( <div>
                   <Taskform addTask={this.addTask}/>
                     <Tasks  
                          tasks={this.state.tasks} 
                          deleteTask={this.deleteTask} 
                          checkDone ={this.checkDone}
                          />
                              </div> )
                             
            }}>
            

</Route>
<Route path="/posts" component={Posts}>

</Route>

</Router>


  </div>
 }
}

export default App;
