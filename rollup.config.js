import external from 'rollup-plugin-peer-deps-external'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import url from "rollup-plugin-url"


export default {
	input: 'src/main.js',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
	plugins: [
		external(),
		commonjs(),
		postcss({
			modules: true
		}),
		url()
	]
};
