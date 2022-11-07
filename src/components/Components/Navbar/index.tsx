import * as React from 'react';
import './styles.scss';
import baseContent from '../../../data/content/base';
import NavbarItem from '../NavbarItem';

interface Props {
	onHomeClick: () => void;
	onAboutClick: () => void;
	onProjectsClick: () => void;
}

const Navbar = ({ onHomeClick, onAboutClick, onProjectsClick }: Props) => {
	return (
		<nav className="navbar">
			<ul className="navbar-items-container">
				<li>
					<NavbarItem title={baseContent.pages.home} onClick={onHomeClick} />
				</li>
				<li>
					<NavbarItem title={baseContent.pages.about} onClick={onAboutClick} />
				</li>
				<li>
					<NavbarItem title={baseContent.pages.projects} onClick={onProjectsClick} />
				</li>
			</ul>
			<a
				className="mobile-contact-button"
				href="mailto:hughcthenry@gmail.com"
				title="Contact me"
			>
				<p>Contact me</p>
			</a>
		</nav>
	);
};

export default Navbar;
