import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 70%;
  background: pink;
  height: 400px;
  cursor: pointer;
`;

const Left = styled.div`
  flex: 2;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding-left: 35px;
`;

const Date = styled.p``;

const Title = styled.h2``;

const Subtitle = styled.h3``;

const HeroBlogPost = ({ image }) => {
  return (
    <Container>
      <Left>
        <Image
          src={
            "https://images.unsplash.com/photo-1638913974023-cef988e81629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
        />
      </Left>
      <Right>
        <Date> March 5, 2022</Date>
        <Title>Test Title</Title>
        <Subtitle>Test Subttitle</Subtitle>
      </Right>
    </Container>
  );
};

export default HeroBlogPost;
