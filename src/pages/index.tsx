import * as React from 'react';
import { useRef } from 'react';
import Navbar from '../components/Components/Navbar';
import './styles.scss';
import About from '../components/Blocks/About';
import { smoothScrollTo, smoothScrollToTop } from '../util/ui';
import Home from '../components/Blocks/Home';
import Projects from '../components/Blocks/Projects';
import Typography from '../components/Components/Typography';
import { TypographyVariants } from '../components/Components/componentTypes';
import homeContent from '../data/content/home';

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
	const projectsRef = useRef<null | HTMLElement>(null);

	const scrollToHome = () => {
		smoothScrollToTop(window);
	};

	const scrollToAbout = () => {
		if (aboutRef.current !== null) smoothScrollTo(aboutRef.current as Element);
	};

	const scrollToProjects = () => {
		if (projectsRef.current !== null) smoothScrollTo(projectsRef.current as Element);
	};

	return (
		<main className="main">
			<Navbar
				onHomeClick={scrollToHome}
				onAboutClick={scrollToAbout}
				onProjectsClick={scrollToProjects}
			/>
			<div>
				<section className="section home">
					<Home />
				</section>
				<div className="br triangle" />
			</div>
			<div className="name-title-container">
				<Typography variant={TypographyVariants.h1} className="name-title">
					{homeContent.title}
				</Typography>
			</div>
			<section className="section about" ref={aboutRef}>
				<About />
			</section>
			<section className="section projects" ref={projectsRef}>
				<Projects />
			</section>
		</main>
	);
};

export default IndexPage;
