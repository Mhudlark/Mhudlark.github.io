import * as React from 'react';
import { IconLinkType } from '../../../Components/componentTypes';
import './styles.scss';
import homeContent from '../../../../data/content/home';

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
		<div className="icon-link hex-outer">
			<div className="hex-inner">
				<a
					className={`icon-link-base ${typeClassName}`}
					href={homeContent.links[type].url}
					{...options}
				/>
			</div>
		</div>
	);
};

export default IconLink;
