import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';
var input = 'src/Pong.js'
export default [
	// browser-friendly UMD build
	{
		input: input,
		output: {
			name: 'Pong',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(),
			commonjs()
		]
	},

	// minified browser-friendly UMD build
	{
		input: input,
		output: {
			name: 'Pong',
			file: pkg.min_browser,
			format: 'umd'
		},
		plugins: [
			resolve(),
			commonjs(),
			uglify()
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	{
		input: input,
		external: ['ms'],
		plugins: [
		],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	},

	// minified CommonJS (for Node) and ES module (for bundlers) build.
	{
		input: input,
		external: ['ms'],
		plugins: [
			uglify()
		],
		output: [
			{ file: pkg.min_main, format: 'cjs' },
			{ file: pkg.min_module, format: 'es' }
		]
	}
	
];
