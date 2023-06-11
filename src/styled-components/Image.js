import styled from "styled-components";

const SectionImage = styled.aside`
  display: flex;
  justify-content: center;
  @media (max-width: 899px) {
    .desktop {
      display: none;
    }
    .mobile {
      width: 100%;
    }
  }
  @media (min-width: 900px) {
    .mobile {
      display: none;
    }
  }
  .desktop {
    margin: auto;
    width: 95%;
    height: auto;
  }
`;
export { SectionImage };
