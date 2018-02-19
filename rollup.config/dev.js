import nodeResolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'lib/index.js',
  output: {
    file: '.temp/dev/app.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve(),
    postcss()
  ]
}
