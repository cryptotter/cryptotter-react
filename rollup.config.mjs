import {babel} from '@rollup/plugin-babel';
import babelConfig from './babel.config.cjs';
import {terser} from 'rollup-plugin-terser';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import copy from 'rollup-plugin-copy';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = [
  {
    input: join(__dirname, './build-assets/path-cjs.cjs'),
    output: {
      file: join(__dirname, 'dist/cjs/index.js'),
      format: 'cjs',
    },
    plugins: [
      copy({
        targets: [
          {
            src: join(__dirname, './build-assets/package-cjs.json'),
            dest: join(__dirname, './dist/cjs'),
            rename: 'package.json',
          },
        ],
      }),
    ],
  },
  {
    input: join(__dirname, 'src/index.js'),
    output: {
      file: join(__dirname, 'dist/cjs/dev.js'),
      format: 'cjs',
    },
    plugins: [
      babel({
        ...babelConfig,
      }),
    ],
    external: ['react', 'prop-types'],
  },
  {
    input: join(__dirname, 'src/index.js'),
    output: {
      file: join(__dirname, 'dist/cjs/prod.js'),
      format: 'cjs',
    },
    plugins: [
      babel({
        ...babelConfig,
      }),
      terser(),
    ],
    external: ['react', 'prop-types'],
  },
  {
    input: join(__dirname, 'src/index.js'),
    output: {
      file: join(__dirname, 'dist/esm/dev.js'),
      format: 'esm',
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        ...babelConfig,
      }),
    ],
    external: ['react', 'prop-types'],
  },
  {
    input: join(__dirname, 'src/index.js'),
    output: {
      file: join(__dirname, 'dist/esm/prod.js'),
      format: 'esm',
    },
    plugins: [
      babel({
        ...babelConfig,
      }),
      terser(),
    ],
    external: ['react', 'prop-types'],
  },
];

export default config;
