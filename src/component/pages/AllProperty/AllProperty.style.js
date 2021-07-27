import styled from "styled-components";
import { Container } from "../../GlobalStyle";

export let PropertyBanner = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  padding: 30px 0;
  h2 {
    font-size: 40px;
    margin-bottom:25px ;
  }
`;
export let PropertyContainer = styled(Container)`
  flex-wrap: wrap;
  span{
      background:#f7f7f7;
      padding:20px 35px;
      margin:20px;
      border-radius: 7px;
      a{
        color:black;
        text-decoration:none;
        font-size:25px;
      }
  }
`;
