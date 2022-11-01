import React from 'react';
import { TypographyVariants } from '../../../Components/componentTypes';
import Typography from '../../../Components/Typography';
import './styles.scss';

interface ProjectData {
	subtitle: string;
	url: string;
	text: string[];
	image: {
		url: string;
		alt?: string;
	};
}

interface Props {
	project: ProjectData;
}

const Project = ({ project }: Props) => {
	return (
		<div className="project">
			<div className="name-container">
				<Typography variant={TypographyVariants.h3}>{project.subtitle}</Typography>
				<a className="project-url" href={project.url} target="_blank" rel="noopener">
					{project.url}
				</a>
			</div>
			<div className="project-content-container">
				<Typography>{project.text}</Typography>
				<img src={project.image.url} alt={project.image?.alt ?? 'project-image'} />
			</div>
		</div>
	);
};

export default Project;
