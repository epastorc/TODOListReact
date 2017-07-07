import React,{Component} from 'react';

export default class TodoListAdd extends Component{

  addTask(event)
  {
    event.preventDefault();

    this.props.createTask(this.refs.createInputTask.value);
  }
  
  render()
  {
    return (
      <form onSubmit={this.addTask.bind(this)}>
        <input type="text" placeholder="Nombre de la tarea" ref="createInputTask"/>
        <button>Agregar</button>
      </form>
    )
  }
}
