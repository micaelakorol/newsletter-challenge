import React from "react";
import {
  Container,
  Title,
  NewsletterInfo,
} from "../styled-components/Newsletter";
import Image from "./Image";
import BodyNewsletter from "./BodyNewsletter";

const Newsletter = () => {
  return (
    <Container>
      <NewsletterInfo>
        <Title>Stay updated!</Title>
        <BodyNewsletter />
      </NewsletterInfo>
      <Image />
    </Container>
  );
};

export default Newsletter;
