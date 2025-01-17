import React from "react";
import styled from "styled-components";

const CVPath = "/media/antoniosessa_CV.pdf";

const PDFViewerWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const PDFViewer = styled.object`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 80%;
  }
`;

const Disclaimer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(40, 40, 40, 0.95);
  text-align: center;
  padding: 20px;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.5);

  p {
    margin: 0;
    font-size: 1.2rem;
    color: #f0f0f0;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  a {
    color: #1e90ff;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #00bfff;
      text-decoration: underline;
    }
  }
`;

interface CVProps {
  isSmallScreen: boolean;
}

const CV: React.FC<CVProps> = ({ isSmallScreen }) => {
  return (
    <>
      <PDFViewerWrapper>
        <PDFViewer data={CVPath} type="application/pdf" />
      </PDFViewerWrapper>

      {isSmallScreen && (
        <Disclaimer>
          <p>
            {`Can't view this file? `}
            <a href={CVPath} download>
              {`Download the CV`}
            </a>
            !
          </p>
        </Disclaimer>
      )}
    </>
  );
};

export default CV;
