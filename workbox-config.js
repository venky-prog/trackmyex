module.exports = {
	globDirectory: 'dist',
	globPatterns: [
		'**/*.{html,json,Identifier,png,ico,ttf,css,js}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};