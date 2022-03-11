import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  background: #e4e6ec;
  max-width: 100vw;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  padding: 0 40px;
  height: 100%;
  position: relative;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 70px;
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 500px;
  width: 100%;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
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

const Label = styled.label`
  font-weight: bold;
  color: #9797b3;
  font-size: 13px;
  margin-bottom: 7px;
`;

const ContentInput = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  width: 500px;
  height: 100px;
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
  margin-top: 20px;
  cursor: pointer;
`;

const Create = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState();
  const user = useSelector((state) => state.user.value);
  const history = useHistory();

  const axiosBlog = axios.create({
    baseURL: "https://blog-0011.herokuapp.com/api/blogs",
    headers: {
      "Content-Type": "multipart/form-data",
      auhtorization: `Bearer ${user.accessToken}`,
    },
  });

  const postBlog = async ({ title, subtitle, content, image }) => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("content", content);
    formData.append("image", image);

    try {
      const res = await axiosBlog.post("blog", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const result = await postBlog({ title, subtitle, content, image });
      history.push("/");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const fileSelected = (e) => {
    console.log(e.target.files[0]);
    const foundImage = e.target.files[0];
    setImage(foundImage);
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Write a post</Title>
        <FormWrapper>
          <Form onSubmit={submit}>
            <Label>Title</Label>
            <Input
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />

            <Label>Subtitle</Label>
            <Input
              name="subtitle"
              onChange={(e) => setSubtitle(e.target.value)}
              type="text"
            />

            <Label>Content</Label>
            <ContentInput
              name="content"
              onChange={(e) => setContent(e.target.value)}
              rows="5"
              cols="80"
            />

            <Input onChange={fileSelected} type="file" />
            <Button type="submit">Create</Button>
          </Form>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default Create;
