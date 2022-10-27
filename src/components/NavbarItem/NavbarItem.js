import * as React from 'react';
import './NavbarItem.scss';

const NavbarItem = ({ title, onClick, disabled = false }) => {
	return (
		<button
			type="button"
			className={`navbar-item ${disabled ? 'disabled' : ''}`}
			onClick={onClick}
			aria-label={title}
			disabled={disabled}
		>
			{title}
		</button>
	);
};

export default NavbarItem;
