import * as React from 'react';
import homeContent, { IconLinkType } from '../../../data/content/home';
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

	return (
		<a
			className={`link ${homeContent.links[type].className}`}
			href={homeContent.links[type].url}
			{...options}
		/>
	);
};

export default IconLink;
