import React, { useContext, useEffect } from "react";
import {
  Container,
  Title,
  NewsletterInfo,
} from "../styled-components/Newsletter";
import Image from "./Elements/Image";
import BodyNewsletter from "./Elements/BodyNewsletter";
import Input from "./Elements/Input";
import { MyContext } from "../context/Context";

const Newsletter = () => {
  const { setEmail } = useContext(MyContext);
  useEffect(() => {
    setEmail("");
  }, []);
  return (
    <Container>
      <NewsletterInfo>
        <Title>Stay updated!</Title>
        <BodyNewsletter />
        <Input />
      </NewsletterInfo>
      <Image />
    </Container>
  );
};

export default Newsletter;
