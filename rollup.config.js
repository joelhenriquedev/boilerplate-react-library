import external from 'rollup-plugin-peer-deps-external'
import commonjs from 'rollup-plugin-commonjs'

export default {
	input: 'src/main.js',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
	plugins: [
		external(),
		commonjs()
	]
};
