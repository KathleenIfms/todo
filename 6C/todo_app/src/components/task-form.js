import React from 'react';
import TaskModel from '../components/models/task-model';
import {Link} from 'gatsby';
import Message from '../components/message';
import TaskFormStyle from "./task-form.module.css"
import repeat from "../img/repeat.png"
import calendar from "../img/calendar.png"
import leftarrow from "../img/left-arrow.png"


export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        description: '',
      },
      message: '',
      isSaving: false,
      visible: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDimiss = this.onDimiss.bind(this);
  }

  handleChange(event) {
    let newState = {
      ...this.state
    };
    newState.task[event.target.name] =  event.target.value;
    this.setState(newState);
  }

  onDimiss() {
    this.setState({...this.state, visible: !this.state.visible});
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      await this.setState({
        ...this.state, 
        isSaving: true,
        task: {
          ...this.state.task
        }
      });
      let res = await TaskModel.create(this.state.task);
      this.setState({
        task: {
          description: '',
        },
        isSaving: false,
        message: res.message,
        visible: true
      });
    }catch(e) {
      this.setState({
        task: {
          description: '',
        },
        isSaving: false,
        message: e.message,
        visible: true
      });
    }
  }

  render() {
    return (
    <div>
      <Message message={this.state.message} show={this.state.visible} toggle={this.onDimiss} />
        <div className={TaskFormStyle.tolist}>
              <img></img>
              <input type="text" name="nome" placeholder="name task" value={this.state.task.nome} disabled={this.state.isSaving} onChange={this.handleChange}/>
        </div>
        <div className={TaskFormStyle.contentbtns}>
            <div className={TaskFormStyle.btn}>
              <img src={calendar}/>
              <button>12 / 12 / 2019</button>
            </div>
            <div className={TaskFormStyle.btnrepeat}>
                  <img src={repeat}/>
                  <button>Repetir</button>
            </div>
            <div className={TaskFormStyle.btnmessage}>
              <textarea type="text" name="description"  rows="1" value={this.state.task.desc} disabled={this.state.isSaving} onChange={this.handleChange} placeholder="Add Description" className={TaskFormStyle.message} ></textarea>
            </div>
        </div>
         <div className={TaskFormStyle.addtodonav}>
         <Link to='/' className={TaskFormStyle.voltar}><img src={leftarrow}/></Link>
                <button onClick={this.handleSubmit}>Criar To</button>
          <a><img/></a>      
         </div>
        
      
    </div>
    );
  }
}