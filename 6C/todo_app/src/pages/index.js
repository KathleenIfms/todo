import React from "react"
import Main from "../components/main"
import { Link } from "gatsby";
import isPrivateRoute from "../components/private-route";
import Menu from "../components/menu"




class Index extends React.Component {
  render(){
    return (
      <div >
        <Menu/>
         <Main/>
         
      </div>




    );
  }
}

export default isPrivateRoute({component: Index, location: '/index'});