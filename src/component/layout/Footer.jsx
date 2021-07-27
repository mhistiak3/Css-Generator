import React from "react";
import styled from "styled-components";

let FooterSm = styled.footer`
  padding: 15px;
  background-color: #353b48;
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  a {
    color: white;
    &&:hover {
      color: lightblue;
    }
  }
`;

const Footer = () => {
  return (
    <FooterSm>
      Developed By <a href="/">Istiak Ahammad ❤</a> | Alright Reserved
    </FooterSm>
  );
};

export default Footer;
