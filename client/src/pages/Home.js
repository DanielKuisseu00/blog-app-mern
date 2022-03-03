import react from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import HeroBlogPost from "../components/HeroBlogPost";

const Container = styled.div`
  background: #e4e6ec;
  height: 100vh;
  width: 100vw;
`;

const Wrapper = styled.div`
  max-width: 100%;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 100px;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>The Blog</Title>
        <HeroBlogPost />
      </Wrapper>
    </Container>
  );
};

export default Home;
