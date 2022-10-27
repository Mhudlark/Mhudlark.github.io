import * as React from 'react';
import './styles.scss';
import aboutContent from '../../data/aboutContent';

const About = () => {
	return (
		<div className="about-container">
			<div className="about-me-container">
				<h3 className="h-400 subtitle">{aboutContent.aboutMe.subtitle}</h3>
				<p className="p">{aboutContent.aboutMe.text}</p>
			</div>
			<span className="horizontal-line-break" />
			<div className="previous-experience-container">
				<h3 className="h-400 subtitle">{aboutContent.previousExperience.subtitle}</h3>
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
			<span className="horizontal-line-break" />
			<div className="education-container">
				<h3 className="h-400 subtitle">{aboutContent.education.subtitle}</h3>
				<ul className="experiences-container">
					{aboutContent.education.experiences.map((experience, index) => (
						<li className="experience" key={index}>
							<div className="p role-date">{experience.dates}</div>
							<div className="p">{experience.title}</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default About;
