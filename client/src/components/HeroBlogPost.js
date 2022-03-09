import React from "react";
import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";

const zoomInAnimation = keyframes`${zoomIn}`;

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 400px;
  cursor: pointer;
  margin-top: 30px;
  animation: 1s ${zoomInAnimation};
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

const Date = styled.p`
  color: #a7a8ad;
  font-weight: bold;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 70px;
`;

const Subtitle = styled.h3`
  color: #696969;
  font-weight: 400;
  font-size: 15px;
`;

const HeroBlogPost = (props) => {
  return (
    <Container>
      <Left>
        <Image src={props.Image} />
      </Left>
      <Right>
        <Date>{props.Date.toDateString()}</Date>
        <Title>{props.Title}</Title>
        <Subtitle>{props.Subtitle}</Subtitle>
      </Right>
    </Container>
  );
};

export default HeroBlogPost;
