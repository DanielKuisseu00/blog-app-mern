import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 98%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 1%;
`;

const LogoWrapper = styled.div`
  flex: 2;
`;

const Logo = styled.h2`
  font-weigth: bold;
  font-size: 30px;
  background: #553cfb;
  color: white;
  padding: 10px;
  border-radius: 10px;
  display: inline;
  cursor: pointer;
`;

const Navigation = styled.ul`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Item = styled.li`
  list-style: none;
  font-weight: bold;
  cursor: pointer;
  margin-left: 20px;
  font-weight: 600;
  font-size: 15px;
  padding-bottom: 10px;
  transition: all 100ms ease-in;
  &: hover {
    color: #553cfb;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <LogoWrapper>
        <Link style={{ textDecoration: "none" }} to="/">
          <Logo>Blogie</Logo>
        </Link>
      </LogoWrapper>
      <Navigation>
        <Link style={{ textDecoration: "none" }} to="/account">
          <Item>My Page</Item>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/create">
          <Item>Create Post</Item>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/login">
          <Item>Login</Item>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/register">
          <Item>Register</Item>
        </Link>
      </Navigation>
    </Container>
  );
};

export default Navbar;
