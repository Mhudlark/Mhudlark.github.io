import * as React from 'react';
import { ButtonType } from '../../componentTypes';
import './styles.scss';

interface Props {
	type?: ButtonType;
	onClick?: () => void;
	disabled?: boolean;
	children?: React.ReactNode | String;
}

const KeyboardButton = ({
	type = ButtonType.primary,
	onClick = () => {},
	disabled = false,
	children,
}: Props) => {
	return (
		<button
			className={`keyboard-button pushable ${type} ${disabled ? 'disabled' : ''}`}
			onClick={onClick}
			disabled={disabled}
		>
			<div className="shadow" />
			<div className="edge" />
			<span className="front">{children}</span>
		</button>
	);
};

export default KeyboardButton;
