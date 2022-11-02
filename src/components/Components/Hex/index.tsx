import React from 'react';
import './styles.scss';

interface Props {
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

const Hex = ({ children, style }: Props) => {
	return (
		<div className="hex-outer" style={style}>
			<div className="shadow-bottom-1" />
			<div className="shadow-bottom-2" />
			<div className="shadow-right-1" />
			<div className="shadow-right-2" />
			<div className="hex-inner">{children}</div>
		</div>
	);
};

export default Hex;
