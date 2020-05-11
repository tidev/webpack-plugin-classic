/* eslint indent: ["error", "tab", { "MemberExpression": "off" }] */

const CopyPlugin = require('copy-webpack-plugin');

module.exports = function (api, options) {
	api.chainWebpack(config => {
		// resolve -----------------------------------------------------------------

		config.resolve
			.alias
				.set('@', api.resolve('src'));

		// plugins -----------------------------------------------------------------

		const ignorePattern = {
			android: [ 'iphone/**/*', 'ios/**/*' ],
			ios: [ 'android/**/*' ]
		};
		config.plugin('copy-assets')
			.use(CopyPlugin, [
				[
					{
						from: 'src/assets',
						to: '.',
						ignore: ignorePattern[options.build.platform]
					}
				]
			]);
	}, { after: 'built-in:config/base' });
};
