import React from 'react';
import { logout } from '../helpers/user-helper';
import { navigate } from 'gatsby';
import BtnLogoutStyle from "./logout-button.module.css"

export default class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    logout(navigate);
  }

  render() {
    return (
      <div className={BtnLogoutStyle.addTodoNavLeft}>
        <img></img>
        <button onClick={this.logout}>Logout</button>
      </div>

    );
  }
}