import Badge from "../../../Typography/Badge";
import CardSubtitle from "../../../Typography/CardSubtitle";
import CardTitle from "../../../Typography/CardTitle";
import SectionTitle from "../../../Typography/SectionTitle";
import Card from "../../../UI/Card";
import Container from "../../../UI/Container";
import Grid from "../../../UI/Grid";
import Icon from "../../../UI/Icon";
import SectionBlock from "../../../UI/SectionBlock";

export const Certifications = () => {
	return (
		<SectionBlock id="certifications">
			<Container>
				<SectionTitle>Certifications & Achievements</SectionTitle>

				<Grid>
					<Card>
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

					<Card>
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

					<Card>
						<Icon>🔖</Icon>
						<CardTitle>
							Professional Scrum Master I<br />
							(PSM™ I)
						</CardTitle>
						<CardSubtitle>Scrum.org</CardSubtitle>
						<Badge>Mar 2020</Badge>
					</Card>

					<Card>
						<Icon>📜</Icon>
						<CardTitle>
							First Certificate in English (FCE)
							<br />
							B2 level
						</CardTitle>
						<CardSubtitle>Cambridge Assessment English</CardSubtitle>
						<Badge>Jul 2015</Badge>
					</Card>

					<Card>
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
