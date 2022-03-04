import react from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import HeroBlogPost from "../components/HeroBlogPost";
import { blogData } from "../data";
import BlogCard from "../components/BlogCard";

const Container = styled.div`
  background: #e4e6ec;
  height: 100%;
  max-width: 100%;
`;

const Wrapper = styled.div`
  max-width: 100%;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 100px;
`;

const BlogCardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const Home = () => {
  const firstBlog = blogData[0];

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>The Blog</Title>
        <HeroBlogPost
          Image={firstBlog.image}
          Date={firstBlog.createdDate}
          Title={firstBlog.title}
          Subtitle={firstBlog.subtitle}
        />
        <BlogCardSection>
          {blogData.map((blog) => {
            return (
              <BlogCard
                key={blog.id}
                Image={blog.image}
                Date={blog.createdDate.toDateString().toLocaleLowerCase()}
                Title={blog.title}
                Subtitle={blog.subtitle}
              />
            );
          })}
        </BlogCardSection>
      </Wrapper>
    </Container>
  );
};

export default Home;
