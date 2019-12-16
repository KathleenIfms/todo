import React from 'react';
import { handleLogin } from '../helpers/user-helper';
import { navigate, Link } from 'gatsby';
import Message from '../components/message';
import Logo from '../img/toniad.png'

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
      <div>
        <Message message={this.state.message} show={this.state.visible} toggle={this.onDimiss} />
        <form className="login-form">
        <a className="logo">to niad</a>
            <div className="txtb">
            <input type="text" name="email" placeholder="Email" value={this.state.user.email} onChange={this.handleChange} />
                
            </div>

            <div className="txtb"> 
                 <input type="password" name="password" placeholder="Senha" value={this.state.user.password} onChange={this.handleChange} />
             </div>
          
         
          <input type="button" className="logbtn" value="Log in" onClick={this.handleSubmit} />
          <div className="bottom-text">
            Não tem conta?  <Link to="/register">Cadastre-se</Link>
           
        </div>
        </form>
      </div>
    );
  }
}

export default Login;