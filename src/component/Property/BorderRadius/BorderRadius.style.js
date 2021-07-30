import styled from "styled-components";
import ShadowImage from "../../../images/shadow.jpg";
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

