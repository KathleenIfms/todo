import React from 'react';
import TaskForm from '../components/task-form';
import isPrivateRoute from '../components/private-route';
import AddTask from "../components/add-task";
import Menu from "../components/menu"
import Main from "../components/main"

class CreateTask extends React.Component {
  render() {
    return (
      <div>
        <Menu/>
        <Main/>
       <AddTask/>
      </div>
    )
  }
}

export default isPrivateRoute({component: CreateTask, location: '/create-task'});