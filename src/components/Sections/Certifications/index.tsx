import type { SectionProps } from "../../../types/section-pros";
import Badge from "../../CV/Badge";
import Card from "../../CV/Card";
import Container from "../../CV/Container";
import Grid from "../../CV/Grid";
import Icon from "../../CV/Icon";
import SectionBlock from "../../CV/SectionBlock";
import CardSubtitle from "../../Typography/CardSubtitle";
import CardTitle from "../../Typography/CardTitle";
import SectionTitle from "../../Typography/SectionTitle";

export const Certifications = ({ cardBackground }: SectionProps) => {
	return (
		<SectionBlock id="certifications">
			<Container>
				<SectionTitle>Certifications & Achievements</SectionTitle>

				<Grid>
					<Card $cardBackground={cardBackground}>
						<Icon>🔖</Icon>
						<CardTitle>
							ISTQB® Automation Engineer
							<br />
							(CT-TAE)
						</CardTitle>
						<CardSubtitle>
							International Software Testing Qualifications Board
						</CardSubtitle>
						<Badge>Dec 2023</Badge>
					</Card>

					<Card $cardBackground={cardBackground}>
						<Icon>🔖</Icon>
						<CardTitle>
							ISTQB® Foundation Level
							<br />
							(CTFL)
						</CardTitle>
						<CardSubtitle>
							International Software Testing Qualifications Board
						</CardSubtitle>
						<Badge>Jul 2023</Badge>
					</Card>

					<Card $cardBackground={cardBackground}>
						<Icon>🔖</Icon>
						<CardTitle>
							Professional Scrum Master I<br />
							(PSM™ I)
						</CardTitle>
						<CardSubtitle>Scrum.org</CardSubtitle>
						<Badge>Mar 2020</Badge>
					</Card>

					<Card $cardBackground={cardBackground}>
						<Icon>📜</Icon>
						<CardTitle>
							First Certificate in English (FCE)
							<br />
							B2 level
						</CardTitle>
						<CardSubtitle>Cambridge Assessment English</CardSubtitle>
						<Badge>Jul 2015</Badge>
					</Card>

					<Card $cardBackground={cardBackground}>
						<Icon>🎓</Icon>
						<CardTitle>
							Engineering practice License
							<br />A section
						</CardTitle>
						<CardSubtitle>University of Salerno</CardSubtitle>
						<Badge>Sep 2015</Badge>
					</Card>
				</Grid>
			</Container>
		</SectionBlock>
	);
};
