import React, { useState } from 'react';

import { Container } from './styles';

import firebase from '../../config/config';

export default function Create() {
    
    const [value, setValue] = useState("");
    const [transacao, setTransacao] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");

    const handeSubmit = (e) => {
        e.preventDefault();

        firebase.firestore().collection('transacoes').add({
            value: value,
            transacao: transacao,
            date: date,
            type: type
        })
        .then(() => {
            alert('Criado com sucesso.');
        })
        .catch((error) => {
            alert(error.message);
        });

        setValue("");
        setTransacao("");
        setDate("");
        setType("");
    };


  return (
    <Container>
      <form onSubmit ={handeSubmit}>
      <input type= "text" value={value} 
      onChange={(e)=> setValue(e.target.value)} placeholder="Valor"/>
      <input type= "text" value={transacao} 
      onChange={(e)=> setTransacao(e.target.value)} placeholder="Tipo da Transação"/>

      <hr/>

      <input type= "date" value={date} 
      onChange={(e)=> setDate(e.target.value)} placeholder="Senha Atual"/>
      <input type= "text" value={type} 
      onChange={(e)=> setType(e.target.value)} placeholder="Tag da Transação"/>

      <button type="submit">Criar Transação</button>
      </form>
    </Container>
  );
}