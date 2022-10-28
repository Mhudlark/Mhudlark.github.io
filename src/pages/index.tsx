import * as React from 'react';
import { useRef } from 'react';
import Navbar from '../components/Components/Navbar';
import './styles.scss';
import About from '../components/Blocks/About';
import { smoothScrollTo } from '../util/ui';
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
			<section className="section home" ref={homeRef}>
				<Home />
			</section>
			<section className="section about" ref={aboutRef}>
				<About />
			</section>
		</main>
	);
};

export default IndexPage;
