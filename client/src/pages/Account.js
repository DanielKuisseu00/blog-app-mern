import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { user, blogData } from "../data";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #e4e6ec;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;

const UserLogo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-image: linear-gradient(160deg, blue, #00fff2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  font-size: 50px;
`;

const Wrapper = styled.div``;

const Account = () => {
  return (
    <Container>
      <Navbar />
      <LogoWrapper>
        <UserLogo>{user.username.slice(0, 1)}</UserLogo>
      </LogoWrapper>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default Account;
