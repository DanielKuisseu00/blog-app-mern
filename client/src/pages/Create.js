import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

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
  const [file, setFile] = useState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    try {
    } catch (e) {
      
    }
  };

  const fileSelected = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Write a post</Title>
        <FormWrapper>
          <Form onSubmit={submit}>
            <Label>Title</Label>
            <Input onChange={(e) => setTitle(e.target.value)} type="text" />

            <Label>Subtitle</Label>
            <Input onChange={(e) => setSubtitle(e.target.value)} type="text" />

            <Label>Content</Label>
            <ContentInput
              onChange={(e) => setContent(e.target.value)}
              rows="5"
              cols="80"
            />

            <Input onChanage={fileSelected} type="file" />
            <Button type="submit">Create</Button>
          </Form>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default Create;
