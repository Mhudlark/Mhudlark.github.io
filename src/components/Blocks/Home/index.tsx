import * as React from 'react';
import MainLogo from '../../MainLogo';
import './styles.scss';

const About = () => {
	return (
		<div className="logo-title-container">
			<MainLogo />
			<ul className="links-container">
				<li className="link github">
					<a href="https://github.com/Mhudlark" target="_blank" rel="noopener" />
				</li>
				<li className="link linkedIn">
					<a
						href="https://www.linkedin.com/in/hugh-henry-0ab6b31b5/"
						target="_blank"
						rel="noopener"
					/>
				</li>
				<li className="link spotify">
					<a
						href="https://open.spotify.com/user/truncusrumpus?si=wabDsx5pRFWq-sXKC0jVPw"
						target="_blank"
						rel="noopener"
					/>
				</li>
				<li className="link resume">
					<a href={'../data/about_files/Resume - Hugh Henry.pdf'} download />
				</li>
			</ul>
		</div>
	);
};

export default About;
