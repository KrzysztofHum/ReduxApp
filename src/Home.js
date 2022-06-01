import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Home = () => {
  return (
    <>
      <h2>Welcome to the homepage!</h2>
      <p>Here you can see React Redux in action.</p>
      <Nav>
        <NavLink to="/counter">-Counter</NavLink>
        <NavLink to="/dataFlow">-Data Flow</NavLink>
      </Nav>
    </>
  );
};

export default Home;
