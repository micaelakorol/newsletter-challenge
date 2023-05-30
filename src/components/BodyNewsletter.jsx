import React from "react";
import { List, Paragraph } from "../styled-components/Newsletter";
const BodyNewsletter = () => {
  return (
    <>
      <Paragraph>Join 60,000+ product managers receiving monthly updates on:</Paragraph>
      <ul>
        <List>Product discovery and building what matters</List>
        <List> Measuring to ensure updates are a success</List>
        <List> And much more!</List>
      </ul>
    </>
  );
};

export default BodyNewsletter;
