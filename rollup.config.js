import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'bin/index.js',
  output: {
    file: 'dist/channels-embed.js',
    format: 'iife',
    name: 'channels'
  },
  plugins: [resolve(), minify({ comments: false })]
};