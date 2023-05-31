import React from "react";
import { List, Paragraph } from "../styled-components/Newsletter";
import Img from '../assets/images/icon-success.svg'
const BodyNewsletter = () => {
  return (
    <>
      <Paragraph>Join 60,000+ product managers receiving monthly updates on:</Paragraph>
      <ul>
        <List> <img src={Img} alt="Check" /> Product discovery and building what matters</List>
        <List><img src={Img} alt="Check" /> Measuring to ensure updates are a success</List>
        <List> <img src={Img} alt="Check" />And much more!</List>
      </ul>
    </>
  );
};

export default BodyNewsletter;
