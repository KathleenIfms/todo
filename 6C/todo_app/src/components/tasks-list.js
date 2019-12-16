import React from 'react'
import withDataSourceFetch from './data-source-fetch';
import TaskModel from './models/task-model';
import {Link} from 'gatsby';
import Message from './message';
import Task from './task';
import TasksListStyle from "./tasks-list.module.css"

const TasksList = (props) => {
  return (
    <div className={TasksListStyle.main}>
      <Message message={props.message} />
      {
        props.isFetching ? 'Buscando Tarefas' : 
        <ul>
          {
            props.data.map((task) => {
                return (<li>
                  <Task data={task} />
                  <p><Link to="/view-task" state={{id: task.id}}>Visualizar</Link></p>
                  <p>
                    <button onClick={props.remove} id={task.id}>Remover Tarefa</button>
                  </p>
                </li>);
              }
            )
          }
        </ul>
      }
    </div>
  )
};

export default withDataSourceFetch(TasksList, TaskModel.list.bind(TaskModel), TaskModel.delete.bind(TaskModel));