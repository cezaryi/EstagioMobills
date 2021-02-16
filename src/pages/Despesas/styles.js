import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  img{
    height: 120px;
    margin-bottom: 30px;
  }

  form{
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input{
        margin-top: 5px;
        background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 4px;
        height 44px;
        padding: 0 15px;
        color:#fff
        margin: 0 0 10px;

        &::placeholder{
            color: rgba(255, 255, 255, 0.7);
        }
    }

    hr {
        border: 0;
        height: 1px;
        background: rgba(255, 255, 255, 0.2);
        margin: 20px 0 20px;
    }

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
 }

    > button{
        width: 100%;
        margin: 5px 0 0;
        height: 44px;
        background: #F64C75;
        font-weight: bold;
        color: #FFF;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover{
            background: ${darken(0.05, '#F64C75')};
        }
    }
`;
