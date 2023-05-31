import styled from "styled-components";
import Color from "./Color";


const Container = styled.section`
display: grid;
font-size: .9rem;
grid-template-columns: 50% 50%;
background-color: ${Color.White};
padding: 1rem;
width: 58%;
height: auto;
margin: 3rem auto 0;
border-radius: 1.7rem;
padding: 1rem .5rem ;
`

const NewsletterInfo = styled.article`
text-align: start;
img{
    width: 1.1rem;
    margin: 0 .3rem;
}
`

const Title = styled.h1`
color: ${Color.DarkSlateGrey};
font-size: 2.2rem;
padding: 2rem 0 0 1.8rem;
margin-bottom: 2rem;
`

const Paragraph = styled.p`
text-align:start;
margin: 1.2rem;
color: ${Color.CharcoalGrey};
`
const List = styled.li`
color: ${Color.DarkSlateGrey};
list-style: none;
 margin: .6rem .9rem;
`


export {Title,Container,NewsletterInfo,Paragraph, List}