import React, {Component} from 'react';

export default class Taskform extends Component{
    state ={
        title: '',
        description:''
    }

onSubmit = e => {
    this.props.addTask( this.state.title, this.state.description);
    e.preventDefault();

}


onChange = e => {
    console.log(e.target.name, e.target.value)
    this.setState({

[e.target.name  ] : e.target.value

    })
}
render(){



    return(
        
        <form onSubmit={this.onSubmit}>
            <center>
            <h1>Para agregar una tarea escribela y da en guardar</h1>
            <input type= "text "
            name="title"
            placeholder ="write a task" 
            onChange={this.onChange} 
            value={this.state.title}/>
            <br/>
            <br/>
            <textarea name="description" placeholder="description" 
            onChange={this.onChange} 
            value={this.state.description}></textarea><br/><br/>
            <button type="submit"> Save</button>
            <h1>Tus tareas</h1>
            <h3>Puedes eliminar, decir que las hiciste y agregar nuevas </h3>
            </center>
        </form>
        
    )
}


}