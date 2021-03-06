import React from 'react';
import TaskModel from './models/task-model';
import Message from './message';
import {navigate} from 'gatsby';
import TaskStyle from "./task.module.css"


class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {...props.data},
      message: '',
      visible: false
    };
    this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this);
    this.onDimiss = this.onDimiss.bind(this);
  }
  onDimiss() {
    this.setState({...this.state, visible: !this.state.visible});
  }

  async _updateTask () {
    try {
      let task = {...this.state.task};
      delete task.user;
      delete task.created_date;
      let res = await TaskModel.update(this.state.task.id, task);
      return res.message;
    }catch(e) {
      return e.message;
    }
  }

  async handleChangeCheckBox(e) {
    let newState = {...this.state};
    newState.task[e.target.name] = !this.state.task[e.target.name];
    newState.message = await this._updateTask();
    newState.visible = true;
    this.setState(newState);
  }

  

  render() {
    let date = new Date(this.state.task.created_date*1000);
    console.log(this.state);
    return (
      <div className={TaskStyle.main}>
        <Message message={this.state.message} show={this.state.visible} toggle={this.onDimiss} />
        <h2>{this.state.task.nome}</h2>
        {this.state.task.description} | 
        {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`} | 
        {this.state.task.user.name}
        <p>
          <label>Feito ? </label>
          <input type="checkbox" name="isDone" checked={this.state.task.isDone} onChange={this.handleChangeCheckBox} />
        </p>
        
      </div>
    );
  }

}

export default Task;