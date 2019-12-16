import React from 'react';
import LogoutButton from  "../components/logout-button";
import { navigate, Link } from 'gatsby';
import MenuStyle from "./menu.module.css"

export default class Menu extends React.Component {

  render() {
    return (
      <div>
          <nav className={MenuStyle.navleft}>
                <div className={MenuStyle.navlogo}>
                        <Link to="/" className={MenuStyle.Logo}>to niad</Link>
                </div>
                <div className={MenuStyle.addTodoNavLeft}>
                        <img></img>
                        <Link to="/" >My Week</Link>
                </div>
                <div className={MenuStyle.addTodoNavLeft}>
                        <img></img>
                        <Link to="/completed">Completed</Link>
                </div>
                <div className={MenuStyle.addTodoNavLeft}>
                        <img></img>
                        <Link to="/perfil">Perfil</Link>
                </div>
                <LogoutButton />
          </nav>
            
      </div>
    );
  }
}