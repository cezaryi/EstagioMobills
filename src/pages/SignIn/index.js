import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg';

function SignIn() {
  return (
    <>
    <img src={logo} alt="Mobills"/>

    <form>
      <input type= "email" placeholder="Seu Email"/>
      <input type= "password" placeholder="Senha"/>

      <button type="submit">Acessar</button>
      <Link to= "/register">Criar Conta</Link>
      
    </form>
    </>
  );
}

export default SignIn;