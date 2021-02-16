import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom'
import firebase from '../../config/config';

import logo from '../../assets/logo.svg';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: ''
    };
    this.logar = this.logar.bind(this);
    this.sair = this.sair.bind(this);

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        alert('Usuario Logado com sucesso! \n Email: ' + user.email);
      }
    })
  }

  logar(e){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error) =>{
      if(error.code === 'auth/wrong-password'){
        alert('Senha incorreta!');
      }else{
        alert('Codigo de error: ' + error.code);
      }
    })
    
    e.preventDefault();
  }

  sair(){

    firebase.auth().signOut();
    alert('Deslogado com sucesso!');
  }

  render(){
    return(
      <div> 
        <img src={logo} alt="Mobills"/>

        <form onSubmit={this.logar}>
          <input type="email" value={this.state.email} 
                 onChange={(e) => this.setState({email: e.target.value})} placeholder="Seu Email"/>

          <input type="password" value={this.state.senha} 
                 onChange={(e) => this.setState({senha: e.target.value})} placeholder="Senha"/>

          <button type="submit">Acessar</button>
          <Link to= "/register">Criar Conta</Link>

        </form>

        <button onClick={this.sair}>Sair</button>

      </div>
    );
  }
}