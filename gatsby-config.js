module.exports = {
	siteMetadata: {
		title: `example title`,
		siteUrl: `https://www.exampledomain.tld`,
	},
	plugins: [
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
				name: `pages`,
				path: `${__dirname}/src/pages/`,
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
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-react-helmet',
	],
};
