import { scrollIntoView, polyfill } from 'seamless-scroll-polyfill';

export const smoothScrollToTop = (window: Window) => {
	polyfill();

	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
};

export const smoothScrollTo = (elem: Element) => {
	scrollIntoView(elem, {
		behavior: 'smooth',
		block: 'start',
		inline: 'nearest',
	});
};
