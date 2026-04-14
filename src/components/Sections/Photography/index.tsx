"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import type { UnsplashPhoto } from "../../../types/unsplashPhoto";
import { Link } from "../../Typography/Link";
import SectionTitle from "../../Typography/SectionTitle";
import Container from "../../UI/Container";
import SectionBlock from "../../UI/SectionBlock";

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PhotoLink = styled(Link)`
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  aspect-ratio: 1;
  background-color: rgba(255, 255, 255, 0.05);
  text-decoration: none;

  &:focus {
    text-decoration: none;
  }

  img {
    transition: transform 300ms ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Attribution = styled.p`
  text-align: center;
  font-size: 0.8rem;
  margin-top: 1rem;
  opacity: 0.5;
`;

export const Photography = () => {
	const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);

	useEffect(() => {
		fetch("/api/photos")
			.then((res) => res.json())
			.then((data) => setPhotos(data.photos ?? []));
	}, []);

	if (photos.length === 0) return null;

	return (
		<SectionBlock id="photography">
			<Container>
				<SectionTitle>Photography</SectionTitle>
				<PhotoGrid>
					{photos.map((photo) => (
						<PhotoLink
							key={photo.id}
							href={photo.links.html}
							ariaLabel={photo.alt_description ?? "Photo by Antonio Sessa"}
						>
							<Image
								src={photo.urls.regular}
								alt={photo.alt_description ?? ""}
								fill
								sizes="(max-width: 700px) 50vw, 33vw"
								style={{ objectFit: "cover" }}
							/>
						</PhotoLink>
					))}
				</PhotoGrid>
				<Attribution>
					Photos by Antonio Sessa on{" "}
					<Link
						href="https://unsplash.com/@antony_sex"
						ariaLabel="Antonio Sessa on Unsplash"
					>
						Unsplash
					</Link>
				</Attribution>
			</Container>
		</SectionBlock>
	);
};
