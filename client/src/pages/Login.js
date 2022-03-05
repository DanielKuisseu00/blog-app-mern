import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { addUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

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
  font-weight: bold;
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });

      const foundUser = res.data;
      setUser(foundUser);
      console.log(user);
      res.data && dispatch(addUser(foundUser));
      res.data && history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

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
          <Form onSubmit={login}>
            <Label for="username">username</Label>
            <Input
              onChange={(e) => setUsername(e.target.value)}
              type={"text"}
              name="username"
            ></Input>
            <Label for="password">Password</Label>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type={"password"}
              name="password"
            ></Input>
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
