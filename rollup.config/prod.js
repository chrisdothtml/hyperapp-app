import nodeResolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'lib/index.js',
  output: {
    file: 'dist/app.min.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve(),
    postcss({
      extract: true,
      minimize: true
    }),
    uglify()
  ]
}
