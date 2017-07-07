import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './todo-list';
import TodoListAdd from './todo-list-add';
import _ from 'lodash';

const listTask = [
  {
    id:1,
    nameTask:"Study English",
    completed:false
  },
  {
    id:2,
    nameTask:"Study Spanish",
    completed:false
  },
]

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      listTask
    }
  }

  addTask(nameTask)
  {
    this.state.listTask.push({
      nameTask,
      completed:false
    });

    this.setState({listTask: this.state.listTask});
  }

  editTask(editTask, oldEditTask){

  //  var task = this.state.listTask.find( task => task.taskName == oldEditTask);
  var task = _.find(this.state.listTask,task => task.nameTask === oldEditTask);

    task.nameTask = editTask;

    this.setState({listTask: this.state.listTask});

  }

  render() {
    return (
      <div>
        <TodoListAdd createTask={this.addTask.bind(this)} />
        <TodoList listTask={this.state.listTask} editTask={this.editTask.bind(this)}/>
      </div>
    );
  }
}

export default App;
