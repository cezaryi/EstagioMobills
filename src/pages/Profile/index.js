import React from 'react';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <form>
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg" alt=""/>
      
      <input type= "name" placeholder="Nome Completo"/>
      <input type= "email" placeholder="Seu Email"/>

      <hr/>

      <input type= "password" placeholder="Senha Atual"/>
      <input type= "password" placeholder="Nova Senha"/>
      <input type= "password" placeholder="Confirmar nova senha"/>

      <button type="submit">Atualizar Perfil</button>
      </form>

      <button type="submit">Log Out</button>
    </Container>
  );
}
