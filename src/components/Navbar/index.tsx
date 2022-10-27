import * as React from 'react';
import './styles.scss';
import textContent from '../../data/textContent';
import NavbarItem from '../NavbarItem';

interface Props {
	onHomeClick: () => void;
	onAboutClick: () => void;
	onProjectsClick: () => void;
}

const Navbar = ({ onHomeClick, onAboutClick, onProjectsClick }: Props) => {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<NavbarItem title={textContent.pages.home} onClick={onHomeClick} />
				</li>
				<li>
					<NavbarItem title={textContent.pages.about} onClick={onAboutClick} />
				</li>
				<li>
					<NavbarItem
						title={textContent.pages.projects}
						onClick={onProjectsClick}
						disabled
					/>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
