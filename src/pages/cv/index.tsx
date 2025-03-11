import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CV from "../../components/CV";

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e1e1e, #2c2c2c);
  color: #f0f0f0;
`;

const CVPage: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Consider desktop devices to have width 1024px or higher
      setIsSmallScreen(isSmallDevice());
    };

    const isSmallDevice = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const ppi = window.devicePixelRatio * 160; // Approximation of PPI based on device pixel ratio
      const diagonalInches =
        Math.sqrt(screenWidth ** 2 + screenHeight ** 2) / ppi;
      return diagonalInches < 6; // Consider small screen if diagonal is less than 6 inches
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <PageWrapper>
      <CV isSmallScreen={!isDesktop && isSmallScreen} />
    </PageWrapper>
  );
};

export default CVPage;
