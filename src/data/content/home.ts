import { IconLinkType } from '../../components/Components/componentTypes';

const homeContent = {
	title: 'Hugh Henry',
	email: 'hughcthenry@gmail.com',
	links: {
		[IconLinkType.github]: {
			name: 'Github',
			className: 'github',
			url: 'https://github.com/Mhudlark',
		},
		[IconLinkType.linkedIn]: {
			name: 'LinkedIn',
			className: 'linkedIn',
			url: 'https://www.linkedin.com/in/hugh-henry-0ab6b31b5/',
		},
		[IconLinkType.spotify]: {
			name: 'Spotify',
			className: 'spotify',
			url: 'https://open.spotify.com/user/truncusrumpus?si=wabDsx5pRFWq-sXKC0jVPw',
		},
		[IconLinkType.resume]: {
			name: 'Download CV',
			className: 'resume',
			url: './assets/documents/Resume - Hugh Henry.pdf',
		},
	},
};

export default homeContent;
