import external from 'rollup-plugin-peer-deps-external'

export default {
	input: 'src/main.js',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
	plugins: [
		external()
	]
};
