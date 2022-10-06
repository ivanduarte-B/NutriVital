module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,css,jpg,png,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};