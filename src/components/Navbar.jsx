import React from "react";
import { NavLink } from "react-bootstrap";
import styled from "styled-components";
import Nav from "./Nav";
function Navbar() {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="/src/assets/images/logo.png" alt="" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
  img {
    width: 55%;
  }
`;
export default Navbar;
