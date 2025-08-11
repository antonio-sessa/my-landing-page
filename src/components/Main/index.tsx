import Image from "next/image";
import styled from "styled-components";

export const MainWrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  padding: 2rem;

  min-height: 100vh;
  max-height: 100vh;

  text-align: center;
  overflow: hidden;

  /* Preserve your responsive paddings: */
  padding-top: 70vh;  /* Desktop default */

  @media (max-width: 1120px) {
    padding-top: 62vh;
  }

  @media (max-width: 1120px) and (orientation: landscape) {
    padding-top: 45vh;
  }

  @media (max-width: 700px) and (orientation: portrait) {
    padding-top: 55vh;
  }

  @media (max-width: 700px) and (orientation: landscape) {
    padding-top: 34vh;
  }

  /* Make sure children stack above background */
  > * {
    position: relative;
    z-index: 1;
  }
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0; /* Stays behind everything */
  pointer-events: none; /* Background only, avoids blocking clicks */
`;

export const Main = ({ children }) => {
	return (
		<MainWrapper>
			<Background>
				<Image
					src="/media/images/landing.jpg"
					alt=""
					fill
					priority
					sizes="100vw"
					style={{ objectFit: "cover" }}
				/>
			</Background>
			{children}
		</MainWrapper>
	);
};
