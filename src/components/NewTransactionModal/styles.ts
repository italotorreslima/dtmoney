import styled from "styled-components";
import {darken, transparentize} from "polished";

export const Container = styled.form`
h2{
  color: var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 1rem;

}

input{
 width : 100%;
 padding: 0 1.5rem;
 height: 4rem;
 border-radius: 0.25rem;

 border: 1px solid #d7d7d7;
 background: #e7e9ee;

font-weight: 400;
font-size: 1rem;
margin-top: 1rem;

&::placeholder{
  color: var(--text-body);
}
}

button[type="submit"]{
    background: var(--green);
    width: 100%;
    font-size: 1rem;
    margin-top: 1.5rem;
    height: 4rem;
    color: #fff;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    border: 0;
    font-weight: 600;

  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.9);
  }
  }

`

export const TransactionTypeContainer = styled.div`
margin: 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.5rem;
`

interface TransactionTypeButtonProps{
  isActive: boolean;
  isActiveColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#E52E40"
};

export const TransactionTypeButton = styled.button <TransactionTypeButtonProps>`
height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props)=> props.isActive
   ?  transparentize(0.7 , colors[props.isActiveColor])
   : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;

transition: border-color 0.2s;

&:hover{
  border-color: ${darken(0.15, "#d7d7d7")};
}

  img{
    width: 20px;
    height: 20px;
  }

  span{
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }`