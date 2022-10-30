import * as React from 'react';
import './styles.scss';

interface Props {
	type?: ButtonType;
	onClick?: () => void;
	disabled?: boolean;
}

export enum ButtonType {
	primary = 'primary',
	success = 'success',
	warning = 'warning',
	danger = 'danger',
	info = 'info',
}

const Button = ({
	type = ButtonType.primary,
	onClick = () => {},
	disabled = false,
}: Props) => {
	return (
		<button
			className={`pushable ${type} ${disabled ? 'disabled' : ''}`}
			onClick={onClick}
			disabled={disabled}
		>
			<div className="shadow" />
			<div className="edge" />
			<span className="front">Push me</span>
		</button>
	);
};

export default Button;
