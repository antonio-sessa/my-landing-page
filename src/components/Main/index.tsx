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
  padding-top: 70vh;  /* Desktop default */

  /* Tablet and small laptop screens */
  @media (max-width: 1120px) {
    padding-top: 62vh;
  }

  /* Tablet Landscape or sm-wide phones */
  @media (max-width: 1120px) and (orientation: landscape) {
    padding-top: 45vh;
  }

  /* Mobile portrait */
  @media (max-width: 700px) and (orientation: portrait) {
    padding-top: 55vh;
  }

  /* Mobile landscape: even less top padding */
  @media (max-width: 700px) and (orientation: landscape) {
    padding-top: 34vh;
  }
`;
