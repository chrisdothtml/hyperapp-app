import nodeResolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

function handleEnv (config) {
  if (process.env.TARGET === 'production') {
    config.output.file = 'dist/app.min.js'
    config.plugins.push(uglify())
  }

  return config
}

export default handleEnv({
  input: 'lib/index.js',
  output: {
    file: 'demo/app.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve()
  ]
})
