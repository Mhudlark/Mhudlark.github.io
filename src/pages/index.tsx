import * as React from 'react';
import { useRef } from 'react';
import Navbar from '../components/Components/Navbar';
import './styles.scss';
import About from '../components/Blocks/About';
import { smoothScrollTo, smoothScrollToTop } from '../util/ui';
import Home from '../components/Blocks/Home';

export const Head = () => {
	return (
		<>
			<title>Hugh Henry</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0;" />
			<meta name="referrer" content="origin" />
		</>
	);
};

const IndexPage = () => {
	const aboutRef = useRef<null | HTMLElement>(null);

	const scrollToHome = () => {
		smoothScrollToTop();
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
			<div>
				<section className="section home">
					<Home />
				</section>
				<div className="br triangle" />
			</div>
			<section className="section about" ref={aboutRef}>
				<About />
			</section>
		</main>
	);
};

export default IndexPage;
