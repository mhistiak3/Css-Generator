import styled from "styled-components";
export let Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  @media (max-width: 1000px){
    position: fixed;
  }
`;
export let Logo = styled.div`
  color: ${({ theme }) => theme.color};
`;

export let Menu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  li {
    margin: 0 15px;
    a {
      color: ${({ theme }) => theme.color};
      font-size: 18px;
      text-decoration: none;
      transition: 0.5s;
      font-family: "Lato", sans-serif;
    }
    a:hover {
      color: #7f8fa6;
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.bg};
    width: 300px;
    height: 100vh;
    transform:${({MenuShowHide})=>MenuShowHide ?'translateX(0)':'translateX(500px)'} ;
    li {
      margin: 20px 0;
    }
  }
`;

export let Bar = styled.span`
  color: ${({ theme }) => theme.color};
  display: none;
  @media (max-width: 1000px){
    display: block;
    position: fixed;
    top: 20px;
    right: 30px;
    font-size: 35px;
    cursor: pointer;
    transition: 0ms.7s;
  }
`;
