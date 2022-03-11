import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const Container = styled.div`
  max-width: 100vw;
  height: 100%;
`;

const Wrapper = styled.div`
  max-width: 100%;
  border: 1px solid black;
`;

const Image = styled.img``;

const Title = styled.h1``;

const InfoBar = styled.div``;

const Subtitle = styled.h3``;

const Date = styled.h3``;

const Content = styled.p``;

const Blog = () => {
  const blog = useSelector((state) => state.blog.value);
  console.log(blog.date);
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Image src={blog.Image} />
        <Title>{blog.title}</Title>
        <InfoBar>
          <Subtitle>{blog.Subtitle}</Subtitle>
          <Date>{blog.date}</Date>
        </InfoBar>
        <Content>{blog.content}</Content>
      </Wrapper>
    </Container>
  );
};

export default Blog;
