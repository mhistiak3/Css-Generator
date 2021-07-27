import styled from "styled-components";
import ShadowImage from "../../../images/shadow.jpg";
export let BoxShadowProperty = styled.div`
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
  background-image: url(${ShadowImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  box-shadow: ${(props) => props.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export let ShadowPropertyBox = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  color: black;
  font-size: 25px;
  margin-top: 60px;
`;
export let ColorBox = styled.span`
  width: 60px;
  margin-bottom: 10px;
  height: 20px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
`;
export let Checkbox = styled.div`
  display: flex;
  align-items: center;
  input[type="checkbox"] {
    appearance: none;
    width: 60px;
    height: 26px;
    border: 2px solid #000;
    border-radius: 20px;
    background: #f1e1e1;
    position: relative;
    box-sizing: border-box;
  }
  input[type="checkbox"]::before {
      content: "";
      width: 15px;
      height: 15px;
      background: rgba(0, 0, 0, 50);
      border: 2px solid #000;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(12%, 15%);
      transition: all 0.3s ease-in-out;
    }
    input[type="checkbox"]::after {
      position: absolute;
      top: 0;
      left: 0px;
    }
    input[type="checkbox"]:checked::before {
      transform: translate(200%, 15%);
      transition: all 0.3s ease-in-out;
    }
    input[type="checkbox"]:checked::after {
      position: absolute;
      top: 5px;
      left: 5px;
    }
 
  label {
    margin: 20px;
  }
`;
