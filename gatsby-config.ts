import type { GatsbyConfig } from 'gatsby';
import path from 'path';

// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
	process.cwd(),
	'node_modules',
	'gatsby',
	'dist',
	'utils',
	'eslint-rules',
);

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Hugh Henry`,
		siteUrl: `https://www.hughcthenry.com`,
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				// Gatsby required rules directory
				rulePaths: [gatsbyRequiredRules],
				// Default settings that may be ommitted or customized
				stages: ['develop'],
				extensions: ['js', 'jsx', 'ts', 'tsx'],
				exclude: ['node_modules', 'bower_components', '.cache', 'public'],
				// Any additional eslint-webpack-plugin options below
				// ...
			},
		},
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				sassOptions: {
					includePaths: [`${__dirname}/src/styles`, `${__dirname}/src/assets`],
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
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/assets/images/favicon.png',
			},
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
};

export default config;
