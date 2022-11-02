const projectsContent = {
	title: 'Projects',
	projects: [
		{
			subtitle: `MLVET`,
			url: 'https://www.mlvet.app/',
			image: {
				url: './assets/images/projects/mlvet/MLVET.png',
			},
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
	],
};

export default projectsContent;
