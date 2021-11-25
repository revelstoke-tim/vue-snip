import esbuild from 'rollup-plugin-esbuild'
import { babel } from '@rollup/plugin-babel'
import pkg from './package.json'
import serve from 'rollup-plugin-serve'

const input = 'src/index.js'

export default () => {
  const plugins = [
    babel({
      babelHelpers: 'bundled',
      presets: [['@babel/preset-env', { targets: { ie: '11' } }]]
    }),
    esbuild({ minify: true })
  ]

  if (process.env.NODE_ENV === 'development') {
    plugins.push(serve({ port: 3000, contentBase: 'docs' }))
  }

  return [
    {
      input,
      output: [
        {
          file: pkg.main,
          format: 'umd',
          name: 'VueSnip'
        },
        {
          file: pkg.main.replace('dist', 'docs'),
          format: 'umd',
          name: 'VueSnip'
        },
        {
          file: pkg.main.replace('dist', 'cypress/tests'),
          format: 'umd',
          name: 'VueSnip'
        }
      ],
      plugins: plugins
    }
  ]
}
