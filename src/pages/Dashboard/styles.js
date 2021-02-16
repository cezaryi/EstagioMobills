import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-widht: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  div{
    padding: 20px;
    border-radius: 4px;
    background: #fff;
    display: grid;
    grid-gap: 15px;
    margin-top: 30px;
    margin-left: 40%;
    margin-right: 40%;

    strong{
        display: block;
        color: #2962FF;
        font-size: 20px;
        font-weight: normal;
        text-align: center;
    }
  }

  header{
      margin-top: 30px;
      display: flex;
      align-self: center;
      align-items: center;

      button{
          border: 0;
          background: none;
      }

      strong{
          color: #FFF;
          font-size: 24px;
          margin: 0 15px;
      }
  }

  ul{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 15px;
      margin-top: 30px;
      margin-left: 50px;
      margin-right: 50px;
  }
`;

export const Transacoes = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  strong{
      display: block;
      color: ${props => props.receita ? '#008000' : '#FF0000' };
      font-size: 20px;
      font-weight: normal;
  }

  span{
      display: block;
      margin-top: 3px;
      color: ${props => props.receita ? '#008000' : '#FF0000' };
  }
`;

export const Botoes = styled.div`
    button{
        margin: 5px 0 0;
        height: 44px;
        background: #2962FF;
        font-weight: bold;
        color: #FFF;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover{
            background: ${darken(0.05, '#2962FF')};
        }
    }
`;



