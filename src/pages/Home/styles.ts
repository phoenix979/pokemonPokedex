import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CenteredInput = styled.input`
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Form = styled.form<FormProps>`
margin-top: 40px;
max-width: 700px;

display: flex;

input {
  flex: 1;
  height: 60px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;
  border: 2px solid #fff;
  border-right: 0;

  ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

  &::placeholder {
    color: #a8a8b3;
  }
}

button {
  width: 210px;
  height: 60px;
  background: #F0F5F9;
  border-radius: 0px 5px 5px 0px;
  border: 0;
  color: #FFF;
  font-weight: bold;
  transition: background-color 0.2;

  &:hover {
    background: ${shade(0.2, '#ee6b2f')};
  }
}
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
  font-size: 12px;
`;

export const ResultSearch = styled.div`
  margin-top: 50px;
  max-width: 700px;

  a {
    background: #F0F5F9;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(5px)
    }

    & + a {
      margin-top: 10px
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
