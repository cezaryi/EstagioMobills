import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import firebase from '../../config/config';

import logo from '../../assets/logo.svg';

export default class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: ''
    };
  this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(e){
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
  .catch((error) =>{
    if(error.code === 'auth/invalid-email'){
      alert('Email invalido!');
    }
    if(error.code === 'auth/weak-password'){
      alert('Senha Fraca!');
    }else{
      alert('Codigo de error: ' + error.code)
    }
  })

  e.preventDefault();
  }

  render(){
    return(
      <div> 
        <img src={logo} alt="Mobills"/>
  
        <form onSubmit={this.cadastrar}>

        <input type="text" value={this.state.email} 
                 onChange={(e) => this.setState({email: e.target.value})} placeholder="Seu Email"/>
  
        <input type="password" value={this.state.senha} 
                 onChange={(e) => this.setState({senha: e.target.value})} placeholder="Senha"/>
  
        <button type="submit">Criar Conta</button>
        <Link to= "/">Já possuo Login</Link>
  
        </form>
      </div>
    );
  }
}