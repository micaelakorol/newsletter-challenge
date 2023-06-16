import React from "react";
import { List, Paragraph } from "../styled-components/Newsletter";
import subscriptionBenefits from "./data/benefit";
const BodyNewsletter = () => {
  let list = subscriptionBenefits.item;
  return (
    <>
      <Paragraph>
        Join 60,000+ product managers receiving monthly updates on:
      </Paragraph>
      {list.map((item) => (
        <ul key={item.id}>
          <List>
            <img src={item.image} alt="" />
            {item.text}
          </List>
        </ul>
      ))}
    </>
  );
};

export default BodyNewsletter;
