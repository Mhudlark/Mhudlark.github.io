import React, { Fragment } from 'react';
import './styles.scss';
import Typography from '../../Components/Typography';
import { TypographyVariants } from '../../Components/componentTypes';
import projectsContent from '../../../data/content/projects';
import Project from './Project';

const About = () => {
	return (
		<div className="projects-content">
			<Typography variant={TypographyVariants.h1}>{projectsContent.title}</Typography>
			<div className="projects-container">
				{Array.isArray(projectsContent.projects) &&
					projectsContent.projects.map((project, index) => (
						<Fragment key={index}>
							<Project project={project} />
							{index !== projectsContent.projects.length - 1 && (
								<span className="horizontal-line-break" />
							)}
						</Fragment>
					))}
			</div>
		</div>
	);
};

export default About;
