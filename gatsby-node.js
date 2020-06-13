'use strict'

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
})

// https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-rough-notation/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = require('./gatsby-node/index').createPages
