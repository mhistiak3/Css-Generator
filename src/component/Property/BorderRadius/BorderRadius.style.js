import styled from "styled-components";
import ShadowImage from "../../../images/shadow.jpg";
export let BorderRadiusProperty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 0;
  h1 {
    text-align: center;
    margin-bottom: 50px;
  }
 
`;
export let BorderRadiusBox = styled.div`
  width: 100%;
  height: 450px;
  background-image: url(${ShadowImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${(props)=>props.borderRadius};
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export let BorderRadiusPropertyBox = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  color: black;
  font-size: 25px;

`;

