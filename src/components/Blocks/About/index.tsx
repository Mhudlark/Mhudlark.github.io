import * as React from 'react';
import './styles.scss';
import aboutContent from '../../../data/content/about';
import Typography from '../../Components/Typography';
import { TypographyVariants } from '../../Components/componentTypes';

const About = () => {
	return (
		<div className="about-content">
			<Typography variant={TypographyVariants.h2}>{aboutContent.title}</Typography>
			<div className="about-container">
				<Typography variant={TypographyVariants.h4} className="about-subtitle">
					{aboutContent.about.subtitle}
				</Typography>
				<Typography>{aboutContent.about.text}</Typography>
			</div>
			<span className="horizontal-line-break" />
			<div className="previous-experience-container">
				<Typography variant={TypographyVariants.h4} className="about-subtitle">
					{aboutContent.previousExperience.subtitle}
				</Typography>
				<Typography>{aboutContent.previousExperience.text}</Typography>
			</div>
		</div>
	);
};

export default About;
