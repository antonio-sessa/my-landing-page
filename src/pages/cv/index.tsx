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

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <PageWrapper>
      <CV isSmallScreen={isSmallScreen} />
    </PageWrapper>
  );
};

export default CVPage;
