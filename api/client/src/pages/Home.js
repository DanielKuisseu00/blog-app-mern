import react, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import HeroBlogPost from "../components/HeroBlogPost";
import { blogData } from "../data";
import BlogCard from "../components/BlogCard";
import { useSelector } from "react-redux";
import axios from "axios";

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
  const user = useSelector((state) => state.user.value);
  const [blogs, setBlogs] = useState([]);
  console.log(user);

  const axiosInstance = axios.create({
    baseURL: "https://blog-0011.herokuapp.com/api/blogs",
  });

  useEffect(async () => {
    try {
      const getBlogs = async () => {
        const res = await axiosInstance.get("/");
        return res;
      };

      const response = await getBlogs();
      console.log(response.data);
      setBlogs(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

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
          {blogs.map((blog) => {
            return (
              <BlogCard
                key={blog._id}
                Image={blog.image}
                Date={blog.date}
                Title={blog.title}
                Subtitle={blog.subtitle}
                Content={blog.content}
              />
            );
          })}
        </BlogCardSection>
      </Wrapper>
    </Container>
  );
};

export default Home;
