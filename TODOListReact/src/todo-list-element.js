import React,{Component} from 'react';

export default class TodoListElement extends Component
{

  constructor(props)
  {
    super(props);

    this.state = {
      isEdit:false
    }
  }

  handleEditTask(){

    this.setState({
      isEdit: !this.state.isEdit
    });
  }
  handleSaveEditTask()
  {

    this.props.editTask(this.refs.inputEditTask.value,this.props.taskName);


    this.setState({
      isEdit: false
    });
  }

  renderTask(){
    if(!this.state.isEdit){

      return (<tr><td>{this.props.taskName}</td><td><input type="checkbox" value={this.props.completed ? 1 : 0}/></td><td><button onClick={this.handleEditTask.bind(this)}>Editar</button></td></tr>);
    }
    return  (<tr><td><input type="text" defaultValue={this.props.taskName} ref="inputEditTask"  /></td><td><input type="checkbox" value={this.props.completed ? 1 : 0}/></td><td><button onClick={this.handleSaveEditTask.bind(this)}>Guardar</button></td></tr>);
  }
  render()
  {
    return (<div>{this.renderTask()}</div>);
  }
}
