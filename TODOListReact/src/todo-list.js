import React, { Component } from 'react';
import logo from './logo.svg';
import TodoListHeader from './todo-list-header';
import TodoListElement from './todo-list-element';
import _ from 'lodash';

class TodoList extends React.Component {

  constructor(props){

    super(props);

    this.state = {

      todo: props.listTask
    }
  }


  render() {

    var list =_.map(this.props.listTask, (todo, index) => <TodoListElement key={index} id={index} taskName={todo.nameTask} completed={todo.completed} editTask={this.props.editTask.bind(this)} />);

    return (
      <div>
          <TodoListHeader/>
          <table>
                {list}
          </table>
          </div>
    );
  }
}

export default TodoList;
