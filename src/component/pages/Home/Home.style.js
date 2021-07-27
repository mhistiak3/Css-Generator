import { Container } from "../../GlobalStyle";
import styled from "styled-components";
import BannerImage from "../../../images/BannerImage.jpg";
import { Link } from "react-router-dom";

export let Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url(${BannerImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export let BannerContainer = styled(Container)`
  flex-direction: column;
  text-align: center;
`;
export let H1 = styled.h1`
  font-size: 50px;
  font-weight: 300;
  color: ${({ theme }) => theme.color};
  padding: 0 100px;
  margin-bottom: 40px;
  @media (max-width: 800px) {
    font-size: 35px;
    padding: 0 30px;
  }
  @media (max-width: 400px) {
    font-size: 30px;
    padding: 0 10px;
  }
`;

export let BannerButton = styled(Link)`
  font-size: 20px;
  padding: 8px 35px;
  color: ${({ color }) => color.color} !important ;
  background: ${({ color }) => color.bg} !important;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  text-decoration:none;
`;
