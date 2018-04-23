import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';

function onwarn(warning) {
  if (warning.code === 'THIS_IS_UNDEFINED')
    return;
  console.error(warning.message);
}

export default [
  // {
  //   input: 'bin/index.js',
  //   output: {
  //     file: 'dist/channels-embed.js',
  //     format: 'iife',
  //     name: 'channels'
  //   },
  //   onwarn,
  //   plugins: [resolve()]
  // },
  {
    input: 'bin/index.js',
    output: {
      file: 'dist/channels-embed.min.js',
      format: 'iife',
      name: 'channels'
    },
    onwarn,
    plugins: [resolve(), minify({ comments: false })]
  }
];