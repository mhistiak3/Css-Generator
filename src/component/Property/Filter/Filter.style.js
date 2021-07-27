import styled from "styled-components";
import ShadowImage from "../../../images/shadow.jpg";
export let BoxFilterProperty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 0;
  h1 {
    text-align: center;
    margin-bottom: 50px;
  }
`;
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
export let FilterPropertyBox = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding: 30px;
  border-radius: 5px;
  color: black;
  font-size: 25px;
  margin-top: 60px;
  line-height: 40px;
`;
