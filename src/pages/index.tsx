import * as React from 'react';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import './Home.scss';
import homeContent from '../data/homeContent';
import About from '../components/About';
import { smoothScrollTo } from '../util/ui';

export const Head = () => {
	return (
		<>
			<title>Hugh Henry</title>
			<link rel="shortcut icon" type="image/png" href={'../images/favicon.png?'} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0;" />
			<meta name="referrer" content="origin" />
		</>
	);
};

const IndexPage = () => {
	const homeRef = useRef<null | HTMLElement>(null);
	const aboutRef = useRef<null | HTMLElement>(null);

	const scrollToHome = () => {
		if (homeRef.current !== null) smoothScrollTo(homeRef.current as Element);
	};

	const scrollToAbout = () => {
		if (aboutRef.current !== null) smoothScrollTo(aboutRef.current as Element);
	};

	return (
		<main className="main">
			<Navbar
				onHomeClick={scrollToHome}
				onAboutClick={scrollToAbout}
				onProjectsClick={() => console.log('Projects clicked')}
			/>
			<section className="section logo-section" ref={homeRef}>
				<div className="logo-title-container">
					<div className="logo-img" aria-label="Logo" />
					<h1 className="h-100 title">{homeContent.title}</h1>
					<h3 className="h-600 email">{homeContent.email}</h3>
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
			</section>
			<section className="section about-section" ref={aboutRef}>
				<About />
			</section>
		</main>
	);
};

export default IndexPage;
