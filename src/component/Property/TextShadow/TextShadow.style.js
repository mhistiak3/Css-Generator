import styled from "styled-components";
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

export let ColorBox = styled.span`
  width: 60px;
  margin-bottom: 10px;
  height: 20px;
  border-radius: 5px;
  background-color: ${(props) => props.color};


`;
