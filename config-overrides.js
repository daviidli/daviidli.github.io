const {
	override,
	fixBabelImports,
	addLessLoader,
	addWebpackModuleRule
} = require('customize-cra');

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true
	}),
	addLessLoader({
		lessOptions: {
			javascriptEnabled: true,
			modifyVars: { '@primary-color': '#1890ff' }
		}
	}),
	addWebpackModuleRule({
		test: /\.md$/,
		use: { loader: 'raw-loader' }
	})
);
