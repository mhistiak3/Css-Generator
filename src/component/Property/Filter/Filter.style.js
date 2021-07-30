import styled from "styled-components";
import ShadowImage from "../../../images/shadow.jpg";

export let FilterBox = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${ShadowImage});
  filter: ${(props)=>props.filter};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  box-shadow: ${(props) => props.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
`;

