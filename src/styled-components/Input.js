import styled from "styled-components";
import Color from "./Color";

const ContainerSuscribe = styled.section`
display:flex;
flex-direction: column;
width: 95%;
padding-left: 1.6rem;
`

const InputEmail = styled.input`
margin: .5rem 0;
border: 1px solid ${Color.Grey};
border-radius: .3rem;
padding: .7rem;
outline: none;
`
const EmailAdress = styled.label`
color:${Color.DarkSlateGrey};
font-weight: 700;
font-size:.7rem;
margin-top: 1.5rem;
`

const BtnSuscribe = styled.button`
background-color: ${Color.DarkSlateGrey};
color: ${Color.White};
font-weight: 700;
padding: .7rem;
border:none;
margin-top: .6rem;
cursor: pointer;
border-radius:.5rem;
&:hover{
    background-image: linear-gradient(${Color.Orange}, ${Color.Pink});
    // box-shadow
    //transition
}
`

export{EmailAdress, InputEmail, BtnSuscribe,ContainerSuscribe}