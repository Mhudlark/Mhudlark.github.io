import * as React from 'react';
import homeContent from '../../../../data/content/home';
import { IconLinkType } from '../../componentTypes';
import './styles.scss';

interface Props {
	type: IconLinkType;
}

const IconLink = ({ type }: Props) => {
	const options =
		type == IconLinkType.resume
			? {
					download: true,
			  }
			: {
					target: '_blank',
					rel: 'noopener',
			  };

	const typeClassName = homeContent.links[type].className;

	return (
		<a
			className={`icon-link pushable ${typeClassName}`}
			href={homeContent.links[type].url}
			{...options}
		>
			<div className="shadow" />
			<div className="edge" />
			<span className={`front ${typeClassName}`} />
		</a>
	);
};

export default IconLink;
