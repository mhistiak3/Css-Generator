import styled from "styled-components";
export let TextShadowProperty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 0;
  h1 {
    text-align: center;
    margin-bottom: 50px;
  }
 
`;
export let ShadowBox = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 5px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  h2{
    text-shadow: ${(props) => props.shadow};
    font-size: 70px;
    font-weight: bold;
  }
`;
export let ShadowPropertyBox = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  color: black;
  font-size: 25px;

`;
export let ColorBox = styled.span`
  width: 60px;
  margin-bottom: 10px;
  height: 20px;
  border-radius: 5px;
  background-color: ${(props) => props.color};


`;
