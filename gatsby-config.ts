import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Hugh Henry`,
		siteUrl: `https://www.hughcthenry.com`,
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
				exclude: /(node_modules|.cache|public)/,
				stages: ['develop'],
				options: {
					emitWarning: true,
					failOnError: false,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				sassOptions: {
					includePaths: [`${__dirname}/src/styles`],
				},
				additionalData: `@use 'variables' as *; @use 'mixins' as *;`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`,
				ignore: [`**/\.*`], // ignore files starting with a dot
			},
		},
	],
};

export default config;
