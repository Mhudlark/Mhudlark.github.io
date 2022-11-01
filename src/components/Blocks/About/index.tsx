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
				<Typography>{aboutContent.previousExperience.text}</Typography>
			</div>
		</div>
	);
};

export default About;
