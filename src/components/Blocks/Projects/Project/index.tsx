import React from 'react';
import { TypographyVariants } from '../../../Components/componentTypes';
import Typography from '../../../Components/Typography';
import './styles.scss';

interface Project {
	subtitle: string;
	url: string;
	text: string[];
	imageUrl: string;
}

interface Props {
	project: Project;
}

const IconLink = ({ project }: Props) => {
	return (
		<div className="project">
			<div className="info-container">
				<div className="name-container">
					<Typography variant={TypographyVariants.h3}>{project.subtitle}</Typography>
					<a className="project-url" href={project.url} target="_blank" rel="noopener">
						{project.url}
					</a>
				</div>
				<Typography>{project.text}</Typography>
			</div>
			<img src={project.imageUrl} alt="project" />
		</div>
	);
};

export default IconLink;
