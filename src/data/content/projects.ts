const projectsContent = {
	title: 'Projects',
	projects: [
		{
			subtitle: `MLVET`,
			url: 'https://www.mlvet.app/',
			primaryImages: [
				{
					url: './assets/images/projects/mlvet/MLVET.png',
					alt: 'MLVET Editor page',
				},
			],
			subsections: [
				{
					title: 'Features',
					text: [
						`Desktop video editing tool`,
						`ML cloud and local transcription of video content`,
						`Edit the transcription to edit the output video`,
						`Live preview of output video`,
						`Export tp MP4 and EDL file formats`,
					],
				},
				{
					title: 'Challenges I faced',
					text: [`Live video preview`, `CI/CD packaging pipeline`, `Local transcription`],
				},
			],
		},
		{
			subtitle: `Lah`,
			url: 'https://play.google.com/store/apps/details?id=com.TruncusRumpus.Lah',
			primaryImages: [
				{
					url: './assets/images/projects/lah/screenshot1.png',
					alt: 'MLVET Editor page',
				},
				{
					url: './assets/images/projects/lah/screenshot2.png',
					alt: 'MLVET Editor page',
				},
				{
					url: './assets/images/projects/lah/screenshot3.png',
					alt: 'MLVET Editor page',
				},
			],
			subsections: [
				{
					title: 'Summary',
					text: `Lah is a mobile game hosted on the Google Play Store. It is
					a 2D platformer/endless jumping game where players must climb blocks
					to evade the lava rising from below. The game is written in C# and was
					built using Unity.`,
				},
				{
					title: 'Challenges I faced',
					text: [
						`Collision detection using raytracing`,
						`Music creation`,
						`UI and sprite design`,
						`Creating 3D look with 2D sprites`,
					],
				},
			],
		},
	],
};

export default projectsContent;
