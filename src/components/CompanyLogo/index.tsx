import Image from "next/image";
import styled from "styled-components";

const LogoWrapper = styled.div`
  width: auto;
  height: 1.8rem;
  aspect-ratio: 4 / 1;
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
  width: 100%;
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
	width = 112, // ~4:1 ratio
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
					style={{ objectFit: "contain" }}
					unoptimized={false}
				/>
			</LogoLink>
		</LogoWrapper>
	);
};

export default CompanyLogo;
