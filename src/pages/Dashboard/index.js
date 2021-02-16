import React from 'react';

import { Container, Transacoes, Botoes } from './styles';

import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

function Dashboard() {
  return (
    <Container>
      <div>
        <strong>SALDO TOTAL: R$ 68,00</strong>
      </div>

      <header>
        <button type ="button">
          <MdChevronLeft size={36} color="#FFF"/>
        </button>
        <strong>Fevereiro</strong>
        <button type="button">
          <MdChevronRight size={36} color="#FFF"/> 
        </button>
      </header>

      <ul>
        <Transacoes receita>
          <strong>R$ 400,00</strong>
          <span>Receita / Esporte</span>
        </Transacoes>
        <Transacoes receita>
          <strong>R$ 232,00</strong>
          <span>Despesa / Lazer</span>
        </Transacoes>
        <Transacoes receita>
          <strong>R$ 23,00</strong>
          <span>Receita / Lazer</span>
        </Transacoes>
        <Transacoes>
          <strong>R$ 123,00</strong>
          <span>Despesa / Lazer</span>
        </Transacoes>
        <Transacoes >
          <strong>R$ 400,00</strong>
          <span>Receita / Automotiva</span>
        </Transacoes>
        <Transacoes>
          <strong>R$ 232,00</strong>
          <span>Despesa / Esporte</span>
        </Transacoes>
        <Transacoes receita>
          <strong>R$ 23,00</strong>
          <span>Receita / Alimentação</span>
        </Transacoes>
      </ul>

      <Botoes>
        <button type="submit">Cadastrar Transação</button>
      </Botoes>
    </Container>
  );
}

export default Dashboard;