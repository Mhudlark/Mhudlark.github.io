import { scrollIntoView } from 'seamless-scroll-polyfill';

export const smoothScrollTo = (elem: Element) => {
	scrollIntoView(elem, {
		behavior: 'smooth',
		block: 'start',
		inline: 'nearest',
	});
};
