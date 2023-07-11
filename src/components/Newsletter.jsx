import React, { useContext, useEffect } from "react";
import {
  Container,
  Title,
  NewsletterInfo,
} from "../styled-components/Newsletter";
import Image from "./Image";
import BodyNewsletter from "./BodyNewsletter";
import Input from "./Input";

const Newsletter = () => {
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
