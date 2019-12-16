import React from 'react';
import TasksList from "../components/tasks-list";
import { navigate, Link } from 'gatsby';
import MainStyle from "./main.module.css"
import BackgroundGreen from '../img/low-green-wallpapers.jpg'


export default class Main extends React.Component {

  render() {
    return (
        <main className={MainStyle.main}>
        <div className={MainStyle.card}>
           <div className={MainStyle.topsection}>
                <img src={BackgroundGreen}></img>
                <div className={MainStyle.menuicon}>
                   <span className={MainStyle.s1}></span>
                   <span className={MainStyle.s2}></span>
                   <span className={MainStyle.s3}></span>
                </div>
                <div className={MainStyle.name}>
                      My Week<br></br>
                      <span>Wed 10 December</span>
                </div>
           </div>
           <div className={MainStyle.content}>
             <ul id="list">
                  <TasksList  />
             </ul>

           </div>
           <div className={MainStyle.addtodo}>
                  <Link to="/create-task">New to-do</Link>
           </div>
        </div>
    </main>
    );
  }
}