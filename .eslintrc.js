module.exports = {
	globals: {
		__PATH_PREFIX__: true,
	},
	extends: ['airbnb-typescript'],
	parserOptions: {
		sourceType: 'module',
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	rules: {
		'@typescript-eslint/quotes': 'off',
		'@typescript-eslint/indent': 'off',
		'import/extensions': 'off',
		'react/jsx-filename-extension': 'off',
		'import/no-extraneous-dependencies': 'off',
	},
};
