import nodeResolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'test/index.js',
  output: {
    file: '.temp/test/tests.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve(),
    postcss()
  ]
}
