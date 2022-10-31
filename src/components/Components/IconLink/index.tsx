import * as React from 'react';
import IconLinkBase from '../Base/IconLink';
import { IconLinkType } from '../componentTypes';
import './styles.scss';

interface Props {
	type: IconLinkType;
}

const IconLink = ({ type }: Props) => {
	return (
		<div className="hex-outer">
			<div className="hex-inner">
				<IconLinkBase type={type} />
			</div>
		</div>
	);
};

export default IconLink;
