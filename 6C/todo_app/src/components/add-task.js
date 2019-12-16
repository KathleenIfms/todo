import React from 'react';
import { navigate, Link } from 'gatsby';
import TaskForm from './task-form';
import AddTaskStyle from "./add-task.module.css"



export default class AddTask extends React.Component {

  render() {
    return (
        <nav className={AddTaskStyle.navright}>
             <TaskForm /> 
        </nav>
    );
  }
}