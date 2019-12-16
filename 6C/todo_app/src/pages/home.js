import React from 'react';
import { handleLogin } from '../helpers/user-helper';
import { navigate, Link } from 'gatsby';
import Message from '../components/message';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      },
      message: props.location.state.message,
      visible: (props.location.state.message) ? true : false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDimiss = this.onDimiss.bind(this);
  }

  handleChange(e) {
    let newState = {...this.state};
    newState.user[e.target.name] = e.target.value;
    this.setState(newState);
  }

  onDimiss() {
    this.setState({...this.state, visible: !this.state.visible});
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      await handleLogin(this.state.user);
      navigate('/');
    } catch(e) {
      this.setState({...this.state, message: e.message, visible: true});
    }
  }

  render() {
    return (
      <header className="header-home">
          <Message message={this.state.message} show={this.state.visible} toggle={this.onDimiss} />
      <div className="main">
          <div class="logo">
                              <a className="logo">to niad</a>
          </div>
          
           <ul className="menu-log">
             <a>Log in</a>
             <a>Sign up</a>
           </ul>

      </div>


      <div className="container">

              <h1>to niad</h1>
              <span className="des">Uma lista de tarefas realmente útil</span> 
              <button className="btn-login">Log in</button>
              <button className="btn-inscreva" >Sign up</button>
      </div>
  </header>
    );
  }
}

export default Login;