import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
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
	}
];
