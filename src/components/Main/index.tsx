import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  padding: 2rem;

  background-image: url("/media/images/landing.jpg");
  background-size: cover;
  background-position: center;

  min-height: 100vh;
  max-height: 100vh;

  text-align: center;
  padding-top: 70vh;

  @media (max-width: 700px) and (orientation: portrait) {
    /* Mobile portrait */
    padding-top: 65vh;
  }

  @media (max-width: 700px) and (orientation: landscape) {
    /* Mobile landscape */
    padding-top: 50vh;
  }

  @media (min-width: 701px) and (max-width: 1120px) and (orientation: portrait) {
    /* Tablet portrait */
    padding-top: 65vh;
  }

  @media (min-width: 701px) and (max-width: 1120px) and (orientation: landscape) {
    /* Tablet landscape */
    padding-top: 50vh;
  }
`;
