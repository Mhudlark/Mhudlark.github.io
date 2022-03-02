import * as React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar/Navbar';
import './Home.scss';
import homeContent from '../data/homeContent';
import About from '../components/About/About';
import favicon from '../images/hh-logo-icon.svg';

const IndexPage = () => {
	return (
		<>
			<Helmet
				link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
			>
				<title>Hugh Henry</title>
				<meta name="description" content="Hugh Henry's personal website" />
				<meta name="referrer" content="origin" />
			</Helmet>
			<main className="main">
				<Navbar
					onHomeClick={() => console.log('Home clicked')}
					onAboutClick={() => console.log('About Me clicked')}
					onProjectsClick={() => console.log('Projects clicked')}
				/>
				<section className="section logo-section">
					<div className="logo-title-container">
						<div className="logo-img" aria-label="Logo" />
						<h1 className="h-100 title">{homeContent.title}</h1>
						<h3 className="h-600 email">{homeContent.email}</h3>
						<ul className="links-container">
							<li className="link github">
								<a
									href="https://github.com/Mhudlark"
									target="_blank"
									rel="noopener"
								/>
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
								<button
									type="button"
									className=""
									onClick={() => {
										console.log('Download PDF!');
									}}
								/>
							</li>
						</ul>
					</div>
				</section>
				<section className="section about-section">
					<About />
				</section>
			</main>
		</>
	);
};

export default IndexPage;
