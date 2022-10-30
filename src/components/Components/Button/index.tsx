import * as React from 'react';
import './styles.scss';

interface Props {
	type?: ButtonType;
}

export enum ButtonType {
	primary = 'primary',
	success = 'success',
	warning = 'warning',
	danger = 'danger',
	info = 'info',
}

const Button = ({ type = ButtonType.primary }: Props) => {
	return (
		<button className={`pushable ${type}`} onClick={() => console.log('clicked')}>
			<div className="shadow" />
			<div className="edge" />
			<span className="front">Push me</span>
		</button>
	);
};

export default Button;
