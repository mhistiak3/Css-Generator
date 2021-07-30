import styled from "styled-components";

export const RgbaBox =styled.div`
  width: 100%;
  height: 450px;
  background-color: ${(props)=>props.color};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`