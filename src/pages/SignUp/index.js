import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg';

function SignUp() {
  return (
    <>
    <img src={logo} alt="Mobills"/>

    <form>
      <input placeholder="Nome Completo"/>
      <input type= "email" placeholder="Seu Email"/>
      <input type= "password" placeholder="Senha"/>

      <button type="submit">Criar Conta</button>
      <Link to= "/">Já possuo Login</Link>
      
    </form>
    </>
  );
}

export default SignUp;