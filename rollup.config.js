import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json'
import cleanup from 'rollup-plugin-cleanup';
import { DEFAULT_EXTENSIONS } from '@babel/core';

const input = "src/index.js";

const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
  exclude: 'node_modules/**'
}

const plugins = [
  external(),
  postcss({
    modules: false
  }),
  url(),
  cleanup(),
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled',
    extensions: [
      ...DEFAULT_EXTENSIONS,
      '.ts',
      '.tsx'
    ]
  }),
  resolve(),
  commonjs(commonjsOptions),
  terser(),
  typescript(),
]

const output = [
  {
    file: pkg.main,
    format: 'cjs',
    sourcemap: true
  },
  {
    file: pkg.module,
    format: 'es',
    sourcemap: true
  },
]

export default [{
  input,
  external: [
    'react',
    'react-dom',
    'prop-types',
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  output,
  plugins
}]
