import styled, { createGlobalStyle } from "styled-components";
export let GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
}
body{
  overflow-x: hidden;
}
`;
export let Container = styled.div`
  width: 1150px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  flex-wrap: wrap;
  @media (max-width:1150px){
    width: 100%;
  }
`;
export let Button = styled.a`
  font-size: 20px;
  padding: 8px 35px;
  color: ${({ allColor }) => allColor.color} !important ;
  background: ${({ allColor }) => allColor.bg} !important;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
export let Column = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  @media (max-width:1150px){
    width: 100%;
    margin: 30px 0;
  }
`;
export let InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  label{
    font-size: 20px;
    margin-bottom: 10px;
  }
  input{
    width: 100%;
  }
`;
