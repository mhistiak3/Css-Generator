import { ThemeProvider } from "styled-components";
import { Container, Button } from "../../GlobalStyle";
import { Logo, Menu, Nav, Bar } from "./Navbar.style";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  let [menuIcon, setMenuIcon] = useState(false);
  return (
    <ThemeProvider theme={{ bg: "#353b48", color: "#f5f6fa" }}>
      <Nav>
        <Container>
          <Logo>
            <h2>CSS Generator</h2>
          </Logo>
          <Menu MenuShowHide={menuIcon}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/property">Generate Property</Link>
            </li>
            <li>
              <Link to="/documentation">Documentation</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Button
                allColor={{ color: "#353b48", bg: "#f5f6fa" }}
                href="https://github.com/"
              >
                Github
              </Button>
            </li>
          </Menu>
          <Bar onClick={() => setMenuIcon(!menuIcon)}>
            {menuIcon ? <FaTimes /> : <FaBars />}
          </Bar>
        </Container>
      </Nav>
    </ThemeProvider>
  );
};

export default MyNavbar;
