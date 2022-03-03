import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div``;

const TopContent = styled.div``;

const Title = styled.h2`
  font-weight: 600;
  font-size: 40px;
`;

const Subtitle = styled.p`
  color: #9797b3;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  fontc-weight: bold;
  color: #9797b3;
  font-size: 13px;
  margin-bottom: 7px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #9797b3;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background: #553cfb;
  border: none;
  font-weight: bold;
  color: white;
  padding: 10px;
  border-radius: 20px;
  margin-top: 60px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  background-image: url("https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;

const Logo = styled.h1`
  position: absolute;
  font-weight: bold;
  color: #553cfb;
  font-size: 80px;
  top: 270px;
  left: 200px;
`;

const Login = () => {
  return (
    <Container>
      <Left>
        <Wrapper>
          <TopContent>
            <Title>Login</Title>
            <Subtitle>
              Use your username and password to login to Blogie
            </Subtitle>
          </TopContent>
          <Form>
            <Label for="username">username</Label>
            <Input type={"text"} name="username"></Input>
            <Label for="password">Password</Label>
            <Input type={"password"} name="password"></Input>
            <Button type="submit">Login</Button>
          </Form>
        </Wrapper>
      </Left>
      <Right>
        <Logo>Blogie</Logo>
      </Right>
    </Container>
  );
};

export default Login;
