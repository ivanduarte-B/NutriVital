module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,css,jpg,PNG,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};