import * as React from 'react';
import './styles.scss';
import aboutContent from '../../../data/content/about';
import Typography from '../../Components/Typography';
import { TypographyVariants } from '../../Components/componentTypes';

const About = () => {
	return (
		<div className="about-content">
			<Typography variant={TypographyVariants.h1}>{aboutContent.title}</Typography>
			<div className="about-container">
				<Typography variant={TypographyVariants.h3}>
					{aboutContent.about.subtitle}
				</Typography>
				<Typography>{aboutContent.about.text}</Typography>
			</div>
			<span className="horizontal-line-break" />
			<div className="previous-experience-container">
				<Typography variant={TypographyVariants.h3}>
					{aboutContent.previousExperience.subtitle}
				</Typography>
				<ul className="experiences-container">
					{aboutContent.previousExperience.experiences.map((experience, index) => (
						<li className="experience" key={index}>
							<ul className="roles-container">
								{experience.roles.map((role, roleIndex) => (
									<li className="role" key={roleIndex}>
										<div className="date-title-container">
											<div className="p role-date">{role.dates}</div>
											<div className="p role-title">{role.organisationAndRole}</div>
										</div>
										{Array.isArray(role.dotPoints) && role.dotPoints.length > 0 && (
											<ul className="description-points-container">
												{role.dotPoints.map((point, pointIndex) => (
													<li className="p description-point" key={pointIndex}>
														{point}
													</li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default About;
