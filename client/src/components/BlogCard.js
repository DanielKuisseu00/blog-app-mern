import React from "react";
import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";

const zoomInAnimation = keyframes`${zoomIn}`;

const Container = styled.div`
  max-width: 200px;
  margin: 15px 15px;
  animation: 1s ${zoomInAnimation};
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 10px;
`;

const Date = styled.p`
  color: #a7a8ad;
  font-weight: bold;
  font-size: 13px;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 35px;
  margin-top: -10px;
`;

const Subtitle = styled.p`
  color: #696969;
  font-weight: 400;
  font-size: 15px;
`;

const BlogCard = (props) => {
  return (
    <Container data-aos="zoom-in">
      <Image src={props.Image} />
      <Date>{props.Date}</Date>
      <Title>{props.Title}</Title>
      <Subtitle>{props.Subtitle}</Subtitle>
    </Container>
  );
};

export default BlogCard;
