import styled from "styled-components";
import Color from "./Color";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  font-size: 0.9rem;
  background-color: ${Color.White};
  padding: 1rem;
  width: 56%;
  height: auto;
  margin: 2rem auto 0;
  border-radius: 1.7rem;
  padding: 1rem 0.5rem;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    padding: 0 0 1rem 0;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const NewsletterInfo = styled.article`
  text-align: start;
  img {
    width: 1.1rem;
    margin: 0 0.3rem;
  }
`;

const Title = styled.h1`
  color: ${Color.DarkSlateGrey};
  font-size: 2.2rem;
  padding: 2rem 0 0 1.8rem;
  margin-bottom: 2rem;
  @media (max-width: 600px) {
    font-size: 1.7rem;
    padding: 0;
    margin: 1rem;
  }
`;

const Paragraph = styled.p`
  text-align: start;
  margin: 1.2rem;
  color: ${Color.CharcoalGrey};
`;
const List = styled.li`
  color: ${Color.DarkSlateGrey};
  list-style: none;
  margin: 0.6rem 0.9rem;
`;

export { Title, Container, NewsletterInfo, Paragraph, List };
