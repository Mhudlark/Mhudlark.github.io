import React from 'react';
import BulletList from '../../../Components/BulletList';
import { TypographyVariants } from '../../../Components/componentTypes';
import Typography from '../../../Components/Typography';
import './styles.scss';

interface ProjectData {
	subtitle: string;
	url: string;
	subsections: {
		title: string;
		text: string | string[];
	}[];
	primaryImages: {
		url: string;
		alt?: string;
	}[];
}

interface Props {
	project: ProjectData;
}

const Project = ({ project }: Props) => {
	return (
		<div className="project">
			<div className="name-container">
				<Typography variant={TypographyVariants.h3}>{project.subtitle}</Typography>
				<a
					className="project-url"
					href={project.url}
					title={project.subtitle}
					target="_blank"
					rel="noopener"
				/>
			</div>
			{Array.isArray(project?.primaryImages) && project.primaryImages.length > 0 && (
				<div className="primary-images-container">
					{project.primaryImages.map((image, index) => (
						<img
							key={index}
							src={image.url}
							alt={image?.alt ?? `primary-image-${index}`}
						/>
					))}
				</div>
			)}
			<div className="subsections-container">
				{Array.isArray(project?.subsections) &&
					project.subsections.map(subsection => (
						<div key={subsection.title} className="subsection">
							<Typography variant={TypographyVariants.h4}>{subsection.title}</Typography>
							{Array.isArray(subsection.text) ? (
								<BulletList>{subsection.text}</BulletList>
							) : (
								<Typography>{subsection.text}</Typography>
							)}
						</div>
					))}
			</div>
		</div>
	);
};

export default Project;
