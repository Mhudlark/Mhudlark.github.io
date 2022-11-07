import * as React from 'react';
import './styles.scss';

interface Props {
	title: string;
	onClick: () => void;
	disabled?: boolean;
}

const NavbarItem = ({ title, onClick, disabled = false }: Props) => {
	return (
		<button
			type="button"
			className={`navbar-item ${disabled ? 'disabled' : ''}`}
			onClick={onClick}
			aria-label={title}
			disabled={disabled}
			title={title}
		>
			{title}
		</button>
	);
};

export default NavbarItem;
