import Image from "next/image";
import styled from "styled-components";

const LogoWrapper = styled.div`
  height: 1.8rem;
  max-width: 7rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  border-radius: 0.15rem;
  overflow: hidden;
`;

const LogoLink = styled.a.attrs(() => ({
	target: "_blank",
	rel: "noopener noreferrer",
}))`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: auto;
`;

export type CompanyLogoProps = {
	src: string;
	alt: string;
	href: string;
	ariaLabel?: string;
	width?: number;
	height?: number;
};

export const CompanyLogo = ({
	src,
	alt,
	href,
	ariaLabel,
	width = 112,
	height = 28,
}: CompanyLogoProps) => {
	return (
		<LogoWrapper>
			<LogoLink href={href} aria-label={ariaLabel || `Visit ${alt}`}>
				<Image
					key={src}
					src={src}
					alt={alt}
					width={width}
					height={height}
					style={{
						height: "100%",
						width: "100%",
						objectFit: "contain",
						display: "block",
					}}
					unoptimized={false}
				/>
			</LogoLink>
		</LogoWrapper>
	);
};

export default CompanyLogo;
