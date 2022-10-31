import React from 'react';
import './styles.scss';

interface Props {
	additionalClasses?: string;
	children?: React.ReactNode;
}

const Hex = ({ additionalClasses, children }: Props) => {
	return (
		<div className={`hex-outer ${additionalClasses}`}>
			<div className="hex-inner">{children}</div>
		</div>
	);
};

export default Hex;
