import styled from "styled-components";

interface ReadingItemProps {
	title: string;
	author: string;
	link?: string;
}

const Item = styled.li`
  margin: 0.75rem 0;
  font-size: 1.1rem;

  a {
    color: #4da3ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ReadingItem = ({ title, author, link }: ReadingItemProps) => {
	return (
		<Item>
			{link ? (
				<a href={link} target="_blank" rel="noopener noreferrer">
					{title}
				</a>
			) : (
				title
			)}{" "}
			– {author}
		</Item>
	);
};
