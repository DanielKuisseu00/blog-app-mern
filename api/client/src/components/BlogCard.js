import React from "react";
import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBlog } from "../redux/blogSlice";

const zoomInAnimation = keyframes`${zoomIn}`;

const Container = styled.div`
  max-width: 200px;
  margin: 15px 15px;
  animation: 1s ${zoomInAnimation};
  cursor: pointer;
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
  const history = useHistory();
  const dispatch = useDispatch();

  console.log(props);
  const handleClick = () => {
    dispatch(
      addBlog({
        date: props.Date,
        title: props.Title,
        subtitle: props.Subtitle,
        content: props.Content,
        image: props.Image,
      })
    );
    history.push("/blog");
  };

  return (
    <Container onClick={handleClick}>
      <Image src={props.Image} />
      <Date>{props.Date || <Skeleton />}</Date>
      <Title>{props.Title || <Skeleton />}</Title>
      <Subtitle>{props.Subtitle || <Skeleton />}</Subtitle>
    </Container>
  );
};

export default BlogCard;
