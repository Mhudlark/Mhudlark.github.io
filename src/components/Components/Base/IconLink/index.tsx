import * as React from 'react';
import homeContent from '../../../../data/content/home';
import { IconLinkType } from '../../componentTypes';
import './styles.scss';

interface Props {
	type: IconLinkType;
}

/**
 * Base component for icon links.
 * Classes:
 * 	`icon-link`: Base component styling
 * 	`icon-link:after`: Icon styling
 */
const IconLinkBase = ({ type }: Props) => {
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
			className={`icon-link ${typeClassName}`}
			href={homeContent.links[type].url}
			{...options}
		/>
	);
};

export default IconLinkBase;
